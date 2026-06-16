#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_TITLES = path.join(ROOT, "data", "shoe-titles.sample.txt");
const DEFAULT_CANDIDATES = path.join(ROOT, "config", "candidate-models.json");
const DEFAULT_OUT = path.join(ROOT, "out", "model-ranking.json");
const DEFAULT_REPORT = path.join(ROOT, "out", "report.md");
const DEFAULT_RUNTIME_CONFIG = path.join(ROOT, "out", "runtime-model-config.json");
const DEFAULT_CSV = path.join(ROOT, "out", "title-results.csv");
const DEFAULT_FAIL_SUMMARY = path.join(ROOT, "out", "fail-summary.json");
const DEFAULT_TIMEOUT_MS = 15000;
const DEFAULT_RETRIES = 1;
const DEFAULT_MAX_RUNTIME_LATENCY_MS = 6000;
const DEFAULT_MAX_RUNTIME_SINGLE_LATENCY_MS = 8000;
const DEFAULT_MIN_RUNTIME_SUCCESS_RATE = 0.8;
const DEFAULT_MAX_TIMEOUT_FAILURE_RATE = 0;
const DEFAULT_DISCOVER_LIMIT = 0;

const TITLE_MIN = 35;
const TITLE_MAX = 55;
const MODEL_EXCLUDE_RE = /(embed|embedding|rerank|retriev|bge|e5|gtr|sentence-transformer|audio|whisper|tts|asr|speech|voice|vision|\bvl\b|image|video|ocr|document|chart|table|deplot|fuyu|guard|safety|moderation|clip|flux|cosmos|sdxl|stable-diffusion|diffusion|code|coder|starcoder|codegemma|protein|molecule)/i;

const CATEGORY_TERMS = [
  "玛丽珍单鞋", "一字带凉鞋", "一字凉拖鞋", "高跟拖鞋", "鱼嘴高跟拖鞋",
  "坡跟鱼嘴厚底铆钉凉鞋", "凉拖鞋", "人字拖鞋", "沙滩凉拖鞋", "平底拖鞋",
  "豆豆小皮鞋", "豆豆鞋", "高跟鞋", "单鞋", "凉鞋", "凉拖", "人字拖", "拖鞋",
  "小皮鞋", "女鞋"
].sort((a, b) => b.length - a.length);

const CORE_TERMS = [
  "复古", "圆头", "方头", "浅口", "蝴蝶结", "编织", "镂空", "透气", "春秋",
  "平底", "舒适", "夹脚", "糖果色", "简约", "休闲", "沙滩", "法式", "波点",
  "高跟", "细跟", "粗跟", "一字带", "夏季", "时尚", "百搭", "温柔", "一脚蹬",
  "度假", "欧美风", "性感", "尖头", "满钉", "纯色", "厚底", "水钻", "拼接",
  "金属扣", "鱼嘴", "坡跟", "铆钉", "流苏", "外穿"
];

const BANNED_PATTERNS = [
  { name: "尺码数字区间", re: /\b\d{2}\s*[-~—–]\s*\d{2}\b/ },
  { name: "单个尺码", re: /\b(?:3[0-9]|4[0-9]|5[0-9])\s*码?\b|(?:3[0-9]|4[0-9]|5[0-9])码/ },
  { name: "残留尺码字", re: /(^|[\s　])码(?=$|[\s　])/ },
  { name: "尺码词", re: /大码|大尺码|小码|小尺码|加大码|尺码|均码|S码|M码|L码|XL|XXL|XXXL/i },
  { name: "年份", re: /20\d{2}年?|202\d/ },
  { name: "跨境外贸渠道词", re: /跨境|外贸|直供|现货|wish|WISH|ZA|欧美跨境|渠道/ },
  { name: "泛营销词", re: /新款|新品|网红|爆款|厂家|批发/ }
];

