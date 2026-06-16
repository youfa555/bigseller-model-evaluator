#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DEFAULT_RANKING = path.join(ROOT, "out", "model-ranking.json");
const DEFAULT_HTML = path.join(ROOT, "out", "visual-report.html");

function parseArgs(argv) {
  const args = {
    ranking: DEFAULT_RANKING,
    html: DEFAULT_HTML
  };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === "--ranking") {
      args.ranking = next;
      i++;
    } else if (arg === "--html") {
      args.html = next;
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
  node scripts/generate-visual-report.mjs

Options:
  --ranking <file>  Source model-ranking.json, default out/model-ranking.json
  --html <file>     Output HTML file, default out/visual-report.html
`);
}

function escapeJsonForScript(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function pageHtml(ranking) {
  const data = escapeJsonForScript(ranking);
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>BigSeller NVIDIA 模型评测看板</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f5f7fb;
      --panel: #ffffff;
      --panel-soft: #f9fbff;
      --text: #172033;
      --muted: #5f6b7c;
      --line: #dce3ee;
      --line-strong: #c9d3e2;
      --green: #168a5b;
      --green-soft: #e5f6ee;
      --blue: #2563eb;
      --blue-soft: #eaf1ff;
      --amber: #a65f00;
      --amber-soft: #fff4dc;
      --red: #c03434;
      --red-soft: #ffe9e9;
      --ink-soft: #eef2f7;
      --shadow: 0 18px 45px rgba(33, 45, 68, 0.10);
      font-family: "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      min-width: 320px;
    }

    .app-shell {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 280px minmax(0, 1fr);
    }

    aside {
      background: #101828;
      color: #f7fafc;
      padding: 24px 18px;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: auto;
    }

    .brand {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 26px;
    }

    .brand-mark {
      width: 42px;
      height: 42px;
      border-radius: 8px;
      display: grid;
      place-items: center;
      color: #101828;
      background: #f7fafc;
      font-weight: 800;
      letter-spacing: 0;
    }

    .brand h1 {
      font-size: 17px;
      line-height: 1.3;
      margin: 0;
      font-weight: 700;
    }

    .brand p {
      margin: 3px 0 0;
      color: #b9c3d3;
      font-size: 12px;
    }

    .nav-group {
      display: grid;
      gap: 8px;
      margin: 20px 0;
    }

    .nav-item {
      color: #d8e0ed;
      text-decoration: none;
      padding: 10px 12px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      font-size: 13px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .nav-item:hover { background: rgba(255, 255, 255, 0.10); }

    .side-meta {
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      color: #b9c3d3;
      font-size: 12px;
      line-height: 1.65;
    }

    main {
      min-width: 0;
      padding: 24px;
    }

    .topbar {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 18px;
    }

    .title-block h2 {
      margin: 0;
      font-size: 24px;
      line-height: 1.25;
      letter-spacing: 0;
    }

    .title-block p {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }

    .actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    button,
    .link-button {
      border: 1px solid var(--line-strong);
      background: var(--panel);
      color: var(--text);
      border-radius: 6px;
      min-height: 36px;
      padding: 8px 12px;
      font: inherit;
      font-size: 13px;
      cursor: pointer;
      text-decoration: none;
    }

    button:hover,
    .link-button:hover { border-color: var(--blue); color: var(--blue); }
    button.active { background: var(--blue); border-color: var(--blue); color: white; }

    .status-banner {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 14px;
      align-items: center;
      border: 1px solid var(--line);
      background: var(--panel);
      border-left: 5px solid var(--amber);
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 18px;
      box-shadow: var(--shadow);
    }

    .status-banner.ok { border-left-color: var(--green); }
    .status-banner.warn { border-left-color: var(--amber); }
    .status-banner strong { display: block; margin-bottom: 3px; }
    .status-banner span { color: var(--muted); font-size: 13px; line-height: 1.5; }

    .metric-grid {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 18px;
    }

    .metric {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 14px;
      box-shadow: 0 8px 22px rgba(33, 45, 68, 0.06);
      min-height: 104px;
    }

    .metric label {
      display: block;
      color: var(--muted);
      font-size: 12px;
      margin-bottom: 9px;
    }

    .metric b {
      display: block;
      font-size: 22px;
      line-height: 1.1;
      overflow-wrap: anywhere;
    }

    .metric small {
      display: block;
      margin-top: 8px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.45;
    }

    .content-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(360px, 0.75fr);
      gap: 16px;
      align-items: start;
    }

    section {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
      min-width: 0;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border-bottom: 1px solid var(--line);
      background: var(--panel-soft);
      border-radius: 8px 8px 0 0;
    }

    .section-head h3 {
      margin: 0;
      font-size: 15px;
      letter-spacing: 0;
    }

    .section-head .sub {
      color: var(--muted);
      font-size: 12px;
    }

    .tools {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
    }

    input[type="search"], select {
      border: 1px solid var(--line-strong);
      border-radius: 6px;
      min-height: 34px;
      padding: 7px 10px;
      background: white;
      color: var(--text);
      font: inherit;
      font-size: 13px;
      max-width: 100%;
    }

    .table-wrap {
      overflow: auto;
      max-height: 620px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }

    th, td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--line);
      text-align: left;
      vertical-align: middle;
    }

    th {
      position: sticky;
      top: 0;
      z-index: 1;
      background: #eef3fa;
      font-size: 12px;
      color: #344256;
      font-weight: 700;
      white-space: nowrap;
    }

    tr.model-row {
      cursor: pointer;
    }

    tr.model-row:hover,
    tr.model-row.selected {
      background: var(--blue-soft);
    }

    .model-name {
      font-family: Consolas, "Microsoft YaHei", monospace;
      font-size: 12px;
      overflow-wrap: anywhere;
      min-width: 210px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 3px 8px;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      border: 1px solid transparent;
    }

    .pill.ok { background: var(--green-soft); color: var(--green); border-color: #b9e7d2; }
    .pill.warn { background: var(--amber-soft); color: var(--amber); border-color: #ffd995; }
    .pill.bad { background: var(--red-soft); color: var(--red); border-color: #ffc2c2; }
    .pill.neutral { background: var(--ink-soft); color: #44546a; border-color: var(--line); }

    .bar-cell {
      min-width: 120px;
    }

    .bar {
      height: 8px;
      background: var(--ink-soft);
      border-radius: 999px;
      overflow: hidden;
    }

    .bar > span {
      display: block;
      height: 100%;
      width: var(--value, 0%);
      background: var(--blue);
      border-radius: inherit;
    }

    .bar.green > span { background: var(--green); }
    .bar.amber > span { background: #d18800; }
    .bar.red > span { background: var(--red); }

    .detail-panel {
      position: sticky;
      top: 18px;
      max-height: calc(100vh - 36px);
      overflow: auto;
    }

    .detail-body {
      padding: 16px;
    }

    .selected-title {
      font-family: Consolas, "Microsoft YaHei", monospace;
      font-size: 13px;
      line-height: 1.45;
      background: #f4f7fb;
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 10px;
      overflow-wrap: anywhere;
    }

    .mini-metrics {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      margin: 14px 0;
    }

    .mini {
      background: var(--panel-soft);
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 10px;
    }

    .mini label {
      color: var(--muted);
      display: block;
      font-size: 11px;
      margin-bottom: 6px;
    }

    .mini b {
      font-size: 16px;
    }

    .detail-list {
      display: grid;
      gap: 10px;
    }

    .title-card {
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 12px;
      background: white;
    }

    .title-card.good { border-left: 4px solid var(--green); }
    .title-card.warn { border-left: 4px solid var(--amber); }
    .title-card.bad { border-left: 4px solid var(--red); }

    .title-card .meta {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }

    .raw-title {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow-wrap: anywhere;
    }

    .output-title {
      font-size: 14px;
      line-height: 1.55;
      overflow-wrap: anywhere;
    }

    .reason {
      margin-top: 8px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.55;
    }

    .compare-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .chart {
      padding: 16px;
    }

    .chart-row {
      display: grid;
      grid-template-columns: minmax(120px, 1fr) minmax(140px, 2fr) 64px;
      gap: 10px;
      align-items: center;
      margin: 10px 0;
      font-size: 12px;
    }

    .chart-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: Consolas, "Microsoft YaHei", monospace;
    }

    .empty {
      padding: 24px;
      color: var(--muted);
      text-align: center;
    }

    @media (max-width: 1180px) {
      .app-shell { grid-template-columns: 1fr; }
      aside { position: static; height: auto; }
      .content-grid { grid-template-columns: 1fr; }
      .detail-panel { position: static; max-height: none; }
      .metric-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 720px) {
      main { padding: 14px; }
      .topbar, .status-banner { grid-template-columns: 1fr; display: grid; }
      .metric-grid, .mini-metrics, .compare-grid { grid-template-columns: 1fr; }
      .section-head { align-items: stretch; flex-direction: column; }
      .tools { width: 100%; }
      input[type="search"], select, button, .link-button { width: 100%; }
      th, td { padding: 9px 10px; }
    }
  </style>
</head>
<body>
  <div class="app-shell">
    <aside>
      <div class="brand">
        <div class="brand-mark">BS</div>
        <div>
          <h1>模型评测看板</h1>
          <p>NVIDIA title optimization</p>
        </div>
      </div>
      <nav class="nav-group">
        <a class="nav-item" href="#overview"><span>总览</span><span id="navUpdated">--</span></a>
        <a class="nav-item" href="#ranking"><span>模型排名</span><span id="navModels">--</span></a>
        <a class="nav-item" href="#details"><span>标题明细</span><span id="navTitles">--</span></a>
        <a class="nav-item" href="#charts"><span>图表</span><span id="navRuntime">--</span></a>
      </nav>
      <div class="side-meta">
        <div>Winner</div>
        <strong id="sideWinner">--</strong>
        <div style="margin-top:12px">Selection policy</div>
        <strong id="sidePolicy">--</strong>
      </div>
    </aside>

    <main>
      <div class="topbar" id="overview">
        <div class="title-block">
          <h2>BigSeller NVIDIA 模型评测结果</h2>
          <p>面向旧 BigSeller 标题优化脚本的模型甄选看板。数据来自本地 <code>model-ranking.json</code>。</p>
        </div>
        <div class="actions">
          <button type="button" id="copyRuntime">复制 Runtime 模型</button>
          <button type="button" id="toggleOnlyRuntime">只看 Runtime</button>
        </div>
      </div>

      <div id="statusBanner" class="status-banner">
        <div>
          <strong id="statusTitle">--</strong>
          <span id="statusText">--</span>
        </div>
        <span id="statusPill" class="pill neutral">--</span>
      </div>

      <div class="metric-grid">
        <div class="metric"><label>Winner</label><b id="winnerMetric">--</b><small id="fallbackMetric">--</small></div>
        <div class="metric"><label>Runtime 可用</label><b id="runtimeMetric">--</b><small>满足速度、成功率和超时门槛</small></div>
        <div class="metric"><label>质量达标</label><b id="qualityMetric">--</b><small>硬规则通过率不低于 50%</small></div>
        <div class="metric"><label>最快平均响应</label><b id="fastMetric">--</b><small id="fastModel">--</small></div>
        <div class="metric"><label>标题样本</label><b id="titleMetric">--</b><small>每个模型最多测试同一批标题</small></div>
        <div class="metric"><label>稳定评测</label><b id="stableMetric">--</b><small id="stablePolicy">单轮 ranking</small></div>
      </div>

      <div class="content-grid">
        <section id="ranking">
          <div class="section-head">
            <div>
              <h3>模型排名</h3>
              <div class="sub">点击一行查看该模型的 13 个标题输出</div>
            </div>
            <div class="tools">
              <input id="searchModel" type="search" placeholder="搜索模型">
              <select id="statusFilter" aria-label="筛选状态">
                <option value="all">全部模型</option>
                <option value="runtime">Runtime 可用</option>
                <option value="excluded">Runtime 排除</option>
                <option value="failed">请求失败</option>
              </select>
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Model</th>
                  <th>Runtime</th>
                  <th>Final</th>
                  <th>Quality</th>
                  <th>Hard Pass</th>
                  <th>Success</th>
                  <th>Avg</th>
                  <th>Max</th>
                </tr>
              </thead>
              <tbody id="rankingBody"></tbody>
            </table>
          </div>
        </section>

        <section class="detail-panel" id="details">
          <div class="section-head">
            <div>
              <h3>标题明细</h3>
              <div class="sub" id="detailHint">选择一个模型</div>
            </div>
          </div>
          <div class="detail-body">
            <div class="selected-title" id="selectedModel">--</div>
            <div class="mini-metrics">
              <div class="mini"><label>Final</label><b id="detailFinal">--</b></div>
              <div class="mini"><label>Hard Pass</label><b id="detailHard">--</b></div>
              <div class="mini"><label>Avg Latency</label><b id="detailLatency">--</b></div>
            </div>
            <div id="rejectionBox" class="reason"></div>
            <div class="detail-list" id="detailList"></div>
          </div>
        </section>
      </div>

      <div class="compare-grid" id="charts">
        <section>
          <div class="section-head"><h3>质量分布</h3><span class="sub">平均规则分</span></div>
          <div class="chart" id="qualityChart"></div>
        </section>
        <section>
          <div class="section-head"><h3>响应耗时</h3><span class="sub">平均延迟，越短越好</span></div>
          <div class="chart" id="latencyChart"></div>
        </section>
      </div>
    </main>
  </div>

  <script id="ranking-data" type="application/json">${data}</script>
  <script>
    const ranking = JSON.parse(document.getElementById("ranking-data").textContent);
    const models = ranking.models || [];
    const details = ranking.details || {};
    let selectedId = ranking.winner || models[0]?.id || "";
    let onlyRuntime = false;

    const $ = (id) => document.getElementById(id);
    const pct = (value) => ((Number(value || 0) * 100).toFixed(1) + "%");
    const ms = (value) => value ? value + "ms" : "-";
    const safe = (value) => String(value ?? "");
    const esc = (value) => safe(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

    function shortDate(value) {
      if (!value) return "--";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return value;
      return date.toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
    }

    function policyText(policy) {
      const map = {
        "quality-and-runtime-eligible": "速度与质量均达标",
        "runtime-eligible-quality-warning": "速度达标，质量需复核",
        "fallback-no-runtime-eligible": "无速度达标模型，使用回退",
        "fallback-no-successful-model": "无成功模型"
      };
      return map[policy] || policy || "未知策略";
    }

    function policyClass(policy) {
      if (policy === "quality-and-runtime-eligible") return "ok";
      if (policy === "runtime-eligible-quality-warning") return "warn";
      return "bad";
    }

    function modelStatus(model) {
      if (model.runtimeEligible) return ["Runtime", "ok"];
      if ((model.successRate || 0) <= 0) return ["Failed", "bad"];
      return ["Excluded", "warn"];
    }

    function scoreBarClass(value) {
      if (value >= 80) return "green";
      if (value >= 45) return "amber";
      return "red";
    }

    function initOverview() {
      const runtimeCount = models.filter(m => m.runtimeEligible).length;
      const qualityCount = models.filter(m => (m.hardPassRate || 0) >= 0.5).length;
      const fastest = models.filter(m => m.avgLatencyMs > 0).sort((a, b) => a.avgLatencyMs - b.avgLatencyMs)[0];
      const firstDetails = Object.values(details)[0] || [];
      const policy = ranking.runtimeSelection?.selectedPolicy || "";

      $("navUpdated").textContent = shortDate(ranking.updatedAt);
      $("navModels").textContent = models.length;
      $("navTitles").textContent = firstDetails.length || "-";
      $("navRuntime").textContent = runtimeCount;
      $("sideWinner").textContent = ranking.winner || "--";
      $("sidePolicy").textContent = policyText(policy);
      $("winnerMetric").textContent = ranking.winner || "--";
      $("fallbackMetric").textContent = (ranking.fallbacks || []).length ? "Fallbacks: " + ranking.fallbacks.length : "Fallbacks: none";
      $("runtimeMetric").textContent = runtimeCount + " / " + models.length;
      $("qualityMetric").textContent = qualityCount + " / " + models.length;
      $("fastMetric").textContent = fastest ? ms(fastest.avgLatencyMs) : "--";
      $("fastModel").textContent = fastest?.id || "--";
      $("titleMetric").textContent = firstDetails.length || "--";
      $("stableMetric").textContent = ranking.aggregation ? ranking.aggregation.runCount + " 轮" : "1 轮";
      $("stablePolicy").textContent = ranking.aggregation ? "Runtime 稳定阈值 " + pct(ranking.aggregation.minStableRuntimeEligibleRate) : "单轮 ranking";

      $("statusBanner").className = "status-banner " + policyClass(policy);
      $("statusTitle").textContent = policyText(policy);
      $("statusPill").className = "pill " + policyClass(policy);
      $("statusPill").textContent = policy || "unknown";
      if (policy === "runtime-eligible-quality-warning") {
        $("statusText").textContent = "当前选出的模型满足运行速度与稳定性门槛，但没有模型达到硬规则质量阈值，建议先人工查看标题明细再接入生产。";
      } else if (policy === "quality-and-runtime-eligible") {
        $("statusText").textContent = "当前 runtime 配置优先选择了速度、稳定性和硬规则质量都达标的模型。";
      } else {
        $("statusText").textContent = "当前结果使用回退策略，请检查 Runtime Exclusions 和请求失败原因。";
      }
    }

    function renderRanking() {
      const query = $("searchModel").value.trim().toLowerCase();
      const filter = $("statusFilter").value;
      let rows = models.filter(model => {
        if (onlyRuntime && !model.runtimeEligible) return false;
        if (query && !model.id.toLowerCase().includes(query)) return false;
        if (filter === "runtime" && !model.runtimeEligible) return false;
        if (filter === "excluded" && (model.runtimeEligible || (model.successRate || 0) <= 0)) return false;
        if (filter === "failed" && (model.successRate || 0) > 0) return false;
        return true;
      });

      $("rankingBody").innerHTML = rows.map((model, index) => {
        const [label, cls] = modelStatus(model);
        return '<tr class="model-row ' + (model.id === selectedId ? 'selected' : '') + '" data-model="' + encodeURIComponent(model.id) + '">' +
          '<td>' + (index + 1) + '</td>' +
          '<td class="model-name">' + esc(model.id) + '</td>' +
          '<td><span class="pill ' + cls + '">' + label + '</span></td>' +
          '<td class="bar-cell"><div class="bar ' + scoreBarClass(model.finalScore || 0) + '" title="' + (model.finalScore || 0) + '"><span style="--value:' + (model.finalScore || 0) + '%"></span></div></td>' +
          '<td>' + (model.avgQuality || 0) + '</td>' +
          '<td>' + pct(model.hardPassRate) + '</td>' +
          '<td>' + pct(model.successRate) + '</td>' +
          '<td>' + ms(model.avgLatencyMs) + '</td>' +
          '<td>' + ms(model.maxLatencyMs) + '</td>' +
        '</tr>';
      }).join("");

      if (!rows.length) {
        $("rankingBody").innerHTML = '<tr><td colspan="9"><div class="empty">没有匹配的模型</div></td></tr>';
      }

      document.querySelectorAll(".model-row").forEach(row => {
        row.addEventListener("click", () => {
          selectedId = decodeURIComponent(row.dataset.model);
          renderRanking();
          renderDetails();
        });
      });
    }

    function renderDetails() {
      const model = models.find(item => item.id === selectedId) || models[0];
      if (!model) {
        $("detailList").innerHTML = '<div class="empty">没有可展示的数据</div>';
        return;
      }
      selectedId = model.id;
      const modelDetails = details[model.id] || [];
      $("selectedModel").textContent = model.id;
      $("detailHint").textContent = model.runtimeEligible ? "Runtime 可用模型" : "未进入 Runtime 配置";
      $("detailFinal").textContent = model.finalScore ?? "--";
      $("detailHard").textContent = pct(model.hardPassRate);
      $("detailLatency").textContent = ms(model.avgLatencyMs);
      $("rejectionBox").textContent = model.runtimeEligible ? "" : "排除原因：" + ((model.runtimeRejectionReasons || []).join("；") || "未选择");

      $("detailList").innerHTML = modelDetails.map((item, index) => {
        if (!item.ok) {
          return '<div class="title-card bad">' +
            '<div class="meta"><span class="pill bad">FAIL</span><span class="pill neutral">#' + (index + 1) + '</span></div>' +
            '<div class="raw-title">' + esc(item.rawTitle) + '</div>' +
            '<div class="reason">' + esc(item.errorCode || "error") + ': ' + esc(item.error) + '</div>' +
          '</div>';
        }
        const cls = item.hardPass ? "good" : ((item.score || 0) >= 60 ? "warn" : "bad");
        return '<div class="title-card ' + cls + '">' +
          '<div class="meta"><span class="pill ' + (item.hardPass ? "ok" : "warn") + '">' + (item.hardPass ? "PASS" : "WARN") + '</span><span class="pill neutral">score ' + item.score + '</span><span class="pill neutral">' + item.count + ' 字</span><span class="pill neutral">' + ms(item.elapsedMs) + '</span></div>' +
          '<div class="raw-title">原始：' + esc(item.rawTitle) + '</div>' +
          '<div class="output-title">' + esc(item.cleaned) + '</div>' +
          '<div class="reason">' + esc((item.reasons || []).join("；")) + '</div>' +
        '</div>';
      }).join("");
    }

    function renderCharts() {
      const top = models.slice(0, 12);
      $("qualityChart").innerHTML = top.map(model => {
        const value = Math.max(0, Math.min(100, model.avgQuality || 0));
        return '<div class="chart-row"><div class="chart-label" title="' + esc(model.id) + '">' + esc(model.id) + '</div><div class="bar ' + scoreBarClass(value) + '"><span style="--value:' + value + '%"></span></div><div>' + value + '</div></div>';
      }).join("");

      const maxLatency = Math.max(...top.map(model => model.avgLatencyMs || 0), 1);
      $("latencyChart").innerHTML = top.map(model => {
        const raw = model.avgLatencyMs || 0;
        const width = Math.max(2, Math.round((raw / maxLatency) * 100));
        const cls = raw && raw <= (ranking.runtimeConstraints?.maxRuntimeLatencyMs || 6000) ? "green" : "red";
        return '<div class="chart-row"><div class="chart-label" title="' + esc(model.id) + '">' + esc(model.id) + '</div><div class="bar ' + cls + '"><span style="--value:' + width + '%"></span></div><div>' + ms(raw) + '</div></div>';
      }).join("");
    }

    async function copyRuntimeModels() {
      const text = [ranking.winner, ...(ranking.fallbacks || [])].filter(Boolean).join("\\n");
      try {
        await navigator.clipboard.writeText(text);
        $("copyRuntime").textContent = "已复制";
        setTimeout(() => $("copyRuntime").textContent = "复制 Runtime 模型", 1200);
      } catch {
        window.prompt("复制 Runtime 模型", text);
      }
    }

    $("searchModel").addEventListener("input", renderRanking);
    $("statusFilter").addEventListener("change", renderRanking);
    $("toggleOnlyRuntime").addEventListener("click", () => {
      onlyRuntime = !onlyRuntime;
      $("toggleOnlyRuntime").classList.toggle("active", onlyRuntime);
      renderRanking();
    });
    $("copyRuntime").addEventListener("click", copyRuntimeModels);

    initOverview();
    renderRanking();
    renderDetails();
    renderCharts();
  </script>
</body>
</html>`;
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    usage();
    return;
  }
  const ranking = JSON.parse(await readFile(args.ranking, "utf8"));
  await mkdir(path.dirname(args.html), { recursive: true });
  await writeFile(args.html, pageHtml(ranking), "utf8");
  console.log(`Visual report written: ${args.html}`);
}

main().catch(error => {
  console.error(error?.stack || error?.message || String(error));
  process.exitCode = 1;
});
