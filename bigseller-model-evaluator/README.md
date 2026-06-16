# BigSeller NVIDIA Model Evaluator

这个工具用于独立评测 NVIDIA 平台上的候选模型，不修改现有 BigSeller 自动编辑脚本。

它做三件事：

1. 用 BigSeller 脚本里的同款标题优化提示词调用候选模型。
2. 按硬性规则评分：是否删尺码、删年份/跨境/外贸/平台词、保留主类目和核心属性、标题 35-55 字、无标点、只返回一行标题。
3. 输出可给旧脚本拉取的模型配置，例如 winner 和 fallback 模型列表。

## 本地运行

需要 Node.js 18+。本机已经检测到 Node 22，可以直接运行。

```powershell
$env:NVIDIA_API_KEY="你的 NVIDIA API Key"
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --titles .\bigseller-model-evaluator\data\shoe-titles.sample.txt
```

自动从 NVIDIA `/models` 拉取全部模型，排除图片、语音、视频、embedding、rerank、视觉文档理解、代码专用、安全审核等不适合标题优化的模型后，评测剩余的文本/聊天候选模型：

```powershell
$env:NVIDIA_API_KEY="你的 NVIDIA API Key"
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --discover-models
```

人工低成本试跑时，才建议限制模型数量：

```powershell
$env:NVIDIA_API_KEY="你的 NVIDIA API Key"
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --discover-models --discover-limit 20
```

只过滤掉当前已经不在 NVIDIA `/models` 里的手写候选模型：

```powershell
$env:NVIDIA_API_KEY="你的 NVIDIA API Key"
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --refresh-models
```

输出文件默认在：

- `bigseller-model-evaluator/out/model-ranking.json`
- `bigseller-model-evaluator/out/runtime-model-config.json`
- `bigseller-model-evaluator/out/report.md`
- `bigseller-model-evaluator/out/title-results.csv`
- `bigseller-model-evaluator/out/fail-summary.json`
- `bigseller-model-evaluator/out/visual-report.html`

其中 `title-results.csv` 适合用 Excel/WPS 打开，人工横向查看每个模型对每个标题的输出、得分、耗时和扣分原因。
`fail-summary.json` 用于快速排查模型请求失败、硬规则失败和常见扣分原因。
`visual-report.html` 可以直接双击打开，用于查看 winner、fallback、runtime 策略、模型排名、速度/质量图表、标题输出明细和失败原因。

校验已经生成的模型排名 JSON：

```powershell
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --validate-ranking .\bigseller-model-evaluator\out\model-ranking.json
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --validate-runtime-config .\bigseller-model-evaluator\out\runtime-model-config.json
```

从完整排名 JSON 单独生成旧脚本要读取的轻量配置：

```powershell
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --runtime-from-ranking .\bigseller-model-evaluator\out\model-ranking.json --runtime-config .\bigseller-model-evaluator\out\runtime-model-config.json
```

从完整排名 JSON 单独生成 CSV：

```powershell
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --csv-from-ranking .\bigseller-model-evaluator\out\model-ranking.json --csv .\bigseller-model-evaluator\out\title-results.csv
```

从完整排名 JSON 单独生成失败摘要：

```powershell
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --fail-summary-from-ranking .\bigseller-model-evaluator\out\model-ranking.json --fail-summary .\bigseller-model-evaluator\out\fail-summary.json
```

从完整排名 JSON 单独生成可视化 HTML：

```powershell
node .\bigseller-model-evaluator\scripts\generate-visual-report.mjs
```

排名 JSON 示例：

- `bigseller-model-evaluator/examples/model-ranking.example.json`
- `bigseller-model-evaluator/examples/runtime-model-config.example.json`

只检查配置和提示词，不实际请求 API：

```powershell
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --dry-run
```

## 以后给旧脚本使用

旧脚本不需要内置甄选逻辑，只需要读取 `model-ranking.json` 里的：

- `winner`
- `fallbacks`
- `baseUrl`
- `updatedAt`

