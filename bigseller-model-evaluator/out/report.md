# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-07-13T07:43:03.865Z
- Source runs: 3
- Winner: `abacusai/dracarys-llama-3.1-70b-instruct`
- Fallbacks: `meta/llama-3.1-8b-instruct`, `mistralai/mistral-small-4-119b-2603`, `upstage/solar-10.7b-instruct`, `nvidia/nemotron-mini-4b-instruct`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 12
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `abacusai/dracarys-llama-3.1-70b-instruct` | yes | 54 | 56 | 0.0% | 100.0% | 100.0% | 1839ms | 3717ms | 3/3 |
| 2 | `meta/llama-3.1-8b-instruct` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 486ms | 2155ms | 3/3 |
| 3 | `mistralai/mistral-small-4-119b-2603` | yes | 50 | 54 | 0.0% | 94.9% | 66.7% | 595ms | 2229ms | 3/3 |
| 4 | `upstage/solar-10.7b-instruct` | yes | 46 | 44 | 0.0% | 100.0% | 100.0% | 1088ms | 3615ms | 3/3 |
| 5 | `nvidia/nemotron-mini-4b-instruct` | yes | 40 | 36 | 0.0% | 100.0% | 100.0% | 683ms | 7839ms | 3/3 |
| 6 | `nvidia/nemotron-3-nano-30b-a3b` | yes | 30 | 22 | 0.0% | 97.4% | 100.0% | 2093ms | 5441ms | 3/3 |
| 7 | `sarvamai/sarvam-m` | yes | 29 | 21 | 0.0% | 100.0% | 100.0% | 4062ms | 4448ms | 3/3 |
| 8 | `nvidia/riva-translate-4b-instruct-v1.1` | yes | 20 | 9 | 0.0% | 100.0% | 100.0% | 1181ms | 1653ms | 3/3 |
| 9 | `nvidia/gliner-pii` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 308ms | 346ms | 3/3 |
| 10 | `openai/gpt-oss-120b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1874ms | 6932ms | 3/3 |
| 11 | `openai/gpt-oss-20b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2055ms | 6138ms | 3/3 |
| 12 | `nvidia/nvidia-nemotron-nano-9b-v2` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2384ms | 5405ms | 3/3 |
| 13 | `mistralai/mistral-large-3-675b-instruct-2512` | no | 62 | 75 | 0.0% | 71.8% | 33.3% | 1459ms | 13516ms | 3/3 |
| 14 | `mistralai/ministral-14b-instruct-2512` | no | 59 | 66 | 0.0% | 97.4% | 66.7% | 1671ms | 10864ms | 3/3 |
| 15 | `z-ai/glm-5.2` | no | 52 | 61 | 0.0% | 66.7% | 33.3% | 3553ms | 8749ms | 3/3 |
| 16 | `qwen/qwen3.5-122b-a10b` | no | 52 | 66 | 0.0% | 46.2% | 0.0% | 3342ms | 11562ms | 3/3 |
| 17 | `qwen/qwen3-next-80b-a3b-instruct` | no | 50 | 67 | 0.0% | 5.1% | 0.0% | 8888ms | 9967ms | 3/3 |
| 18 | `nvidia/llama-3.3-nemotron-super-49b-v1` | no | 49 | 55 | 0.0% | 94.9% | 33.3% | 2162ms | 12726ms | 3/3 |
| 19 | `deepseek-ai/deepseek-v4-pro` | no | 49 | 61 | 0.0% | 53.8% | 0.0% | 8140ms | 14259ms | 3/3 |
| 20 | `stockmark/stockmark-2-100b-instruct` | no | 48 | 51 | 0.0% | 100.0% | 66.7% | 2546ms | 9355ms | 3/3 |
| 21 | `mistralai/mistral-medium-3.5-128b` | no | 48 | 61 | 0.0% | 35.9% | 0.0% | 1955ms | 5884ms | 3/3 |
| 22 | `minimaxai/minimax-m3` | no | 48 | 60 | 0.0% | 64.1% | 0.0% | 6470ms | 14964ms | 3/3 |
| 23 | `mistralai/mistral-nemotron` | no | 47 | 50 | 0.0% | 94.9% | 66.7% | 1064ms | 8206ms | 3/3 |
| 24 | `meta/llama-3.1-70b-instruct` | no | 45 | 55 | 0.0% | 71.8% | 0.0% | 3631ms | 14060ms | 3/3 |
| 25 | `qwen/qwen3.5-397b-a17b` | no | 44 | 58 | 0.0% | 7.7% | 0.0% | 9359ms | 10785ms | 3/3 |
| 26 | `mistralai/mixtral-8x7b-instruct-v0.1` | no | 27 | 30 | 0.0% | 30.8% | 33.3% | 2805ms | 7485ms | 3/3 |
| 27 | `nvidia/nemotron-3-super-120b-a12b` | no | 25 | 18 | 0.0% | 100.0% | 66.7% | 2488ms | 13535ms | 3/3 |
| 28 | `nvidia/ising-calibration-1-35b-a3b` | no | 19 | 19 | 0.0% | 61.5% | 0.0% | 4962ms | 13338ms | 3/3 |
| 29 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 17 | 14 | 0.0% | 92.3% | 0.0% | 2765ms | 14226ms | 3/3 |
| 30 | `stepfun-ai/step-3.5-flash` | no | 9 | 0 | 0.0% | 92.3% | 33.3% | 3076ms | 11220ms | 3/3 |
| 31 | `stepfun-ai/step-3.7-flash` | no | 9 | 0 | 0.0% | 97.4% | 33.3% | 4292ms | 13964ms | 3/3 |
| 32 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | no | 9 | 0 | 0.0% | 84.6% | 33.3% | 5438ms | 11226ms | 3/3 |
| 33 | `minimaxai/minimax-m2.7` | no | 5 | 0 | 0.0% | 64.1% | 0.0% | 5670ms | 13770ms | 3/3 |
| 34 | `deepseek-ai/deepseek-v4-flash` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 35 | `moonshotai/kimi-k2.6` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 36 | `nvidia/llama-3.1-nemotron-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 37 | `meta/llama-3.3-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 38 | `nvidia/llama-3.1-nemotron-51b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 39 | `nvidia/llama3-chatqa-1.5-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 40 | `nvidia/nemotron-4-340b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 41 | `meta/llama-3.2-1b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 42 | `meta/llama-3.2-3b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 43 | `meta/llama-4-maverick-17b-128e-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 44 | `meta/llama2-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 45 | `nvidia/llama-3.1-nemotron-nano-8b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 46 | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 47 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 48 | `nvidia/nemotron-4-340b-reward` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 49 | `nvidia/nemotron-nano-3-30b-a3b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 50 | `nvidia/nemotron-parse` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 51 | `mistralai/mistral-7b-instruct-v0.3` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 52 | `mistralai/mistral-large-2-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 53 | `nv-mistralai/mistral-nemo-12b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 54 | `nvidia/mistral-nemo-minitron-8b-8k-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 55 | `mistralai/mistral-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 56 | `mistralai/mixtral-8x22b-v0.1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 57 | `microsoft/phi-3.5-moe-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 58 | `microsoft/phi-4-mini-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 59 | `microsoft/phi-4-multimodal-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 60 | `google/gemma-2-2b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 61 | `google/gemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 62 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 63 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 64 | `google/gemma-3n-e2b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 65 | `google/gemma-3n-e4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 66 | `google/gemma-4-31b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 67 | `google/recurrentgemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 68 | `ai21labs/jamba-1.5-large-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 69 | `aisingapore/sea-lion-7b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 70 | `bytedance/seed-oss-36b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
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
- `mistralai/mistral-large-3-675b-instruct-2512`: max latency 13516ms > 8000ms; success rate 0.718 < 0.8; runtime eligible rate 0.333 < 0.5
- `mistralai/ministral-14b-instruct-2512`: max latency 10864ms > 8000ms
- `z-ai/glm-5.2`: max latency 8749ms > 8000ms; success rate 0.667 < 0.8; runtime eligible rate 0.333 < 0.5
- `qwen/qwen3.5-122b-a10b`: max latency 11562ms > 8000ms; success rate 0.462 < 0.8; timeout failure rate 0.282 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3-next-80b-a3b-instruct`: avg latency 8888ms > 6000ms; max latency 9967ms > 8000ms; success rate 0.051 < 0.8; timeout failure rate 0.282 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1`: max latency 12726ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `deepseek-ai/deepseek-v4-pro`: avg latency 8140ms > 6000ms; max latency 14259ms > 8000ms; success rate 0.538 < 0.8; timeout failure rate 0.205 > 0.1; runtime eligible rate 0.000 < 0.5
- `stockmark/stockmark-2-100b-instruct`: max latency 9355ms > 8000ms
- `mistralai/mistral-medium-3.5-128b`: success rate 0.359 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `minimaxai/minimax-m3`: avg latency 6470ms > 6000ms; max latency 14964ms > 8000ms; success rate 0.641 < 0.8; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-nemotron`: max latency 8206ms > 8000ms
- `meta/llama-3.1-70b-instruct`: max latency 14060ms > 8000ms; success rate 0.718 < 0.8; timeout failure rate 0.282 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3.5-397b-a17b`: avg latency 9359ms > 6000ms; max latency 10785ms > 8000ms; success rate 0.077 < 0.8; timeout failure rate 0.282 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mixtral-8x7b-instruct-v0.1`: success rate 0.308 < 0.8; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.333 < 0.5
- `nvidia/nemotron-3-super-120b-a12b`: max latency 13535ms > 8000ms
- `nvidia/ising-calibration-1-35b-a3b`: max latency 13338ms > 8000ms; success rate 0.615 < 0.8; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-ultra-550b-a55b`: max latency 14226ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-3.5-flash`: max latency 11220ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `stepfun-ai/step-3.7-flash`: max latency 13964ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1.5`: max latency 11226ms > 8000ms; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.333 < 0.5
- `minimaxai/minimax-m2.7`: max latency 13770ms > 8000ms; success rate 0.641 < 0.8; timeout failure rate 0.103 > 0.1; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-flash`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `moonshotai/kimi-k2.6`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.3-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-51b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama3-chatqa-1.5-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.2-1b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.2-3b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-4-maverick-17b-128e-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama2-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-nano-8b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-ultra-253b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
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
- `google/gemma-3n-e2b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/gemma-3n-e4b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/gemma-4-31b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/recurrentgemma-2b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `ai21labs/jamba-1.5-large-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `aisingapore/sea-lion-7b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `bytedance/seed-oss-36b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
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