const PUNCTUATION_RE = /[!"#$%&'()*+,.\-/:;<=>?@[\\\]^_`{|}~，。！？；：、（）《》「」——]/;

function parseArgs(argv) {
  const args = {
    titles: DEFAULT_TITLES,
    candidates: DEFAULT_CANDIDATES,
    out: DEFAULT_OUT,
    report: DEFAULT_REPORT,
    runtimeConfig: DEFAULT_RUNTIME_CONFIG,
    csv: DEFAULT_CSV,
    failSummary: DEFAULT_FAIL_SUMMARY,
    baseUrl: "",
    maxModels: 0,
    maxTitles: 0,
    delayMs: 1200,
    timeoutMs: DEFAULT_TIMEOUT_MS,
    retries: DEFAULT_RETRIES,
    maxRuntimeLatencyMs: DEFAULT_MAX_RUNTIME_LATENCY_MS,
    maxRuntimeSingleLatencyMs: DEFAULT_MAX_RUNTIME_SINGLE_LATENCY_MS,
    minRuntimeSuccessRate: DEFAULT_MIN_RUNTIME_SUCCESS_RATE,
    maxTimeoutFailureRate: DEFAULT_MAX_TIMEOUT_FAILURE_RATE,
    maxConsecutiveFailures: 3,
    maxTokens: 120,
    temperature: 0.2,
    dryRun: false,
    refreshModels: false,
    discoverModels: false,
    discoverLimit: DEFAULT_DISCOVER_LIMIT,
    selfTest: false,
    validateRanking: "",
    validateRuntimeConfig: "",
    runtimeFromRanking: "",
    csvFromRanking: "",
    failSummaryFromRanking: ""
  };

  for (let i = 2; i < argv.length; i++) {
    const key = argv[i];
    const next = argv[i + 1];
    if (key === "--titles") args.titles = next, i++;
    else if (key === "--candidates") args.candidates = next, i++;
    else if (key === "--out") args.out = next, i++;
    else if (key === "--report") args.report = next, i++;
    else if (key === "--runtime-config") args.runtimeConfig = next, i++;
    else if (key === "--csv") args.csv = next, i++;
    else if (key === "--fail-summary") args.failSummary = next, i++;
    else if (key === "--base-url") args.baseUrl = next, i++;
    else if (key === "--max-models") args.maxModels = Number(next || 0), i++;
    else if (key === "--max-titles") args.maxTitles = Number(next || 0), i++;
    else if (key === "--delay-ms") args.delayMs = Number(next || 0), i++;
    else if (key === "--timeout-ms") args.timeoutMs = Number(next || DEFAULT_TIMEOUT_MS), i++;
    else if (key === "--retries") args.retries = Number(next || 0), i++;
    else if (key === "--max-runtime-latency-ms") args.maxRuntimeLatencyMs = Number(next || 0), i++;
    else if (key === "--max-runtime-single-latency-ms") args.maxRuntimeSingleLatencyMs = Number(next || 0), i++;
    else if (key === "--min-runtime-success-rate") args.minRuntimeSuccessRate = Number(next || 0), i++;
    else if (key === "--max-timeout-failure-rate") args.maxTimeoutFailureRate = Number(next || 0), i++;
    else if (key === "--max-consecutive-failures") args.maxConsecutiveFailures = Number(next || 0), i++;
    else if (key === "--max-tokens") args.maxTokens = Number(next || 120), i++;
    else if (key === "--temperature") args.temperature = Number(next || 0.2), i++;
    else if (key === "--dry-run") args.dryRun = true;
    else if (key === "--refresh-models") args.refreshModels = true;
    else if (key === "--discover-models") args.discoverModels = true;
    else if (key === "--discover-limit") args.discoverLimit = Number(next || DEFAULT_DISCOVER_LIMIT), i++;
    else if (key === "--self-test") args.selfTest = true;
    else if (key === "--validate-ranking") args.validateRanking = next, i++;
    else if (key === "--validate-runtime-config") args.validateRuntimeConfig = next, i++;
    else if (key === "--runtime-from-ranking") args.runtimeFromRanking = next, i++;
    else if (key === "--csv-from-ranking") args.csvFromRanking = next, i++;
    else if (key === "--fail-summary-from-ranking") args.failSummaryFromRanking = next, i++;
    else if (key === "--help") {
      printHelp();
      process.exit(0);
    }
  }
  return args;
}

function printHelp() {
  console.log(`
Usage:
  node evaluate-nvidia-models.mjs --titles data/shoe-titles.sample.txt

Required for real API calls:
  NVIDIA_API_KEY=...

Options:
  --titles <file>          One raw product title per line.
  --candidates <file>      JSON with { baseUrl, models }.
  --out <file>             Ranking JSON output.
  --report <file>          Markdown report output.
  --runtime-config <file>  Small JSON config for the BigSeller script.
  --csv <file>             Per-title CSV output for manual review.
  --fail-summary <file>    JSON summary of request and rule failures.
  --base-url <url>         Override NVIDIA OpenAI-compatible base URL.
  --max-models <n>         Test only first n models.
  --max-titles <n>         Test only first n titles.
  --delay-ms <n>           Delay between API calls, default 1200.
  --timeout-ms <n>         Per-call timeout, default ${DEFAULT_TIMEOUT_MS}.
  --retries <n>            Retries per failed request, default ${DEFAULT_RETRIES}.
  --max-consecutive-failures <n>
                            Skip remaining titles for a model after n consecutive request failures, default 3. Use 0 to disable.
  --max-runtime-latency-ms <n>
                            Runtime config only uses models with average latency <= n, default ${DEFAULT_MAX_RUNTIME_LATENCY_MS}. Use 0 to disable.
  --max-runtime-single-latency-ms <n>
                            Runtime config only uses models with every successful sample <= n, default ${DEFAULT_MAX_RUNTIME_SINGLE_LATENCY_MS}. Use 0 to disable.
  --min-runtime-success-rate <n>
                            Runtime config only uses models with success rate >= n, default ${DEFAULT_MIN_RUNTIME_SUCCESS_RATE}.
  --max-timeout-failure-rate <n>
                            Runtime config only uses models with timeout failure rate <= n, default ${DEFAULT_MAX_TIMEOUT_FAILURE_RATE}.
  --dry-run                Print plan without API calls.
  --refresh-models         Fetch /models and skip candidate ids not listed.
  --discover-models        Fetch /models and auto-select non-specialized text/chat candidates.
  --discover-limit <n>     Max discovered models to test, default 0 means unlimited.
  --self-test              Run offline scorer checks without API calls.
  --validate-ranking <file> Validate an existing model-ranking.json file.
  --validate-runtime-config <file> Validate a runtime-model-config.json file.
  --runtime-from-ranking <file> Build runtime config from a ranking JSON.
  --csv-from-ranking <file> Build title-results CSV from a ranking JSON.
  --fail-summary-from-ranking <file> Build fail summary from a ranking JSON.
`);
}

function sanitizeTitle(title) {
  return title
    .replace(/大尺码\s*\d{1,3}\s*[-~—–]\s*\d{1,3}\s*码?/g, "")
    .replace(/\b\d{2}\s*[-~—–]\s*\d{2}\s*码?/g, "")
    .replace(/\b(?:3[0-9]|4[0-9]|5[0-9])\s*码?/g, "")
    .replace(/(大[尺]?码|小[尺]?码|加大码|尺码|均码|S码|M码|L码|XL|XXL|XXXL)/gi, "")
    .replace(/(^|[\s　])码(?=$|[\s　])/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildPrompt(rawTitle) {
  const sanitized = sanitizeTitle(rawTitle);
  return `你是 Shopee 台湾站资深商品运营专家，深刻理解 Shopee 搜索匹配逻辑、本地化语言习惯与高曝光标题构建方式。你的目标是生成【高曝光 + 高命中率 + 可转化】的商品标题，不是简单润色。

以下规则必须严格遵守：

【基础规则（不得违反）】
1、必须保留原标题中的商品主类目词（如鞋子具体类型）和"核心属性词"（对区分商品类型最关键的属性）；
   去除与商品无关词、购物平台/渠道/年份/外贸、跨境等描述；
   删除所有尺码相关的表达（文字或数字区间）；
2、可在不改变商品本质的前提下，补充可从原标题语义中合理推导的卖点或高价值属性
   （如材质、穿着感受、适用季节、使用场景），禁止编造；
3、绝对不能新增与原商品种类不一致的类目词；
4、标题中不得使用任何标点符号；
   字数必须控制在 ${TITLE_MIN} - ${TITLE_MAX} 字内。

【搜索与 SEO 执行逻辑（必须执行）】
- 商品主类目词必须放在标题最前段；
- 其后依次排列搜索权重更高的属性词，再到卖点词与场景词；
- 优先使用 Shopee 台湾站常见、本地化、高搜索匹配词汇；
- 优先顺序结构模板（按重要性）：
  商品主类目词 + 核心属性词 + 高价值卖点词 + 场景用途词；
- 标题整体应更像"搜索关键词组合"，而非口语化描述。

原始标题（已去除尺码干扰）：
${sanitized}

请只返回一行优化后的简体中文的标题文本，不要任何注释、引号或额外说明。`;
}

function postprocessLikeUserscript(text) {
  return String(text || "")
    .trim()
    .replace(/\s*\n+\s*/g, " ")
    .replace(/[!"#$%&'()*+,.\-/:;<=>?@[\\\]^_`{|}~，。！？；：、（）《》「」——]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function charCount(text) {
  return [...String(text || "").replace(/\s+/g, "")].length;
}

function findTerms(text, terms) {
  return terms.filter(term => text.includes(term));
}

function expectedCategoryTerms(rawTitle) {
  const hits = findTerms(rawTitle, CATEGORY_TERMS).filter(term => term !== "女鞋");
  if (hits.length) return [hits[0]];
  return ["女鞋"];
}

function titleCategoryTerms(title) {
  return findTerms(title, CATEGORY_TERMS).filter(term => term !== "女鞋");
}

function scoreTitle(rawTitle, rawOutput) {
  const cleaned = postprocessLikeUserscript(rawOutput);
  const count = charCount(cleaned);
  const expected = expectedCategoryTerms(rawTitle);
  const coreOriginal = findTerms(rawTitle, CORE_TERMS);
  const coreKept = coreOriginal.filter(term => cleaned.includes(term));
  const banned = BANNED_PATTERNS.filter(item => item.re.test(cleaned) || item.re.test(String(rawOutput || "")));
  const rawHasExtraText = /\n/.test(String(rawOutput || "")) || /^(标题|优化|结果|以下|建议)[:：]/.test(String(rawOutput || "").trim());
  const rawHasPunctuation = PUNCTUATION_RE.test(String(rawOutput || ""));
  const startsWithExpected = expected.some(term => cleaned.startsWith(term));
  const containsExpected = expected.some(term => cleaned.includes(term));
  const outputCategories = titleCategoryTerms(cleaned);
  const originalCategories = titleCategoryTerms(rawTitle);
  const addedCategories = outputCategories.filter(term => !originalCategories.some(origin => origin.includes(term) || term.includes(origin)));

  let score = 100;
  const reasons = [];

  if (!cleaned) {
    return { score: 0, hardPass: false, cleaned, count: 0, reasons: ["空输出"] };
  }
  if (count < TITLE_MIN || count > TITLE_MAX) {
    const penalty = count < TITLE_MIN ? Math.min(30, (TITLE_MIN - count) * 2) : Math.min(30, (count - TITLE_MAX) * 2);
    score -= penalty;
    reasons.push(`字数 ${count} 不在 ${TITLE_MIN}-${TITLE_MAX}`);
  }
  if (banned.length) {
    score -= Math.min(40, banned.length * 12);
    reasons.push(`含禁用词或格式: ${banned.map(x => x.name).join(" ")}`);
  }
  if (!startsWithExpected) {
    score -= containsExpected ? 10 : 28;
    reasons.push(containsExpected ? `主类目未放最前: 期望 ${expected.join("/")}` : `缺少主类目: ${expected.join("/")}`);
  }
  if (coreOriginal.length) {
    const keepRate = coreKept.length / coreOriginal.length;
    if (keepRate < 0.55) {
      score -= Math.round((0.55 - keepRate) * 45);
      reasons.push(`核心属性保留偏少: ${coreKept.length}/${coreOriginal.length}`);
    }
  }
  if (addedCategories.length) {
    score -= Math.min(24, addedCategories.length * 8);
    reasons.push(`疑似新增不一致类目词: ${addedCategories.join(" ")}`);
  }
  if (rawHasPunctuation) {
    score -= 8;
    reasons.push("原始输出含标点");
  }
  if (rawHasExtraText) {
    score -= 15;
    reasons.push("不是纯一行标题");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  const hardPass = score >= 90 && count >= TITLE_MIN && count <= TITLE_MAX && !banned.length && startsWithExpected && !rawHasPunctuation && !rawHasExtraText;
  if (!reasons.length) reasons.push("满足硬性规则");

  return {
    score,
    hardPass,
    cleaned,
    count,
    expectedMainCategory: expected,
    keptCoreTerms: coreKept,
    originalCoreTerms: coreOriginal,
    reasons
  };
}

async function sleep(ms) {
  if (ms > 0) await new Promise(resolve => setTimeout(resolve, ms));
}

async function loadJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function loadTitles(file) {
  return (await readFile(file, "utf8"))
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
}

function normalizeBaseUrl(url) {
  return String(url || "https://integrate.api.nvidia.com/v1/").replace(/\/+$/, "") + "/";
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchLiveModels(baseUrl, apiKey, timeoutMs, retries = 0) {
  const headers = apiKey ? { Authorization: `Bearer ${apiKey}` } : {};
  let lastError = null;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetchWithTimeout(new URL("models", baseUrl).toString(), { headers }, timeoutMs);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      const json = await res.json();
      return (json.data || [])
        .map(item => typeof item === "string" ? { id: item } : item)
        .filter(item => item && item.id);
    } catch (error) {
      lastError = classifyRequestError(error, timeoutMs);
      if (attempt < retries && isRetryableRequestError(lastError)) {
        await sleep(800 * (attempt + 1));
      } else {
        break;
      }
    }
  }
  throw new Error(`GET /models failed: ${lastError?.code || "request_error"} ${lastError?.message || "unknown_error"}`);
}

function modelPreferenceScore(id) {
  const checks = [
    [/qwen/i, 100],
    [/deepseek/i, 95],
    [/minimax/i, 90],
    [/kimi|moonshot/i, 85],
    [/glm/i, 80],
    [/gpt-oss/i, 75],
    [/nemotron/i, 70],
    [/llama/i, 65],
    [/mistral|mixtral/i, 60],
    [/gemma/i, 50],
    [/phi/i, 45]
  ];
  let score = 0;
  for (const [re, value] of checks) {
    if (re.test(id)) score = Math.max(score, value);
  }
  if (/instruct|chat/i.test(id)) score += 8;
  if (/\b(70b|80b|120b|122b|235b|397b|405b|675b)\b/i.test(id)) score += 5;
  return score;
}

function discoverTextModelIds(liveModels, limit) {
  const discovered = liveModels
    .map(item => item.id)
    .filter(id => id && !MODEL_EXCLUDE_RE.test(id))
    .sort((a, b) => modelPreferenceScore(b) - modelPreferenceScore(a) || a.localeCompare(b));
  return limit > 0 ? discovered.slice(0, limit) : discovered;
}

function classifyRequestError(error, timeoutMs) {
  const message = String(error?.message || error || "unknown_error");
  if (error?.name === "AbortError" || /aborted/i.test(message)) {
    return { code: "timeout", message: `TIMEOUT after ${timeoutMs}ms` };
  }
  const status = message.match(/^HTTP\s+(\d+)/);
  if (!status && /fetch failed|network|connect|ECONN|ENOTFOUND|EAI_AGAIN|socket|TLS|ETIMEDOUT/i.test(message)) {
    return { code: "connection_error", message };
  }
  return {
    code: status ? `http_${status[1]}` : "request_error",
    message
  };
}

function isRetryableRequestError(error) {
  if (!error) return false;
  if (error.code === "connection_error") return true;
  const status = String(error.code || "").match(/^http_(\d+)$/);
  return status ? Number(status[1]) >= 500 : false;
}

async function callModel({ baseUrl, apiKey, model, rawTitle, maxTokens, temperature, timeoutMs, retries }) {
  const body = {
    model,
    messages: [
      { role: "system", content: "You are a professional Shopee Taiwan title optimization expert. Follow user constraints strictly." },
      { role: "user", content: buildPrompt(rawTitle) }
    ],
    temperature,
    max_tokens: maxTokens,
    stream: false
  };

  let lastError = null;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const started = Date.now();
    try {
      const res = await fetchWithTimeout(new URL("chat/completions", baseUrl).toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      }, timeoutMs);
      const elapsedMs = Date.now() - started;
      const text = await res.text();
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
      const json = JSON.parse(text);
      const content = json?.choices?.[0]?.message?.content ?? "";
      return { ok: true, content, elapsedMs, attempt };
    } catch (error) {
      lastError = classifyRequestError(error, timeoutMs);
      if (attempt < retries && isRetryableRequestError(lastError)) {
        await sleep(800 * (attempt + 1));
      } else {
        break;
      }
    }
  }
  return {
    ok: false,
    error: lastError?.message || "unknown_error",
    errorCode: lastError?.code || "request_error"
  };
}

function runtimeConstraintConfig(args) {
  return {
    maxRuntimeLatencyMs: Math.max(0, Number(args.maxRuntimeLatencyMs || 0)),
    maxRuntimeSingleLatencyMs: Math.max(0, Number(args.maxRuntimeSingleLatencyMs || 0)),
    minRuntimeSuccessRate: Math.max(0, Math.min(1, Number(args.minRuntimeSuccessRate || 0))),
    maxTimeoutFailureRate: Math.max(0, Math.min(1, Number(args.maxTimeoutFailureRate || 0)))
  };
}

function summarizeModel(model, results, constraints) {
  const successes = results.filter(r => r.ok);
  const requestFailures = results.filter(r => !r.ok && !r.skipped);
  const timeoutFailures = requestFailures.filter(r => r.errorCode === "timeout" || /TIMEOUT|aborted/i.test(String(r.error || "")));
  const skipped = results.filter(r => r.skipped);
  const scores = successes.map(r => r.score.score);
  const hardPasses = successes.filter(r => r.score.hardPass).length;
  const elapsed = successes.map(r => r.elapsedMs);
  const avgQuality = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  const successRate = results.length ? successes.length / results.length : 0;
  const hardPassRate = results.length ? hardPasses / results.length : 0;
  const avgLatencyMs = elapsed.length ? Math.round(elapsed.reduce((a, b) => a + b, 0) / elapsed.length) : 0;
  const maxLatencyMs = elapsed.length ? Math.max(...elapsed) : 0;
  const requestFailureRate = results.length ? requestFailures.length / results.length : 0;
  const timeoutFailureRate = results.length ? timeoutFailures.length / results.length : 0;
  const speedScore = avgLatencyMs ? Math.max(0, Math.min(100, 100 - ((avgLatencyMs - 1000) / 190))) : 0;
  const finalScore = Math.round((avgQuality * 0.75) + (hardPassRate * 15) + (successRate * 5) + (speedScore * 0.05));
  const avgLatencyPass = !constraints.maxRuntimeLatencyMs || (avgLatencyMs > 0 && avgLatencyMs <= constraints.maxRuntimeLatencyMs);
  const singleLatencyPass = !constraints.maxRuntimeSingleLatencyMs || (maxLatencyMs > 0 && maxLatencyMs <= constraints.maxRuntimeSingleLatencyMs);
  const successRatePass = successRate >= constraints.minRuntimeSuccessRate;
  const timeoutRatePass = timeoutFailureRate <= constraints.maxTimeoutFailureRate;
  const latencyPass = successes.length > 0 && avgLatencyPass && singleLatencyPass;
  const runtimeRejectionReasons = [];
  if (!successes.length) runtimeRejectionReasons.push("no successful responses");
  if (!avgLatencyPass) runtimeRejectionReasons.push(`avg latency ${avgLatencyMs}ms > ${constraints.maxRuntimeLatencyMs}ms`);
  if (!singleLatencyPass) runtimeRejectionReasons.push(`max latency ${maxLatencyMs}ms > ${constraints.maxRuntimeSingleLatencyMs}ms`);
  if (!successRatePass) runtimeRejectionReasons.push(`success rate ${successRate.toFixed(3)} < ${constraints.minRuntimeSuccessRate}`);
  if (!timeoutRatePass) runtimeRejectionReasons.push(`timeout failure rate ${timeoutFailureRate.toFixed(3)} > ${constraints.maxTimeoutFailureRate}`);

  return {
    id: model,
    finalScore,
    avgQuality: Math.round(avgQuality),
    hardPassRate: Number(hardPassRate.toFixed(3)),
    successRate: Number(successRate.toFixed(3)),
    requestFailureRate: Number(requestFailureRate.toFixed(3)),
    timeoutFailureRate: Number(timeoutFailureRate.toFixed(3)),
    avgLatencyMs,
    maxLatencyMs,
    latencyPass,
    runtimeEligible: latencyPass && successRatePass && timeoutRatePass,
    runtimeRejectionReasons,
    tested: results.length,
    successCount: successes.length,
    requestFailureCount: requestFailures.length,
    timeoutFailureCount: timeoutFailures.length,
    skippedCount: skipped.length
  };
}

function rankingOutput({ baseUrl, summaries, details, constraints }) {
  const sorted = [...summaries].sort((a, b) => {
    if (a.runtimeEligible !== b.runtimeEligible) return Number(b.runtimeEligible) - Number(a.runtimeEligible);
    if (b.finalScore !== a.finalScore) return b.finalScore - a.finalScore;
    if (b.hardPassRate !== a.hardPassRate) return b.hardPassRate - a.hardPassRate;
    return a.avgLatencyMs - b.avgLatencyMs;
  });
  const runtimeUsable = sorted.filter(item => item.runtimeEligible && item.successRate > 0);
  const qualityUsable = runtimeUsable.filter(item => item.hardPassRate >= 0.5);
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

  return {
    schemaVersion: 1,
    provider: "nvidia",
    baseUrl,
    task: "bigseller-title-optimization",
    promptVersion: "bigseller-fusion-v1-title-prompt",
    updatedAt: new Date().toISOString(),
    winner,
    fallbacks,
    scoring: {
      titleMin: TITLE_MIN,
      titleMax: TITLE_MAX,
      finalScoreFormula: "avgQuality*0.75 + hardPassRate*15 + successRate*5 + speedScore*0.05",
      runtimeSelection: "runtimeEligible models are selected before slower or timeout-prone models"
    },
    runtimeConstraints: constraints,
    runtimeSelection: {
      selectedPolicy,
      eligibleCount: runtimeUsable.length,
      qualityEligibleCount: qualityUsable.length,
      models: [winner, ...fallbacks].filter(Boolean),
      excludedModels: sorted.filter(item => !runtimeUsable.includes(item)).map(item => ({
        id: item.id,
        reasons: item.runtimeRejectionReasons || []
      }))
    },
    models: sorted,
    details
  };
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
      qualityEligibleCount: ranking.runtimeSelection.qualityEligibleCount
    } : undefined,
    runtimeEligibleModels: (ranking.models || []).filter(model => model.runtimeEligible).map(model => model.id),
    models
  };
}

function markdownReport(output) {
  const lines = [];
  lines.push("# BigSeller NVIDIA Model Evaluation Report");
  lines.push("");
  lines.push(`- Updated: ${output.updatedAt}`);
  lines.push(`- Winner: \`${output.winner || "none"}\``);
  lines.push(`- Fallbacks: ${output.fallbacks.map(x => `\`${x}\``).join(", ") || "none"}`);
  if (output.runtimeConstraints) {
    lines.push(`- Runtime latency gate: avg <= ${output.runtimeConstraints.maxRuntimeLatencyMs || "disabled"}ms, single <= ${output.runtimeConstraints.maxRuntimeSingleLatencyMs || "disabled"}ms`);
    lines.push(`- Runtime eligible models: ${output.runtimeSelection?.eligibleCount ?? 0}`);
    lines.push(`- Runtime selection policy: ${output.runtimeSelection?.selectedPolicy || "unknown"}`);
    if (output.runtimeSelection?.selectedPolicy === "runtime-eligible-quality-warning") {
      lines.push("- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.");
    }
  }
  lines.push("");
  lines.push("## Ranking");
  lines.push("");
  lines.push("| # | Model | Runtime | Final | Quality | Hard Pass | Success | Avg Latency | Max Latency | Timeouts |");
  lines.push("|---:|---|---|---:|---:|---:|---:|---:|---:|---:|");
  output.models.forEach((m, i) => {
    lines.push(`| ${i + 1} | \`${m.id}\` | ${m.runtimeEligible ? "yes" : "no"} | ${m.finalScore} | ${m.avgQuality} | ${(m.hardPassRate * 100).toFixed(1)}% | ${(m.successRate * 100).toFixed(1)}% | ${m.avgLatencyMs || "-"}ms | ${m.maxLatencyMs || "-"}ms | ${m.timeoutFailureCount || 0} |`);
  });
  if (output.runtimeSelection?.excludedModels?.length) {
    lines.push("");
    lines.push("## Runtime Exclusions");
    for (const item of output.runtimeSelection.excludedModels) {
      lines.push(`- \`${item.id}\`: ${(item.reasons || []).join("; ") || "not selected"}`);
    }
  }
  lines.push("");
  lines.push("## Per-title Results");
  for (const model of output.models) {
    const modelDetails = output.details[model.id] || [];
    lines.push("");
    lines.push(`### ${model.id}`);
    for (const item of modelDetails) {
      lines.push("");
      lines.push(`- Original: ${item.rawTitle}`);
      if (!item.ok) {
        lines.push(`  - Error: ${item.errorCode ? `${item.errorCode}: ` : ""}${item.error}`);
        continue;
      }
      lines.push(`  - Output: ${item.cleaned}`);
      lines.push(`  - Score: ${item.score} / 100, chars: ${item.count}, hardPass: ${item.hardPass ? "yes" : "no"}, latency: ${item.elapsedMs}ms`);
      lines.push(`  - Reason: ${item.reasons.join("; ")}`);
    }
  }
  lines.push("");
  return lines.join("\n");
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\r\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function csvReport(output) {
  const headers = [
    "rank",
    "model",
    "rawTitle",
    "ok",
    "hardPass",
    "score",
    "charCount",
    "elapsedMs",
    "cleanedOutput",
    "reasons",
    "errorCode",
    "error"
  ];
  const rows = [headers.map(csvEscape).join(",")];
  output.models.forEach((model, modelIndex) => {
    const details = output.details[model.id] || [];
    for (const item of details) {
      rows.push([
        modelIndex + 1,
        model.id,
        item.rawTitle || "",
        item.ok ? "yes" : "no",
        item.ok && item.hardPass ? "yes" : "no",
        item.ok ? item.score : "",
        item.ok ? item.count : "",
        item.ok ? item.elapsedMs : "",
        item.ok ? item.cleaned : "",
        item.ok ? (item.reasons || []).join("; ") : "",
        item.ok ? "" : (item.errorCode || ""),
        item.ok ? "" : (item.error || "")
      ].map(csvEscape).join(","));
    }
  });
  return "\uFEFF" + rows.join("\r\n") + "\r\n";
}