更推荐旧脚本读取更小的 `runtime-model-config.json`：

- `baseUrl`
- `winner`
- `fallbacks`
- `models`
- `updatedAt`

旧脚本运行时优先用 `winner`，失败后按 `fallbacks` 或 `models` 顺序回退。

接入旧 BigSeller 脚本时，可以参考独立示例：

- `bigseller-model-evaluator/examples/tampermonkey-runtime-config-loader.js`

推荐接入策略：

1. 启动时请求 `runtime-model-config.json`。
2. 校验 `schemaVersion/provider/baseUrl/winner/models`。
3. 校验通过后覆盖 `CONFIG.AI_BASE_URL`、`CONFIG.AI_MODEL_LIST`、`CONFIG.AI_MODEL_ID`。
4. 请求失败或校验失败时，继续使用脚本内置模型列表。
5. 成功配置缓存 7 天，避免每次打开 BigSeller 都依赖远程配置。

## 定时任务建议

优先建议用 GitHub Actions 或本地 Windows 任务计划程序。

Cloudflare Worker 不适合一次跑很多模型横评，因为执行时间和请求时长限制更明显。它更适合托管最终的 `model-ranking.json`，或者触发外部任务。示例见：

- `bigseller-model-evaluator/examples/github-actions.yml`
- `bigseller-model-evaluator/examples/cloudflare-worker.js`

推荐长期架构：

1. GitHub Actions 或本地电脑定时运行评测。
2. 生成并发布 `model-ranking.json`。
3. Cloudflare Worker 或 GitHub raw 负责提供稳定 URL。
4. BigSeller 自动编辑脚本只拉取这个 URL，不内置模型甄选流程。

本地 Windows 定时任务示例：

```powershell
# 先把 NVIDIA_API_KEY 设置到你的用户环境变量或系统环境变量
.\bigseller-model-evaluator\examples\install-windows-scheduled-task.ps1
```

手动跑一次本地评测：

```powershell
.\bigseller-model-evaluator\scripts\run-local-evaluation.ps1
```

更稳定的推荐方式是多轮评测后取平均。默认跑 3 轮，每轮之间间隔 60 秒，最后聚合成稳定版 `model-ranking.json`、`runtime-model-config.json` 和 `visual-report.html`：

```powershell
.\bigseller-model-evaluator\scripts\run-stable-evaluation.ps1
```

如果只是先确认流程，建议用小样本稳定评测：

```powershell
.\bigseller-model-evaluator\scripts\run-stable-evaluation.ps1 -Rounds 2 -DiscoverLimit 3 -MaxTitles 2 -PauseSecondsBetweenRounds 5
```

先预演一次，不请求 NVIDIA、不消耗额度：

```powershell
.\bigseller-model-evaluator\scripts\run-local-evaluation.ps1 -DryRun
```

低成本真实试跑：只测少量模型和少量标题，确认 key 和输出质量：

```powershell
.\bigseller-model-evaluator\scripts\run-local-evaluation.ps1 -DiscoverLimit 2 -MaxTitles 3
```

真实评测默认按后续脚本接入的等待体验筛选模型：

- 默认从 NVIDIA `/models` 拉取全量模型，并只排除明显不适合标题优化的图片、语音、视频、embedding、rerank、视觉文档理解、代码专用、安全审核等专用模型；`-DiscoverLimit` 只用于人工试跑时主动限量。
- 单次请求超时默认 15 秒，连接错误和 5xx 服务错误默认重试 1 次。
- 排队超时不会反复硬等；同一个模型连续 3 次请求失败或超时后，会把剩余标题标记为跳过并进入下一个模型。
- `runtime-model-config.json` 默认只优先选择平均耗时不超过 6 秒、单条样本不超过 8 秒、成功率不低于 80%、没有超时失败的模型。
- 如果有模型符合 runtime 门槛但没有模型达到硬规则质量门槛，仍会产出可用的 runtime 配置；报告里的 `runtimeSelection.selectedPolicy` 会标记为 `runtime-eligible-quality-warning`，表示这些模型速度可用但标题质量需要人工复核。
- 如果没有任何模型符合 runtime 门槛，仍会产出分数最高的可用模型，但报告里的 `runtimeSelection.selectedPolicy` 会标记为 `fallback-no-runtime-eligible`，方便人工判断是否放宽门槛或改测其他模型。

