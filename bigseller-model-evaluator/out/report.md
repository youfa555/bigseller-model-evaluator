# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-11-16T09:30:56.065Z
- Source runs: 3
- Winner: `nvidia/nemotron-3.5-bolt-e4b`
- Fallbacks: `nvidia/ising-calibration-1.5-31b`, `nvidia/riva-translate-4b-instruct-v2`, `nvidia/nemotron-3.5-lightning-30b-a3b`, `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 5
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `nvidia/nemotron-3.5-bolt-e4b` | yes | 54 | 55 | 0.0% | 100.0% | 100.0% | 431ms | 491ms | 3/3 |
| 2 | `nvidia/ising-calibration-1.5-31b` | yes | 54 | 56 | 0.0% | 100.0% | 100.0% | 1286ms | 4240ms | 3/3 |
| 3 | `nvidia/riva-translate-4b-instruct-v2` | yes | 18 | 5 | 0.0% | 100.0% | 100.0% | 671ms | 783ms | 3/3 |
| 4 | `nvidia/nemotron-3.5-lightning-30b-a3b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1058ms | 3136ms | 3/3 |
| 5 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1681ms | 2910ms | 3/3 |
| 6 | `poolside/laguna-xs-2.1` | no | 53 | 57 | 0.0% | 100.0% | 66.7% | 1202ms | 13195ms | 3/3 |
| 7 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 12 | 0 | 0.0% | 100.0% | 66.7% | 3299ms | 8164ms | 3/3 |
| 8 | `minimaxai/minimax-m3.1-flash` | no | 4 | 0 | 0.0% | 48.7% | 0.0% | 6770ms | 13651ms | 3/3 |
| 9 | `mistralai/mistral-large-4-1t-a52b` | no | 3 | 0 | 0.0% | 28.2% | 0.0% | 3292ms | 8343ms | 3/3 |
| 10 | `deepseek-ai/deepseek-v4.1-flash` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 11 | `z-ai/glm-5.3-flash` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 12 | `openai/gpt-oss-20b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 13 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 14 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 15 | `google/gemma-4-31b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 16 | `stepfun-ai/step-5-preview` | no | 2 | 0 | 0.0% | 5.1% | 0.0% | 7225ms | 8163ms | 3/3 |
| 17 | `meta/muse-glimmer-30b` | no | 2 | 0 | 0.0% | 2.6% | 0.0% | 13639ms | 13639ms | 3/3 |
| 18 | `nvidia/nemotron-parse` | no | 1 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 1/3 |
| 19 | `nvidia/nemotron-parse-2.0` | no | 1 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 1/3 |

## Runtime Exclusions
- `poolside/laguna-xs-2.1`: max latency 13195ms > 8000ms
- `nvidia/nemotron-3-ultra-550b-a55b`: max latency 8164ms > 8000ms
- `minimaxai/minimax-m3.1-flash`: avg latency 6770ms > 6000ms; max latency 13651ms > 8000ms; success rate 0.487 < 0.8; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-large-4-1t-a52b`: max latency 8343ms > 8000ms; success rate 0.282 < 0.8; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4.1-flash`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `z-ai/glm-5.3-flash`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `openai/gpt-oss-20b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-12b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-4b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-4-31b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-5-preview`: avg latency 7225ms > 6000ms; max latency 8163ms > 8000ms; success rate 0.051 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/muse-glimmer-30b`: avg latency 13639ms > 6000ms; max latency 13639ms > 8000ms; success rate 0.026 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-parse`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-parse-2.0`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