function failSummaryOutput(output) {
  const models = output.models.map(model => {
    const details = output.details[model.id] || [];
    const requestFailures = details.filter(item => !item.ok && !item.skipped);
    const ruleFailures = details.filter(item => item.ok && !item.hardPass);
    const reasonCounts = new Map();
    for (const item of ruleFailures) {
      for (const reason of item.reasons || []) {
        const key = String(reason).split(":")[0].trim();
        reasonCounts.set(key, (reasonCounts.get(key) || 0) + 1);
      }
    }
    return {
      id: model.id,
      finalScore: model.finalScore,
      avgQuality: model.avgQuality,
      tested: model.tested,
      runtimeEligible: !!model.runtimeEligible,
      latencyPass: !!model.latencyPass,
      runtimeRejectionReasons: model.runtimeRejectionReasons || [],
      requestFailureCount: requestFailures.length,
      timeoutFailureCount: requestFailures.filter(item => item.errorCode === "timeout" || /TIMEOUT|aborted/i.test(String(item.error || ""))).length,
      skippedCount: details.filter(item => item.skipped).length,
      ruleFailureCount: ruleFailures.length,
      hardPassRate: model.hardPassRate,
      successRate: model.successRate,
      avgLatencyMs: model.avgLatencyMs,
      maxLatencyMs: model.maxLatencyMs || 0,
      topRuleFailureReasons: [...reasonCounts.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, 5)
        .map(([reason, count]) => ({ reason, count })),
      sampleErrors: requestFailures.slice(0, 3).map(item => ({
        rawTitle: item.rawTitle || "",
        errorCode: item.errorCode || "",
        error: item.error || ""
      })),
      sampleRuleFailures: ruleFailures.slice(0, 3).map(item => ({
        rawTitle: item.rawTitle || "",
        cleaned: item.cleaned || "",
        score: item.score,
        reasons: item.reasons || []
      }))
    };
  });

  return {
    schemaVersion: 1,
    provider: output.provider,
    task: output.task,
    updatedAt: output.updatedAt,
    winner: output.winner,
    totals: {
      models: models.length,
      requestFailures: models.reduce((sum, item) => sum + item.requestFailureCount, 0),
      timeoutFailures: models.reduce((sum, item) => sum + item.timeoutFailureCount, 0),
      runtimeEligibleModels: models.filter(item => item.runtimeEligible).length,
      ruleFailures: models.reduce((sum, item) => sum + item.ruleFailureCount, 0)
    },
    models
  };
}