可按实际 BigSeller 脚本可接受等待时间调整：

```powershell
.\bigseller-model-evaluator\scripts\run-local-evaluation.ps1 -TimeoutMs 12000 -Retries 1 -MaxRuntimeLatencyMs 5000 -MaxRuntimeSingleLatencyMs 7000
```

需要关闭连续失败保护时可传 `-MaxConsecutiveFailures 0`。如果只是想分析质量、不想用延迟门槛筛选 runtime 配置，可传 `-MaxRuntimeLatencyMs 0 -MaxRuntimeSingleLatencyMs 0 -MaxTimeoutFailureRate 1`。

本地保存 NVIDIA Key 的推荐方式：

1. 复制 `bigseller-model-evaluator/.env.example` 为 `bigseller-model-evaluator/.env.local`。
2. 把 `.env.local` 里的 `your_nvidia_api_key_here` 改成你的真实 key。
3. `.env.local` 已被 `.gitignore` 忽略，不要把真实 key 发给别人。

GitHub Actions 使用方式：

1. 在仓库 Settings -> Secrets and variables -> Actions 中添加 `NVIDIA_API_KEY`。
2. 把 `bigseller-model-evaluator/examples/github-actions.yml` 放到仓库的 `.github/workflows/bigseller-model-evaluation.yml`。
3. 手动运行 workflow，或等待每周定时任务。
4. workflow 会跑 3 轮稳定评测，提交最终的 `out/model-ranking.json`、`out/runtime-model-config.json`、`out/report.md`、`out/fail-summary.json`、`out/visual-report.html`，并把每轮明细作为 artifact 保存 30 天。

## 线上结果窗口

推荐的线上访问方式：

1. GitHub Actions 定时跑稳定评测，生成并提交结果文件。
2. Cloudflare Worker 只负责读取这些静态结果并提供访问入口。
3. 你打开 Worker 根地址 `/`，就是可视化看板窗口。
4. 旧 BigSeller 脚本读取 `/runtime-model-config.json`，只拿 winner 和 fallback 模型。

Cloudflare Worker 示例在：

- `bigseller-model-evaluator/examples/cloudflare-worker.js`

Worker 需要配置 3 个环境变量：

- `VISUAL_REPORT_URL`：指向 GitHub raw 的 `out/visual-report.html`
- `RUNTIME_CONFIG_URL`：指向 GitHub raw 的 `out/runtime-model-config.json`
- `RANKING_URL`：指向 GitHub raw 的 `out/model-ranking.json`

部署后常用地址：

- `https://你的-worker域名/`：给人看的可视化窗口
- `https://你的-worker域名/runtime-model-config.json`：给旧脚本读取的轻量配置
- `https://你的-worker域名/model-ranking.json`：完整排名数据

## 评分原则

质量优先。模型必须先满足脚本提示词的硬性要求，再比较速度和稳定性。

当前总分计算：

- 平均标题规则分：75%
- 硬规则完全通过率：15%
- 请求成功率：5%
- 速度分：5%

硬规则不通过的模型，即使速度很快，也不会排到质量合格模型前面。最终给旧脚本读取的 `runtime-model-config.json` 会先按 runtime 门槛筛掉明显排队慢、超时或不稳定的模型，再在剩余模型中按质量排序。

## 离线自检

评分器内置了几个好/坏样例，用于确认硬规则识别正常：

```powershell
node .\bigseller-model-evaluator\evaluate-nvidia-models.mjs --self-test
```

完整离线健康检查：

```powershell
.\bigseller-model-evaluator\scripts\run-offline-checks.ps1
```
