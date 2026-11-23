# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-11-23T10:53:25.868Z
- Source runs: 3
- Winner: `nvidia/ising-calibration-1.5-31b`
- Fallbacks: `nvidia/nemotron-3.5-bolt-e4b`, `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`, `nvidia/nemotron-3-ultra-550b-a55b`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 4
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `nvidia/ising-calibration-1.5-31b` | yes | 55 | 57 | 0.0% | 100.0% | 100.0% | 620ms | 1264ms | 3/3 |
| 2 | `nvidia/nemotron-3.5-bolt-e4b` | yes | 54 | 55 | 0.0% | 100.0% | 100.0% | 873ms | 4545ms | 3/3 |
| 3 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1531ms | 3051ms | 3/3 |
| 4 | `nvidia/nemotron-3-ultra-550b-a55b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2996ms | 6887ms | 3/3 |
| 5 | `poolside/laguna-xs-2.1` | no | 53 | 57 | 0.0% | 100.0% | 66.7% | 1050ms | 11030ms | 3/3 |
| 6 | `nvidia/nemotron-3.5-lightning-30b-a3b` | no | 12 | 0 | 0.0% | 100.0% | 66.7% | 1163ms | 8773ms | 3/3 |
| 7 | `nvidia/riva-translate-4b-instruct-v2` | no | 9 | 8 | 0.0% | 28.2% | 0.0% | 13595ms | 14933ms | 3/3 |
| 8 | `stepfun-ai/step-5-preview` | no | 5 | 0 | 0.0% | 64.1% | 0.0% | 7002ms | 14282ms | 3/3 |
| 9 | `minimaxai/minimax-m3.1-flash` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 10 | `moonshotai/kimi-k3.1-pro` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 11 | `z-ai/glm-5.3-flash` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 12 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 13 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 14 | `google/gemma-4-31b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 15 | `fastino/gliner2-pii` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 16 | `meta/muse-glimmer-30b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 17 | `mistralai/mistral-large-4-1t-a52b` | no | 2 | 0 | 0.0% | 5.1% | 0.0% | 7047ms | 8132ms | 3/3 |

## Runtime Exclusions
- `poolside/laguna-xs-2.1`: max latency 11030ms > 8000ms
- `nvidia/nemotron-3.5-lightning-30b-a3b`: max latency 8773ms > 8000ms
- `nvidia/riva-translate-4b-instruct-v2`: avg latency 13595ms > 6000ms; max latency 14933ms > 8000ms; success rate 0.282 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-5-preview`: avg latency 7002ms > 6000ms; max latency 14282ms > 8000ms; success rate 0.641 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.000 < 0.5
- `minimaxai/minimax-m3.1-flash`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `moonshotai/kimi-k3.1-pro`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `z-ai/glm-5.3-flash`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-12b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-4b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-4-31b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `fastino/gliner2-pii`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/muse-glimmer-30b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-large-4-1t-a52b`: avg latency 7047ms > 6000ms; max latency 8132ms > 8000ms; success rate 0.051 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