function runRuntimeSelectionSelfTest() {
  const constraints = runtimeConstraintConfig({
    maxRuntimeLatencyMs: 6000,
    maxRuntimeSingleLatencyMs: 8000,
    minRuntimeSuccessRate: 0.8,
    maxTimeoutFailureRate: 0
  });
  const okScore = { score: 95, hardPass: true };
  const slowScore = { score: 100, hardPass: true };
  const quick = summarizeModel("quick/model", [
    { ok: true, score: okScore, elapsedMs: 1200 },
    { ok: true, score: okScore, elapsedMs: 1400 }
  ], constraints);
  const slow = summarizeModel("slow/model", [
    { ok: true, score: slowScore, elapsedMs: 9000 },
    { ok: true, score: slowScore, elapsedMs: 9200 }
  ], constraints);
  const queued = summarizeModel("queued/model", [
    { ok: false, errorCode: "timeout", error: "TIMEOUT after 15000ms" },
    { ok: false, errorCode: "timeout", error: "TIMEOUT after 15000ms" },
    { ok: false, skipped: true, errorCode: "skipped", error: "Skipped after 2 consecutive request failures" }
  ], constraints);
  const output = rankingOutput({
    baseUrl: "https://integrate.api.nvidia.com/v1/",
    summaries: [slow, quick, queued],
    details: {},
    constraints
  });
  if (output.winner !== "quick/model") {
    throw new Error(`runtime selection failed: expected quick/model, got ${output.winner}`);
  }
  if (!output.runtimeSelection.excludedModels.some(item => item.id === "slow/model")) {
    throw new Error("runtime selection failed: slow/model should be excluded");
  }
  if (!output.runtimeSelection.excludedModels.some(item => item.id === "queued/model")) {
    throw new Error("runtime selection failed: queued/model should be excluded");
  }
  const runtimeConfig = runtimeConfigOutput(output);
  if (runtimeConfig.models.includes("slow/model") || runtimeConfig.models.includes("queued/model")) {
    throw new Error("runtime config should not include slow or queued models when a fast model is available");
  }
  console.log("PASS runtime_selection_filters_slow_or_queued_models");
}

