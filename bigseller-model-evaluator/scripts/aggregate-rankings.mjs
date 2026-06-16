#!/usr/bin/env node

import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DEFAULT_INPUT_DIR = path.join(ROOT, "out", "stable-runs");
const DEFAULT_OUT = path.join(ROOT, "out", "model-ranking.json");
const DEFAULT_REPORT = path.join(ROOT, "out", "report.md");
const DEFAULT_RUNTIME_CONFIG = path.join(ROOT, "out", "runtime-model-config.json");
const DEFAULT_FAIL_SUMMARY = path.join(ROOT, "out", "fail-summary.json");
const DEFAULT_MIN_STABLE_RUNTIME_ELIGIBLE_RATE = 0.5;
const QUALITY_HARD_PASS_THRESHOLD = 0.5;

function parseArgs(argv) {
  const args = {
    inputs: [],
    inputDir: DEFAULT_INPUT_DIR,
    pattern: "^round-.*model-ranking\\.json$",
    out: DEFAULT_OUT,
    report: DEFAULT_REPORT,
    runtimeConfig: DEFAULT_RUNTIME_CONFIG,
    failSummary: DEFAULT_FAIL_SUMMARY,
    minStableRuntimeEligibleRate: DEFAULT_MIN_STABLE_RUNTIME_ELIGIBLE_RATE
  };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === "--input") {
      args.inputs.push(next);
      i++;
    } else if (arg === "--input-dir") {
      args.inputDir = next;
      i++;
    } else if (arg === "--pattern") {
      args.pattern = next;
      i++;
    } else if (arg === "--out") {
      args.out = next;
      i++;
    } else if (arg === "--report") {
      args.report = next;
      i++;
    } else if (arg === "--runtime-config") {
      args.runtimeConfig = next;
      i++;
    } else if (arg === "--fail-summary") {
      args.failSummary = next;
      i++;
    } else if (arg === "--min-stable-runtime-eligible-rate") {
      args.minStableRuntimeEligibleRate = Number(next || DEFAULT_MIN_STABLE_RUNTIME_ELIGIBLE_RATE);
      i++;
    } else if (arg === "--help" || arg === "-h") {
      args.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

function usage() {
  console.log(`
Usage:
  node scripts/aggregate-rankings.mjs --input-dir out/stable-runs
  node scripts/aggregate-rankings.mjs --input round-1.json --input round-2.json

Options:
  --input <file>                         Add one source model-ranking.json. Can be repeated.
  --input-dir <dir>                      Directory containing ranking files, default out/stable-runs.
  --pattern <regex>                      File name regex for --input-dir, default ^round-.*model-ranking\\.json$.
  --out <file>                           Aggregated ranking output, default out/model-ranking.json.
  --report <file>                        Aggregated markdown report, default out/report.md.
  --runtime-config <file>                Runtime config output, default out/runtime-model-config.json.
  --fail-summary <file>                  Aggregated failure summary, default out/fail-summary.json.
  --min-stable-runtime-eligible-rate <n> Runtime must pass in this fraction of rounds, default 0.5.
`);
}

async function listInputFiles(args) {
  if (args.inputs.length) {
    return args.inputs;
  }
  const pattern = new RegExp(args.pattern);
  const entries = await readdir(args.inputDir, { withFileTypes: true });
  return entries
    .filter(entry => entry.isFile() && pattern.test(entry.name))
    .map(entry => path.join(args.inputDir, entry.name))
    .sort((a, b) => a.localeCompare(b));
}

function number(value, fallback = 0) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function avg(values) {
  const nums = values.map(value => number(value)).filter(value => Number.isFinite(value));
  return nums.length ? nums.reduce((sum, value) => sum + value, 0) / nums.length : 0;
}

function round(value, digits = 0) {
  const scale = 10 ** digits;
  return Math.round(number(value) * scale) / scale;
}

function runtimePassFromAggregate(model, constraints, minRate) {
  const avgLatencyPass = !constraints.maxRuntimeLatencyMs || (model.avgLatencyMs > 0 && model.avgLatencyMs <= constraints.maxRuntimeLatencyMs);
  const maxLatencyPass = !constraints.maxRuntimeSingleLatencyMs || (model.maxLatencyMs > 0 && model.maxLatencyMs <= constraints.maxRuntimeSingleLatencyMs);
  const successPass = model.successRate >= constraints.minRuntimeSuccessRate;
  const timeoutPass = model.timeoutFailureRate <= constraints.maxTimeoutFailureRate;
  const stablePass = model.runtimeEligibleRate >= minRate;
  const reasons = [];
  if (!model.appearances) reasons.push("no evaluated rounds");
  if (!avgLatencyPass) reasons.push(`avg latency ${model.avgLatencyMs}ms > ${constraints.maxRuntimeLatencyMs}ms`);
  if (!maxLatencyPass) reasons.push(`max latency ${model.maxLatencyMs}ms > ${constraints.maxRuntimeSingleLatencyMs}ms`);
  if (!successPass) reasons.push(`success rate ${model.successRate.toFixed(3)} < ${constraints.minRuntimeSuccessRate}`);
  if (!timeoutPass) reasons.push(`timeout failure rate ${model.timeoutFailureRate.toFixed(3)} > ${constraints.maxTimeoutFailureRate}`);
  if (!stablePass) reasons.push(`runtime eligible rate ${model.runtimeEligibleRate.toFixed(3)} < ${minRate}`);
  return {
    runtimeEligible: model.appearances > 0 && avgLatencyPass && maxLatencyPass && successPass && timeoutPass && stablePass,
    reasons
  };
}

function selectModels(models) {
  const sorted = [...models].sort((a, b) => {
    if (a.runtimeEligible !== b.runtimeEligible) return Number(b.runtimeEligible) - Number(a.runtimeEligible);
    if (b.finalScore !== a.finalScore) return b.finalScore - a.finalScore;
    if (b.runtimeEligibleRate !== a.runtimeEligibleRate) return b.runtimeEligibleRate - a.runtimeEligibleRate;
    if (b.hardPassRate !== a.hardPassRate) return b.hardPassRate - a.hardPassRate;
    return a.avgLatencyMs - b.avgLatencyMs;
  });
  const runtimeUsable = sorted.filter(item => item.runtimeEligible && item.successRate > 0);
  const qualityUsable = runtimeUsable.filter(item => item.hardPassRate >= QUALITY_HARD_PASS_THRESHOLD);
  const successful = sorted.filter(item => item.successRate > 0);
  const selectedPool = qualityUsable.length ? qualityUsable : runtimeUsable.length ? runtimeUsable : successful.length ? successful : sorted;
  const selectedPolicy = qualityUsable.length
    ? "quality-and-runtime-eligible"
    : runtimeUsable.length
      ? "runtime-eligible-quality-warning"
      : successful.length
        ? "fallback-no-runtime-eligible"
        : "fallback-no-successful-model";
  const winner = selectedPool[0]?.id || "";
  const fallbacks = selectedPool.filter(item => item.id !== winner).slice(0, 4).map(item => item.id);
  return { sorted, runtimeUsable, qualityUsable, selectedPolicy, winner, fallbacks };
}

function runtimeConfigOutput(ranking) {
  const models = (ranking.runtimeSelection?.models || [ranking.winner, ...(ranking.fallbacks || [])]).filter(Boolean);
  return {
    schemaVersion: 1,
    provider: ranking.provider,
    baseUrl: ranking.baseUrl,
    task: ranking.task,
    promptVersion: ranking.promptVersion,
    updatedAt: ranking.updatedAt,
    sourceRankingUpdatedAt: ranking.updatedAt,
    winner: ranking.winner,
    fallbacks: ranking.fallbacks || [],
    runtimeConstraints: ranking.runtimeConstraints || null,
    runtimeSelection: ranking.runtimeSelection ? {
      selectedPolicy: ranking.runtimeSelection.selectedPolicy,
      eligibleCount: ranking.runtimeSelection.eligibleCount,
      qualityEligibleCount: ranking.runtimeSelection.qualityEligibleCount,
      stableRunCount: ranking.aggregation?.runCount
    } : undefined,
    runtimeEligibleModels: (ranking.models || []).filter(model => model.runtimeEligible).map(model => model.id),
    models
  };
}

function markdownReport(output) {
  const lines = [];
  lines.push("# BigSeller NVIDIA Stable Model Evaluation Report");
  lines.push("");
  lines.push(`- Updated: ${output.updatedAt}`);
  lines.push(`- Source runs: ${output.aggregation.runCount}`);
  lines.push(`- Winner: \`${output.winner || "none"}\``);
  lines.push(`- Fallbacks: ${output.fallbacks.map(x => `\`${x}\``).join(", ") || "none"}`);
  lines.push(`- Runtime selection policy: ${output.runtimeSelection.selectedPolicy}`);
  lines.push(`- Runtime eligible models: ${output.runtimeSelection.eligibleCount}`);
  if (output.runtimeSelection.selectedPolicy === "runtime-eligible-quality-warning") {
    lines.push("- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.");
  }
  lines.push("");
  lines.push("## Stable Ranking");
  lines.push("");
  lines.push("| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |");
  lines.push("|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|");
  output.models.forEach((model, index) => {
    lines.push(`| ${index + 1} | \`${model.id}\` | ${model.runtimeEligible ? "yes" : "no"} | ${model.finalScore} | ${model.avgQuality} | ${(model.hardPassRate * 100).toFixed(1)}% | ${(model.successRate * 100).toFixed(1)}% | ${(model.runtimeEligibleRate * 100).toFixed(1)}% | ${model.avgLatencyMs || "-"}ms | ${model.maxLatencyMs || "-"}ms | ${model.appearances}/${output.aggregation.runCount} |`);
  });
  if (output.runtimeSelection.excludedModels.length) {
    lines.push("");
    lines.push("## Runtime Exclusions");
    for (const item of output.runtimeSelection.excludedModels) {
      lines.push(`- \`${item.id}\`: ${(item.reasons || []).join("; ") || "not selected"}`);
    }
  }
  return lines.join("\n") + "\n";
}

