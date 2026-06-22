# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-06-22T09:28:37.915Z
- Source runs: 3
- Winner: `mistralai/ministral-14b-instruct-2512`
- Fallbacks: `meta/llama-4-maverick-17b-128e-instruct`, `abacusai/dracarys-llama-3.1-70b-instruct`, `google/gemma-3n-e2b-it`, `mistralai/mistral-nemotron`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 22
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `mistralai/ministral-14b-instruct-2512` | yes | 63 | 68 | 0.0% | 100.0% | 100.0% | 1603ms | 5616ms | 3/3 |
| 2 | `meta/llama-4-maverick-17b-128e-instruct` | yes | 58 | 61 | 0.0% | 100.0% | 100.0% | 513ms | 827ms | 3/3 |
| 3 | `abacusai/dracarys-llama-3.1-70b-instruct` | yes | 54 | 56 | 0.0% | 100.0% | 100.0% | 1732ms | 2945ms | 3/3 |
| 4 | `google/gemma-3n-e2b-it` | yes | 53 | 54 | 0.0% | 100.0% | 100.0% | 1505ms | 2078ms | 3/3 |
| 5 | `mistralai/mistral-nemotron` | yes | 51 | 52 | 0.0% | 100.0% | 100.0% | 922ms | 2982ms | 3/3 |
| 6 | `meta/llama-3.2-1b-instruct` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 1254ms | 3220ms | 3/3 |
| 7 | `stockmark/stockmark-2-100b-instruct` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 1538ms | 3529ms | 3/3 |
| 8 | `mistralai/mistral-small-4-119b-2603` | yes | 50 | 54 | 0.0% | 82.1% | 66.7% | 272ms | 580ms | 3/3 |
| 9 | `meta/llama-3.2-3b-instruct` | yes | 47 | 46 | 0.0% | 100.0% | 100.0% | 724ms | 1933ms | 3/3 |
| 10 | `upstage/solar-10.7b-instruct` | yes | 46 | 44 | 0.0% | 100.0% | 100.0% | 1060ms | 3496ms | 3/3 |
| 11 | `google/gemma-3n-e4b-it` | yes | 46 | 45 | 0.0% | 100.0% | 100.0% | 1710ms | 2048ms | 3/3 |
| 12 | `nvidia/nemotron-mini-4b-instruct` | yes | 39 | 35 | 0.0% | 100.0% | 100.0% | 416ms | 564ms | 3/3 |
| 13 | `nvidia/nemotron-3-nano-30b-a3b` | yes | 31 | 24 | 0.0% | 100.0% | 100.0% | 1072ms | 5177ms | 3/3 |
| 14 | `sarvamai/sarvam-m` | yes | 29 | 21 | 0.0% | 100.0% | 100.0% | 3917ms | 4116ms | 3/3 |
| 15 | `nvidia/ising-calibration-1-35b-a3b` | yes | 28 | 19 | 0.0% | 100.0% | 100.0% | 1394ms | 2301ms | 3/3 |
| 16 | `nvidia/riva-translate-4b-instruct-v1.1` | yes | 20 | 9 | 0.0% | 100.0% | 100.0% | 1193ms | 1831ms | 3/3 |
| 17 | `nvidia/gliner-pii` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 226ms | 241ms | 3/3 |
| 18 | `openai/gpt-oss-20b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 821ms | 1418ms | 3/3 |
| 19 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | yes | 14 | 0 | 0.0% | 97.4% | 100.0% | 867ms | 2652ms | 3/3 |
| 20 | `openai/gpt-oss-120b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1751ms | 4732ms | 3/3 |
| 21 | `nvidia/nvidia-nemotron-nano-9b-v2` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2515ms | 3397ms | 3/3 |
| 22 | `bytedance/seed-oss-36b-instruct` | yes | 11 | 0 | 0.0% | 94.9% | 66.7% | 4700ms | 7003ms | 3/3 |
| 23 | `mistralai/mistral-large-3-675b-instruct-2512` | no | 60 | 76 | 0.0% | 59.0% | 0.0% | 2635ms | 10544ms | 3/3 |
| 24 | `qwen/qwen3-next-80b-a3b-instruct` | no | 55 | 60 | 0.0% | 100.0% | 66.7% | 963ms | 9802ms | 3/3 |
| 25 | `z-ai/glm-5.1` | no | 50 | 60 | 0.0% | 94.9% | 0.0% | 7035ms | 12796ms | 3/3 |
| 26 | `mistralai/mistral-medium-3.5-128b` | no | 49 | 60 | 0.0% | 69.2% | 0.0% | 2425ms | 11645ms | 3/3 |
| 27 | `qwen/qwen3.5-122b-a10b` | no | 49 | 60 | 0.0% | 79.5% | 0.0% | 2574ms | 12235ms | 3/3 |
| 28 | `meta/llama-3.1-8b-instruct` | no | 48 | 51 | 0.0% | 100.0% | 66.7% | 927ms | 9284ms | 3/3 |
| 29 | `minimaxai/minimax-m3` | no | 48 | 61 | 0.0% | 51.3% | 0.0% | 4235ms | 13531ms | 3/3 |
| 30 | `deepseek-ai/deepseek-v4-flash` | no | 48 | 61 | 0.0% | 46.2% | 0.0% | 4442ms | 14304ms | 3/3 |
| 31 | `meta/llama-3.1-70b-instruct` | no | 47 | 54 | 0.0% | 84.6% | 33.3% | 2516ms | 7831ms | 3/3 |
| 32 | `moonshotai/kimi-k2.6` | no | 46 | 51 | 0.0% | 97.4% | 33.3% | 2762ms | 12258ms | 3/3 |
| 33 | `nvidia/llama-3.3-nemotron-super-49b-v1` | no | 46 | 55 | 0.0% | 87.2% | 0.0% | 2682ms | 13090ms | 3/3 |
| 34 | `meta/llama-3.3-70b-instruct` | no | 44 | 53 | 0.0% | 76.9% | 0.0% | 3900ms | 13312ms | 3/3 |
| 35 | `qwen/qwen3.5-397b-a17b` | no | 43 | 47 | 0.0% | 97.4% | 33.3% | 2889ms | 9563ms | 3/3 |
| 36 | `mistralai/mixtral-8x7b-instruct-v0.1` | no | 33 | 29 | 0.0% | 100.0% | 66.7% | 5184ms | 13946ms | 3/3 |
| 37 | `nvidia/llama-3.1-nemotron-nano-8b-v1` | no | 29 | 35 | 0.0% | 30.8% | 0.0% | 673ms | 1186ms | 3/3 |
| 38 | `nvidia/nemotron-3-super-120b-a12b` | no | 20 | 19 | 0.0% | 82.1% | 0.0% | 7220ms | 14989ms | 3/3 |
| 39 | `stepfun-ai/step-3.7-flash` | no | 12 | 0 | 0.0% | 100.0% | 66.7% | 1747ms | 12214ms | 3/3 |
| 40 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | no | 9 | 0 | 0.0% | 100.0% | 33.3% | 5428ms | 11877ms | 3/3 |
| 41 | `stepfun-ai/step-3.5-flash` | no | 6 | 0 | 0.0% | 84.6% | 0.0% | 5279ms | 14526ms | 3/3 |
| 42 | `deepseek-ai/deepseek-v4-pro` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 43 | `minimaxai/minimax-m2.7` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 44 | `nvidia/llama-3.1-nemotron-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 45 | `nvidia/llama-3.1-nemotron-51b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 46 | `nvidia/llama3-chatqa-1.5-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 47 | `nvidia/nemotron-4-340b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 48 | `meta/llama2-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 49 | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 50 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 51 | `nvidia/nemotron-4-340b-reward` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 52 | `nvidia/nemotron-nano-3-30b-a3b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 53 | `nvidia/nemotron-parse` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 54 | `mistralai/mistral-7b-instruct-v0.3` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 55 | `mistralai/mistral-large-2-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 56 | `nv-mistralai/mistral-nemo-12b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 57 | `nvidia/mistral-nemo-minitron-8b-8k-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 58 | `mistralai/mistral-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 59 | `mistralai/mixtral-8x22b-v0.1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 60 | `microsoft/phi-3.5-moe-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 61 | `microsoft/phi-4-mini-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 62 | `microsoft/phi-4-multimodal-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 63 | `google/gemma-2-2b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 64 | `google/gemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 65 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 66 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 67 | `google/gemma-4-31b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 68 | `google/recurrentgemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 69 | `ai21labs/jamba-1.5-large-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 70 | `aisingapore/sea-lion-7b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 71 | `databricks/dbrx-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 72 | `ibm/granite-3.0-3b-a800m-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 73 | `ibm/granite-3.0-8b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 74 | `nvidia/riva-translate-4b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 75 | `zyphra/zamba2-7b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 76 | `writer/palmyra-creative-122b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 77 | `writer/palmyra-fin-70b-32k` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 78 | `writer/palmyra-med-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 79 | `writer/palmyra-med-70b-32k` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 80 | `01-ai/yi-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 81 | `microsoft/kosmos-2` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 82 | `nvidia/neva-22b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 83 | `nvidia/vila` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |

## Runtime Exclusions
- `mistralai/mistral-large-3-675b-instruct-2512`: max latency 10544ms > 8000ms; success rate 0.590 < 0.8; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3-next-80b-a3b-instruct`: max latency 9802ms > 8000ms
- `z-ai/glm-5.1`: avg latency 7035ms > 6000ms; max latency 12796ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-medium-3.5-128b`: max latency 11645ms > 8000ms; success rate 0.692 < 0.8; timeout failure rate 0.282 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3.5-122b-a10b`: max latency 12235ms > 8000ms; success rate 0.795 < 0.8; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.1-8b-instruct`: max latency 9284ms > 8000ms
- `minimaxai/minimax-m3`: max latency 13531ms > 8000ms; success rate 0.513 < 0.8; timeout failure rate 0.205 > 0.1; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-flash`: max latency 14304ms > 8000ms; success rate 0.462 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.1-70b-instruct`: timeout failure rate 0.154 > 0.1; runtime eligible rate 0.333 < 0.5
- `moonshotai/kimi-k2.6`: max latency 12258ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1`: max latency 13090ms > 8000ms; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.3-70b-instruct`: max latency 13312ms > 8000ms; success rate 0.769 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3.5-397b-a17b`: max latency 9563ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `mistralai/mixtral-8x7b-instruct-v0.1`: max latency 13946ms > 8000ms
- `nvidia/llama-3.1-nemotron-nano-8b-v1`: success rate 0.308 < 0.8; timeout failure rate 0.308 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-super-120b-a12b`: avg latency 7220ms > 6000ms; max latency 14989ms > 8000ms; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-3.7-flash`: max latency 12214ms > 8000ms
- `nvidia/llama-3.3-nemotron-super-49b-v1.5`: max latency 11877ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `stepfun-ai/step-3.5-flash`: max latency 14526ms > 8000ms; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-pro`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `minimaxai/minimax-m2.7`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-51b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama3-chatqa-1.5-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama2-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-ultra-253b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-ultra-550b-a55b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-reward`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-nano-3-30b-a3b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-parse`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-7b-instruct-v0.3`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-large-2-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nv-mistralai/mistral-nemo-12b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/mistral-nemo-minitron-8b-8k-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-large`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/mixtral-8x22b-v0.1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `microsoft/phi-3.5-moe-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `microsoft/phi-4-mini-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `microsoft/phi-4-multimodal-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-2-2b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-2b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-12b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-4b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-4-31b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/recurrentgemma-2b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `ai21labs/jamba-1.5-large-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `aisingapore/sea-lion-7b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `databricks/dbrx-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `ibm/granite-3.0-3b-a800m-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `ibm/granite-3.0-8b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/riva-translate-4b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `zyphra/zamba2-7b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `writer/palmyra-creative-122b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `writer/palmyra-fin-70b-32k`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `writer/palmyra-med-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `writer/palmyra-med-70b-32k`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `01-ai/yi-large`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `microsoft/kosmos-2`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/neva-22b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/vila`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