function runModelDiscoverySelfTest() {
  const liveModels = [
    { id: "qwen/qwen3.5-122b-a10b" },
    { id: "newvendor/title-optimizer-72b" },
    { id: "acme/general-chat-model" },
    { id: "nvidia/embedqa-e5-v5" },
    { id: "baai/bge-m3" },
    { id: "stabilityai/stable-diffusion-xl" },
    { id: "openai/whisper-large-v3" },
    { id: "vendor/video-generator" },
    { id: "google/deplot" },
    { id: "adept/fuyu-8b" },
    { id: "bigcode/starcoder2-15b" },
    { id: "safety/guard-model" }
  ];
  const all = discoverTextModelIds(liveModels, 0);
  for (const expected of ["qwen/qwen3.5-122b-a10b", "newvendor/title-optimizer-72b", "acme/general-chat-model"]) {
    if (!all.includes(expected)) {
      throw new Error(`model discovery failed: expected ${expected}`);
    }
  }
  for (const excluded of ["nvidia/embedqa-e5-v5", "baai/bge-m3", "stabilityai/stable-diffusion-xl", "openai/whisper-large-v3", "vendor/video-generator", "google/deplot", "adept/fuyu-8b", "bigcode/starcoder2-15b", "safety/guard-model"]) {
    if (all.includes(excluded)) {
      throw new Error(`model discovery failed: should exclude ${excluded}`);
    }
  }
  if (discoverTextModelIds(liveModels, 2).length !== 2) {
    throw new Error("model discovery failed: discover limit should cap candidates when greater than 0");
  }
  console.log("PASS model_discovery_filters_specialized_models_without_default_limit");
}