function failSummaryOutput(output) {
  return {
    schemaVersion: 1,
    provider: output.provider,
    task: output.task,
    updatedAt: output.updatedAt,
    winner: output.winner,
    aggregation: output.aggregation,
    totals: {
      models: output.models.length,
      runtimeEligibleModels: output.models.filter(item => item.runtimeEligible).length,
      requestFailures: output.models.reduce((sum, item) => sum + item.requestFailureCount, 0),
      timeoutFailures: output.models.reduce((sum, item) => sum + item.timeoutFailureCount, 0)
    },
    models: output.models.map(model => ({
      id: model.id,
      finalScore: model.finalScore,
      avgQuality: model.avgQuality,
      hardPassRate: model.hardPassRate,
      successRate: model.successRate,
      runtimeEligibleRate: model.runtimeEligibleRate,
      runtimeEligible: model.runtimeEligible,
      runtimeRejectionReasons: model.runtimeRejectionReasons,
      appearances: model.appearances,
      runs: model.runs
    }))
  };
}

function buildAggregatedRanking(sources, sourceFiles, minRate) {
  const runCount = sources.length;
  const latestDetails = {};
  const groups = new Map();
  const constraints = sources[sources.length - 1].runtimeConstraints || {
    maxRuntimeLatencyMs: 6000,
    maxRuntimeSingleLatencyMs: 8000,
    minRuntimeSuccessRate: 0.8,
    maxTimeoutFailureRate: 0
  };

  sources.forEach((ranking, runIndex) => {
    for (const model of ranking.models || []) {
      if (!model?.id) continue;
      if (!groups.has(model.id)) groups.set(model.id, []);
      groups.get(model.id).push({ ...model, runIndex, sourceUpdatedAt: ranking.updatedAt });
      if (ranking.details?.[model.id]) latestDetails[model.id] = ranking.details[model.id];
    }
  });

  const models = [...groups.entries()].map(([id, runs]) => {
    const successfulRuns = runs.filter(run => run.successRate > 0);
    const latencyRuns = runs.filter(run => run.avgLatencyMs > 0);
    const timeoutFailures = runs.reduce((sum, run) => sum + number(run.timeoutFailureCount), 0);
    const requestFailures = runs.reduce((sum, run) => sum + number(run.requestFailureCount), 0);
    const tested = runs.reduce((sum, run) => sum + number(run.tested), 0);
    const successCount = runs.reduce((sum, run) => sum + number(run.successCount), 0);
    const skippedCount = runs.reduce((sum, run) => sum + number(run.skippedCount), 0);
    const model = {
      id,
      finalScore: round(avg(runs.map(run => run.finalScore))),
      avgQuality: round(avg(successfulRuns.length ? successfulRuns.map(run => run.avgQuality) : runs.map(run => run.avgQuality))),
      hardPassRate: round(avg(runs.map(run => run.hardPassRate)), 3),
      successRate: round(tested ? successCount / tested : avg(runs.map(run => run.successRate)), 3),
      requestFailureRate: round(tested ? requestFailures / tested : avg(runs.map(run => run.requestFailureRate)), 3),
      timeoutFailureRate: round(tested ? timeoutFailures / tested : avg(runs.map(run => run.timeoutFailureRate)), 3),
      avgLatencyMs: round(avg(latencyRuns.map(run => run.avgLatencyMs))),
      maxLatencyMs: round(Math.max(0, ...runs.map(run => number(run.maxLatencyMs)))),
      latencyPass: false,
      runtimeEligible: false,
      runtimeRejectionReasons: [],
      tested,
      successCount,
      requestFailureCount: requestFailures,
      timeoutFailureCount: timeoutFailures,
      skippedCount,
      appearances: runs.length,
      appearanceRate: round(runs.length / runCount, 3),
      runtimeEligibleRate: round(runs.filter(run => run.runtimeEligible).length / runCount, 3),
      qualityEligibleRate: round(runs.filter(run => run.hardPassRate >= QUALITY_HARD_PASS_THRESHOLD).length / runCount, 3),
      runs: runs.map(run => ({
        runIndex: run.runIndex + 1,
        sourceUpdatedAt: run.sourceUpdatedAt,
        finalScore: run.finalScore,
        avgQuality: run.avgQuality,
        hardPassRate: run.hardPassRate,
        successRate: run.successRate,
        avgLatencyMs: run.avgLatencyMs,
        maxLatencyMs: run.maxLatencyMs,
        runtimeEligible: Boolean(run.runtimeEligible)
      }))
    };
    const runtime = runtimePassFromAggregate(model, constraints, minRate);
    model.runtimeEligible = runtime.runtimeEligible;
    model.runtimeRejectionReasons = runtime.reasons;
    model.latencyPass = !runtime.reasons.some(reason => reason.includes("latency"));
    model.finalScore = round(
      (model.avgQuality * 0.72)
      + (model.hardPassRate * 14)
      + (model.successRate * 5)
      + (model.runtimeEligibleRate * 7)
      + (model.appearanceRate * 2)
    );
    return model;
  });

  const selected = selectModels(models);
  return {
    schemaVersion: 1,
    provider: sources[sources.length - 1].provider || "nvidia",
    baseUrl: sources[sources.length - 1].baseUrl,
    task: sources[sources.length - 1].task,
    promptVersion: sources[sources.length - 1].promptVersion,
    updatedAt: new Date().toISOString(),
    winner: selected.winner,
    fallbacks: selected.fallbacks,
    scoring: {
      ...(sources[sources.length - 1].scoring || {}),
      aggregateFinalScoreFormula: "avgQuality*0.72 + hardPassRate*14 + successRate*5 + runtimeEligibleRate*7 + appearanceRate*2"
    },
    runtimeConstraints: constraints,
    runtimeSelection: {
      selectedPolicy: selected.selectedPolicy,
      eligibleCount: selected.runtimeUsable.length,
      qualityEligibleCount: selected.qualityUsable.length,
      models: [selected.winner, ...selected.fallbacks].filter(Boolean),
      excludedModels: selected.sorted.filter(item => !selected.runtimeUsable.includes(item)).map(item => ({
        id: item.id,
        reasons: item.runtimeRejectionReasons || []
      }))
    },
    aggregation: {
      runCount,
      sourceFiles,
      minStableRuntimeEligibleRate: minRate,
      sourceUpdatedAt: sources.map(source => source.updatedAt)
    },
    models: selected.sorted,
    details: latestDetails
  };
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    usage();
    return;
  }
  const inputFiles = await listInputFiles(args);
  if (!inputFiles.length) {
    throw new Error(`No ranking files found. Use --input or --input-dir. Directory: ${args.inputDir}`);
  }
  const sources = [];
  for (const file of inputFiles) {
    const ranking = JSON.parse(await readFile(file, "utf8"));
    if (!Array.isArray(ranking.models) || !ranking.models.length) {
      throw new Error(`Invalid ranking file without models: ${file}`);
    }
    sources.push(ranking);
  }
  const output = buildAggregatedRanking(sources, inputFiles, args.minStableRuntimeEligibleRate);
  const runtimeConfig = runtimeConfigOutput(output);
  await mkdir(path.dirname(args.out), { recursive: true });
  await mkdir(path.dirname(args.report), { recursive: true });
  await mkdir(path.dirname(args.runtimeConfig), { recursive: true });
  await mkdir(path.dirname(args.failSummary), { recursive: true });
  await writeFile(args.out, JSON.stringify(output, null, 2), "utf8");
  await writeFile(args.report, markdownReport(output), "utf8");
  await writeFile(args.runtimeConfig, JSON.stringify(runtimeConfig, null, 2), "utf8");
  await writeFile(args.failSummary, JSON.stringify(failSummaryOutput(output), null, 2), "utf8");
  console.log(`Aggregated ${inputFiles.length} ranking file(s).`);
  console.log(`Winner: ${output.winner || "none"}`);
  console.log(`Fallbacks: ${output.fallbacks.join(", ") || "none"}`);
  console.log(`Ranking: ${args.out}`);
  console.log(`Runtime: ${args.runtimeConfig}`);
  console.log(`Report: ${args.report}`);
  console.log(`Fails: ${args.failSummary}`);
}

main().catch(error => {
  console.error(error?.stack || error?.message || String(error));
  process.exitCode = 1;
});