function runSelfTest() {
  const sanitizeCases = [
    {
      name: "sanitize_size_range_with_suffix",
      input: "35-43码 大码女鞋复古圆头玛丽珍单鞋女春秋新款编织镂空透气凉鞋",
      expected: "女鞋复古圆头玛丽珍单鞋女春秋新款编织镂空透气凉鞋"
    },
    {
      name: "sanitize_embedded_single_size",
      input: "35-43码 大码女鞋41夹脚人字拖鞋女夏外穿糖果色简约休闲沙滩凉拖",
      expected: "女鞋夹脚人字拖鞋女夏外穿糖果色简约休闲沙滩凉拖"
    },
    {
      name: "sanitize_single_size_before_channel",
      input: "欧美跨境直供外贸大码43wish新款女士坡跟鱼嘴厚底铆钉凉鞋",
      expected: "欧美跨境直供外贸wish新款女士坡跟鱼嘴厚底铆钉凉鞋"
    }
  ];
  for (const item of sanitizeCases) {
    const actual = sanitizeTitle(item.input);
    const ok = actual === item.expected;
    if (!ok) {
      throw new Error(`${item.name} failed: expected "${item.expected}", got "${actual}"`);
    }
    console.log(`PASS ${item.name}: ${actual}`);
  }

  const cases = [
    {
      name: "good_title",
      rawTitle: "35-43码 大码女鞋复古圆头玛丽珍单鞋女春秋新款编织镂空透气凉鞋",
      output: "玛丽珍单鞋复古圆头编织镂空透气舒适春秋外穿女鞋浅口休闲百搭软底通勤日常穿搭",
      expectHardPass: true
    },
    {
      name: "bad_keeps_size_year_channel",
      rawTitle: "2026新款春秋欧美风性感尖头女单鞋现货跨境大码满钉细跟高跟鞋女",
      output: "35-43码 大码女鞋2026新款跨境现货尖头满钉细跟高跟鞋",
      expectHardPass: false
    },
    {
      name: "bad_category_not_front",
      rawTitle: "35-43码 大码女鞋法式波点高跟鞋2026新款夏季网红细跟一字带凉鞋",
      output: "法式波点细跟一字带夏季高跟鞋舒适百搭女鞋通勤约会穿搭",
      expectHardPass: false
    },
    {
      name: "bad_punctuation",
      rawTitle: "35-43码 大码女鞋方头浅口蝴蝶结玛丽珍单鞋女外穿平底舒适豆豆鞋",
      output: "豆豆鞋 方头浅口 蝴蝶结 平底舒适 女鞋外穿",
      expectHardPass: false
    }
  ];

  let failed = 0;
  for (const item of cases) {
    const score = scoreTitle(item.rawTitle, item.output);
    const ok = score.hardPass === item.expectHardPass;
    if (!ok) failed++;
    console.log(`${ok ? "PASS" : "FAIL"} ${item.name}: hardPass=${score.hardPass}, score=${score.score}, chars=${score.count}`);
    console.log(`  cleaned: ${score.cleaned}`);
    console.log(`  reasons: ${score.reasons.join("; ")}`);
  }
  if (failed) {
    throw new Error(`Self-test failed: ${failed}/${cases.length}`);
  }
  runRuntimeSelectionSelfTest();
  runModelDiscoverySelfTest();
  console.log(`Self-test passed: ${cases.length}/${cases.length}`);
}

function validateRankingObject(data) {
  const errors = [];
  if (!data || typeof data !== "object" || Array.isArray(data)) errors.push("root must be an object");
  if (data.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  if (data.provider !== "nvidia") errors.push("provider must be nvidia");
  if (!/^https?:\/\//.test(String(data.baseUrl || ""))) errors.push("baseUrl must be an http(s) URL");
  if (!data.updatedAt || Number.isNaN(Date.parse(data.updatedAt))) errors.push("updatedAt must be an ISO date string");
  if (!data.winner || typeof data.winner !== "string") errors.push("winner must be a non-empty model id");
  if (!Array.isArray(data.fallbacks)) errors.push("fallbacks must be an array");
  if (!Array.isArray(data.models) || data.models.length === 0) errors.push("models must be a non-empty array");

  const modelIds = new Set();
  if (Array.isArray(data.models)) {
    for (const [index, model] of data.models.entries()) {
      if (!model || typeof model !== "object") {
        errors.push(`models[${index}] must be an object`);
        continue;
      }
      if (!model.id || typeof model.id !== "string") errors.push(`models[${index}].id must be a model id`);
      else modelIds.add(model.id);
      for (const key of ["finalScore", "avgQuality", "hardPassRate", "successRate"]) {
        if (typeof model[key] !== "number") errors.push(`models[${index}].${key} must be a number`);
      }
    }
  }
  if (data.winner && modelIds.size && !modelIds.has(data.winner)) errors.push("winner must appear in models[].id");
  if (Array.isArray(data.fallbacks)) {
    for (const id of data.fallbacks) {
      if (typeof id !== "string" || !id) errors.push("fallbacks entries must be non-empty model ids");
      else if (modelIds.size && !modelIds.has(id)) errors.push(`fallback ${id} must appear in models[].id`);
    }
  }
  return errors;
}

async function validateRankingFile(file) {
  const data = JSON.parse(await readFile(file, "utf8"));
  const errors = validateRankingObject(data);
  if (errors.length) {
    console.error(`Ranking validation failed: ${file}`);
    for (const error of errors) console.error(`- ${error}`);
    throw new Error(`Invalid ranking JSON: ${errors.length} error(s)`);
  }
  console.log(`Ranking validation passed: ${file}`);
  console.log(`Winner: ${data.winner}`);
  console.log(`Fallbacks: ${(data.fallbacks || []).join(", ") || "none"}`);
}

function validateRuntimeConfigObject(data) {
  const errors = [];
  if (!data || typeof data !== "object" || Array.isArray(data)) errors.push("root must be an object");
  if (data.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  if (data.provider !== "nvidia") errors.push("provider must be nvidia");
  if (!/^https?:\/\//.test(String(data.baseUrl || ""))) errors.push("baseUrl must be an http(s) URL");
  if (data.task !== "bigseller-title-optimization") errors.push("task must be bigseller-title-optimization");
  if (!data.promptVersion || typeof data.promptVersion !== "string") errors.push("promptVersion must be a string");
  if (!data.updatedAt || Number.isNaN(Date.parse(data.updatedAt))) errors.push("updatedAt must be an ISO date string");
  if (!data.sourceRankingUpdatedAt || Number.isNaN(Date.parse(data.sourceRankingUpdatedAt))) errors.push("sourceRankingUpdatedAt must be an ISO date string");
  if (!data.winner || typeof data.winner !== "string") errors.push("winner must be a non-empty model id");
  if (!Array.isArray(data.fallbacks)) errors.push("fallbacks must be an array");
  if (!Array.isArray(data.models) || data.models.length === 0) errors.push("models must be a non-empty array");
  if (Array.isArray(data.models)) {
    if (data.models[0] !== data.winner) errors.push("models[0] must equal winner");
    for (const [index, id] of data.models.entries()) {
      if (typeof id !== "string" || !id) errors.push(`models[${index}] must be a non-empty model id`);
    }
    const unique = new Set(data.models);
    if (unique.size !== data.models.length) errors.push("models must not contain duplicates");
  }
  if (Array.isArray(data.fallbacks)) {
    for (const [index, id] of data.fallbacks.entries()) {
      if (typeof id !== "string" || !id) errors.push(`fallbacks[${index}] must be a non-empty model id`);
      if (id === data.winner) errors.push(`fallbacks[${index}] must not equal winner`);
      if (Array.isArray(data.models) && !data.models.includes(id)) errors.push(`fallback ${id} must appear in models`);
    }
  }
  return errors;
}

async function validateRuntimeConfigFile(file) {
  const data = JSON.parse(await readFile(file, "utf8"));
  const errors = validateRuntimeConfigObject(data);
  if (errors.length) {
    console.error(`Runtime config validation failed: ${file}`);
    for (const error of errors) console.error(`- ${error}`);
    throw new Error(`Invalid runtime config JSON: ${errors.length} error(s)`);
  }
  console.log(`Runtime config validation passed: ${file}`);
  console.log(`Winner: ${data.winner}`);
  console.log(`Models: ${(data.models || []).join(", ") || "none"}`);
}

async function writeRuntimeConfigFromRanking(rankingFile, runtimeConfigFile) {
  const ranking = JSON.parse(await readFile(rankingFile, "utf8"));
  const rankingErrors = validateRankingObject(ranking);
  if (rankingErrors.length) {
    console.error(`Ranking validation failed: ${rankingFile}`);
    for (const error of rankingErrors) console.error(`- ${error}`);
    throw new Error(`Invalid ranking JSON: ${rankingErrors.length} error(s)`);
  }
  const runtimeConfig = runtimeConfigOutput(ranking);
  const runtimeErrors = validateRuntimeConfigObject(runtimeConfig);
  if (runtimeErrors.length) {
    console.error("Derived runtime config is invalid");
    for (const error of runtimeErrors) console.error(`- ${error}`);
    throw new Error(`Invalid derived runtime config: ${runtimeErrors.length} error(s)`);
  }
  await mkdir(path.dirname(runtimeConfigFile), { recursive: true });
  await writeFile(runtimeConfigFile, JSON.stringify(runtimeConfig, null, 2), "utf8");
  console.log(`Runtime config written: ${runtimeConfigFile}`);
  console.log(`Winner: ${runtimeConfig.winner}`);
  console.log(`Models: ${runtimeConfig.models.join(", ")}`);
}

async function writeCsvFromRanking(rankingFile, csvFile) {
  const ranking = JSON.parse(await readFile(rankingFile, "utf8"));
  const rankingErrors = validateRankingObject(ranking);
  if (rankingErrors.length) {
    console.error(`Ranking validation failed: ${rankingFile}`);
    for (const error of rankingErrors) console.error(`- ${error}`);
    throw new Error(`Invalid ranking JSON: ${rankingErrors.length} error(s)`);
  }
  await mkdir(path.dirname(csvFile), { recursive: true });
  await writeFile(csvFile, csvReport(ranking), "utf8");
  console.log(`CSV written: ${csvFile}`);
}

async function writeFailSummaryFromRanking(rankingFile, failSummaryFile) {
  const ranking = JSON.parse(await readFile(rankingFile, "utf8"));
  const rankingErrors = validateRankingObject(ranking);
  if (rankingErrors.length) {
    console.error(`Ranking validation failed: ${rankingFile}`);
    for (const error of rankingErrors) console.error(`- ${error}`);
    throw new Error(`Invalid ranking JSON: ${rankingErrors.length} error(s)`);
  }
  await mkdir(path.dirname(failSummaryFile), { recursive: true });
  await writeFile(failSummaryFile, JSON.stringify(failSummaryOutput(ranking), null, 2), "utf8");
  console.log(`Fail summary written: ${failSummaryFile}`);
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.selfTest) {
    runSelfTest();
    return;
  }
  if (args.validateRanking) {
    await validateRankingFile(args.validateRanking);
    return;
  }
  if (args.validateRuntimeConfig) {
    await validateRuntimeConfigFile(args.validateRuntimeConfig);
    return;
  }
  if (args.runtimeFromRanking) {
    await writeRuntimeConfigFromRanking(args.runtimeFromRanking, args.runtimeConfig);
    return;
  }
  if (args.csvFromRanking) {
    await writeCsvFromRanking(args.csvFromRanking, args.csv);
    return;
  }
  if (args.failSummaryFromRanking) {
    await writeFailSummaryFromRanking(args.failSummaryFromRanking, args.failSummary);
    return;
  }
  const candidatesConfig = await loadJson(args.candidates);
  const runtimeConstraints = runtimeConstraintConfig(args);
  let titles = await loadTitles(args.titles);
  if (args.maxTitles > 0) titles = titles.slice(0, args.maxTitles);
  const apiKey = process.env.NVIDIA_API_KEY || process.env.NV_API_KEY || "";
  const baseUrl = normalizeBaseUrl(args.baseUrl || process.env.NVIDIA_BASE_URL || candidatesConfig.baseUrl);
  let models = [...new Set(candidatesConfig.models || [])];
  if (args.maxModels > 0) models = models.slice(0, args.maxModels);

  if ((args.refreshModels || args.discoverModels) && !args.dryRun) {
    const liveModels = await fetchLiveModels(baseUrl, apiKey, args.timeoutMs, args.retries);
    if (args.discoverModels) {
      models = discoverTextModelIds(liveModels, args.discoverLimit);
      if (args.maxModels > 0) models = models.slice(0, args.maxModels);
      console.log(`Discovered ${models.length} non-specialized text/chat candidate models from ${liveModels.length} live models`);
    } else {
      const liveIds = new Set(liveModels.map(item => item.id));
      const before = models.length;
      models = models.filter(id => liveIds.has(id));
      console.log(`Live model filter: ${models.length}/${before} configured candidates are listed by /models`);
    }
  }
  if (args.dryRun && args.discoverModels && args.discoverLimit > 0) {
    models = models.slice(0, args.discoverLimit);
  }

  console.log(`Titles: ${titles.length}`);
  console.log(`Models: ${models.length}`);
  console.log(`Base URL: ${baseUrl}`);

  if (args.dryRun) {
    const preview = {
      baseUrl,
      models,
      titleCount: titles.length,
      discoverModels: args.discoverModels,
      refreshModels: args.refreshModels,
      timeoutMs: args.timeoutMs,
      retries: args.retries,
      runtimeConstraints,
      note: args.discoverModels ? "Dry run does not fetch /models. Real run will auto-select all live non-specialized text/chat candidate models unless --discover-limit is set." : undefined,
      firstSanitizedTitle: sanitizeTitle(titles[0] || ""),
      firstPrompt: buildPrompt(titles[0] || "").slice(0, 1200)
    };
    console.log(JSON.stringify(preview, null, 2));
    return;
  }

  if (!apiKey) {
    throw new Error("Missing NVIDIA_API_KEY. Set it as an environment variable before running.");
  }

  const allDetails = {};
  const summaries = [];

  for (const model of models) {
    console.log(`\nTesting model: ${model}`);
    const modelResults = [];
    allDetails[model] = [];
    let consecutiveRequestFailures = 0;
    for (let i = 0; i < titles.length; i++) {
      const rawTitle = titles[i];
      process.stdout.write(`  [${i + 1}/${titles.length}] `);
      const result = await callModel({
        baseUrl,
        apiKey,
        model,
        rawTitle,
        maxTokens: args.maxTokens,
        temperature: args.temperature,
        timeoutMs: args.timeoutMs,
        retries: args.retries
      });
      if (!result.ok) {
        consecutiveRequestFailures++;
        console.log(`FAIL ${result.errorCode ? `${result.errorCode} ` : ""}${result.error}`);
        modelResults.push({ ok: false, rawTitle, error: result.error, errorCode: result.errorCode });
        allDetails[model].push({ ok: false, rawTitle, error: result.error, errorCode: result.errorCode });
        if (args.maxConsecutiveFailures > 0 && consecutiveRequestFailures >= args.maxConsecutiveFailures && i < titles.length - 1) {
          const skipped = titles.length - i - 1;
          const error = `Skipped after ${consecutiveRequestFailures} consecutive request failures`;
          console.log(`  SKIP ${skipped} remaining title(s): ${error}`);
          for (let j = i + 1; j < titles.length; j++) {
            const skippedDetail = { ok: false, skipped: true, rawTitle: titles[j], error, errorCode: "skipped" };
            modelResults.push(skippedDetail);
            allDetails[model].push(skippedDetail);
          }
          break;
        }
      } else {
        consecutiveRequestFailures = 0;
        const score = scoreTitle(rawTitle, result.content);
        console.log(`${score.score}/100 ${score.hardPass ? "PASS" : "WARN"} ${result.elapsedMs}ms ${score.cleaned}`);
        const detail = {
          ok: true,
          rawTitle,
          rawOutput: result.content,
          cleaned: score.cleaned,
          score: score.score,
          hardPass: score.hardPass,
          count: score.count,
          reasons: score.reasons,
          elapsedMs: result.elapsedMs
        };
        modelResults.push({ ok: true, rawTitle, score, elapsedMs: result.elapsedMs });
        allDetails[model].push(detail);
      }
      await sleep(args.delayMs);
    }
    const summary = summarizeModel(model, modelResults, runtimeConstraints);
    summaries.push(summary);
    console.log(`Summary ${model}: final=${summary.finalScore}, quality=${summary.avgQuality}, hardPass=${summary.hardPassRate}, latency=${summary.avgLatencyMs}ms, runtime=${summary.runtimeEligible ? "yes" : "no"}`);
  }

  const output = rankingOutput({ baseUrl, summaries, details: allDetails, constraints: runtimeConstraints });
  await mkdir(path.dirname(args.out), { recursive: true });
  await mkdir(path.dirname(args.report), { recursive: true });
  await mkdir(path.dirname(args.runtimeConfig), { recursive: true });
  await mkdir(path.dirname(args.csv), { recursive: true });
  await mkdir(path.dirname(args.failSummary), { recursive: true });
  await writeFile(args.out, JSON.stringify(output, null, 2), "utf8");
  await writeFile(args.report, markdownReport(output), "utf8");
  await writeFile(args.runtimeConfig, JSON.stringify(runtimeConfigOutput(output), null, 2), "utf8");
  await writeFile(args.csv, csvReport(output), "utf8");
  await writeFile(args.failSummary, JSON.stringify(failSummaryOutput(output), null, 2), "utf8");

  console.log(`\nWinner: ${output.winner || "none"}`);
  console.log(`Fallbacks: ${output.fallbacks.join(", ") || "none"}`);
  console.log(`Wrote: ${args.out}`);
  console.log(`Wrote: ${args.report}`);
  console.log(`Wrote: ${args.runtimeConfig}`);
  console.log(`Wrote: ${args.csv}`);
  console.log(`Wrote: ${args.failSummary}`);
}

main().catch(error => {
  console.error(error?.stack || error?.message || String(error));
  process.exit(1);
});
