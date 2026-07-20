# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-07-20T07:40:41.584Z
- Source runs: 3
- Winner: `google/gemma-3n-e2b-it`
- Fallbacks: `meta/llama-3.1-8b-instruct`, `mistralai/mistral-nemotron`, `mistralai/mistral-small-4-119b-2603`, `meta/llama-3.2-3b-instruct`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 16
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `google/gemma-3n-e2b-it` | yes | 55 | 57 | 0.0% | 100.0% | 100.0% | 1599ms | 4105ms | 3/3 |
| 2 | `meta/llama-3.1-8b-instruct` | yes | 52 | 53 | 0.0% | 100.0% | 100.0% | 462ms | 1568ms | 3/3 |
| 3 | `mistralai/mistral-nemotron` | yes | 52 | 53 | 0.0% | 100.0% | 100.0% | 871ms | 1134ms | 3/3 |
| 4 | `mistralai/mistral-small-4-119b-2603` | yes | 52 | 53 | 0.0% | 100.0% | 100.0% | 898ms | 2362ms | 3/3 |
| 5 | `meta/llama-3.2-3b-instruct` | yes | 49 | 48 | 0.0% | 100.0% | 100.0% | 495ms | 855ms | 3/3 |
| 6 | `upstage/solar-10.7b-instruct` | yes | 46 | 44 | 0.0% | 100.0% | 100.0% | 1597ms | 4235ms | 3/3 |
| 7 | `google/gemma-3n-e4b-it` | yes | 44 | 45 | 0.0% | 94.9% | 66.7% | 1813ms | 2502ms | 3/3 |
| 8 | `nvidia/nemotron-mini-4b-instruct` | yes | 41 | 37 | 0.0% | 100.0% | 100.0% | 453ms | 655ms | 3/3 |
| 9 | `nvidia/nemotron-3-nano-30b-a3b` | yes | 31 | 24 | 0.0% | 100.0% | 100.0% | 1522ms | 4922ms | 3/3 |
| 10 | `sarvamai/sarvam-m` | yes | 28 | 20 | 0.0% | 100.0% | 100.0% | 4339ms | 4876ms | 3/3 |
| 11 | `nvidia/ising-calibration-1-35b-a3b` | yes | 27 | 18 | 0.0% | 100.0% | 100.0% | 1187ms | 6543ms | 3/3 |
| 12 | `nvidia/riva-translate-4b-instruct-v1.1` | yes | 20 | 9 | 0.0% | 100.0% | 100.0% | 1172ms | 1863ms | 3/3 |
| 13 | `nvidia/gliner-pii` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 253ms | 367ms | 3/3 |
| 14 | `openai/gpt-oss-20b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1331ms | 5135ms | 3/3 |
| 15 | `nvidia/nvidia-nemotron-nano-9b-v2` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2462ms | 4100ms | 3/3 |
| 16 | `thinkingmachines/inkling` | yes | 11 | 0 | 0.0% | 92.3% | 66.7% | 1149ms | 2549ms | 3/3 |
| 17 | `mistralai/mistral-large-3-675b-instruct-2512` | no | 55 | 72 | 0.0% | 30.8% | 0.0% | 10010ms | 14563ms | 3/3 |
| 18 | `deepseek-ai/deepseek-v4-pro` | no | 52 | 64 | 0.0% | 30.8% | 33.3% | 2591ms | 4443ms | 3/3 |
| 19 | `nvidia/llama-3.3-nemotron-super-49b-v1` | no | 50 | 53 | 0.0% | 94.9% | 66.7% | 2730ms | 12179ms | 3/3 |
| 20 | `abacusai/dracarys-llama-3.1-70b-instruct` | no | 50 | 56 | 0.0% | 64.1% | 66.7% | 3159ms | 7729ms | 3/3 |
| 21 | `qwen/qwen3-next-80b-a3b-instruct` | no | 50 | 61 | 0.0% | 30.8% | 33.3% | 1770ms | 2896ms | 3/3 |
| 22 | `z-ai/glm-5.2` | no | 50 | 58 | 0.0% | 69.2% | 33.3% | 2213ms | 13302ms | 3/3 |
| 23 | `poolside/laguna-xs-2.1` | no | 49 | 56 | 0.0% | 94.9% | 33.3% | 818ms | 10349ms | 3/3 |
| 24 | `minimaxai/minimax-m3` | no | 48 | 60 | 0.0% | 53.8% | 0.0% | 7063ms | 12753ms | 3/3 |
| 25 | `meta/llama-3.1-70b-instruct` | no | 45 | 55 | 0.0% | 71.8% | 0.0% | 3677ms | 14408ms | 3/3 |
| 26 | `qwen/qwen3.5-397b-a17b` | no | 39 | 50 | 0.0% | 12.8% | 0.0% | 10377ms | 12628ms | 3/3 |
| 27 | `mistralai/mixtral-8x7b-instruct-v0.1` | no | 33 | 36 | 0.0% | 92.3% | 0.0% | 6448ms | 14011ms | 3/3 |
| 28 | `nvidia/nemotron-3-super-120b-a12b` | no | 21 | 17 | 0.0% | 97.4% | 33.3% | 2496ms | 11247ms | 3/3 |
| 29 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 18 | 17 | 0.0% | 82.1% | 0.0% | 3996ms | 12647ms | 3/3 |
| 30 | `stepfun-ai/step-3.5-flash` | no | 12 | 0 | 0.0% | 97.4% | 66.7% | 2553ms | 12563ms | 3/3 |
| 31 | `stepfun-ai/step-3.7-flash` | no | 12 | 0 | 0.0% | 97.4% | 66.7% | 2787ms | 8978ms | 3/3 |
| 32 | `bytedance/seed-oss-36b-instruct` | no | 10 | 0 | 0.0% | 66.7% | 66.7% | 3639ms | 4410ms | 3/3 |
| 33 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | no | 9 | 0 | 0.0% | 87.2% | 33.3% | 5632ms | 13711ms | 3/3 |
| 34 | `openai/gpt-oss-120b` | no | 7 | 0 | 0.0% | 97.4% | 0.0% | 4010ms | 12984ms | 3/3 |
| 35 | `minimaxai/minimax-m2.7` | no | 3 | 0 | 0.0% | 28.2% | 0.0% | 6765ms | 13739ms | 3/3 |
| 36 | `deepseek-ai/deepseek-v4-flash` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 37 | `moonshotai/kimi-k2.6` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 38 | `nvidia/llama-3.1-nemotron-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 39 | `meta/llama-3.3-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 40 | `nvidia/llama-3.1-nemotron-51b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 41 | `nvidia/llama3-chatqa-1.5-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 42 | `nvidia/nemotron-4-340b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 43 | `meta/llama-3.2-1b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 44 | `meta/llama-4-maverick-17b-128e-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 45 | `meta/llama2-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 46 | `nvidia/llama-3.1-nemotron-nano-8b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 47 | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 48 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 49 | `nvidia/nemotron-4-340b-reward` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 50 | `nvidia/nemotron-nano-3-30b-a3b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 51 | `nvidia/nemotron-parse` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 52 | `mistralai/ministral-14b-instruct-2512` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 53 | `mistralai/mistral-7b-instruct-v0.3` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 54 | `mistralai/mistral-large-2-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 55 | `nv-mistralai/mistral-nemo-12b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 56 | `nvidia/mistral-nemo-minitron-8b-8k-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 57 | `mistralai/mistral-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 58 | `mistralai/mistral-medium-3.5-128b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 59 | `mistralai/mixtral-8x22b-v0.1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 60 | `microsoft/phi-3.5-moe-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 61 | `google/gemma-2-2b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 62 | `google/gemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 63 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 64 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 65 | `google/gemma-4-31b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 66 | `google/recurrentgemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 67 | `ai21labs/jamba-1.5-large-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 68 | `aisingapore/sea-lion-7b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 69 | `databricks/dbrx-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 70 | `ibm/granite-3.0-3b-a800m-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 71 | `ibm/granite-3.0-8b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 72 | `nvidia/riva-translate-4b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 73 | `zyphra/zamba2-7b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 74 | `writer/palmyra-creative-122b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 75 | `writer/palmyra-fin-70b-32k` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 76 | `writer/palmyra-med-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 77 | `writer/palmyra-med-70b-32k` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 78 | `01-ai/yi-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 79 | `microsoft/kosmos-2` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 80 | `nvidia/neva-22b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 81 | `nvidia/vila` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |

## Runtime Exclusions
- `mistralai/mistral-large-3-675b-instruct-2512`: avg latency 10010ms > 6000ms; max latency 14563ms > 8000ms; success rate 0.308 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-pro`: success rate 0.308 < 0.8; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1`: max latency 12179ms > 8000ms
- `abacusai/dracarys-llama-3.1-70b-instruct`: success rate 0.641 < 0.8; timeout failure rate 0.103 > 0.1
- `qwen/qwen3-next-80b-a3b-instruct`: success rate 0.308 < 0.8; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.333 < 0.5
- `z-ai/glm-5.2`: max latency 13302ms > 8000ms; success rate 0.692 < 0.8; runtime eligible rate 0.333 < 0.5
- `poolside/laguna-xs-2.1`: max latency 10349ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `minimaxai/minimax-m3`: avg latency 7063ms > 6000ms; max latency 12753ms > 8000ms; success rate 0.538 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.1-70b-instruct`: max latency 14408ms > 8000ms; success rate 0.718 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3.5-397b-a17b`: avg latency 10377ms > 6000ms; max latency 12628ms > 8000ms; success rate 0.128 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mixtral-8x7b-instruct-v0.1`: avg latency 6448ms > 6000ms; max latency 14011ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-super-120b-a12b`: max latency 11247ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/nemotron-3-ultra-550b-a55b`: max latency 12647ms > 8000ms; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-3.5-flash`: max latency 12563ms > 8000ms
- `stepfun-ai/step-3.7-flash`: max latency 8978ms > 8000ms
- `bytedance/seed-oss-36b-instruct`: success rate 0.667 < 0.8
- `nvidia/llama-3.3-nemotron-super-49b-v1.5`: max latency 13711ms > 8000ms; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.333 < 0.5
- `openai/gpt-oss-120b`: max latency 12984ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `minimaxai/minimax-m2.7`: avg latency 6765ms > 6000ms; max latency 13739ms > 8000ms; success rate 0.282 < 0.8; timeout failure rate 0.205 > 0.1; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-flash`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `moonshotai/kimi-k2.6`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.3-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-51b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama3-chatqa-1.5-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.2-1b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-4-maverick-17b-128e-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama2-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-nano-8b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-ultra-253b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-reward`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-nano-3-30b-a3b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-parse`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/ministral-14b-instruct-2512`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-7b-instruct-v0.3`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-large-2-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nv-mistralai/mistral-nemo-12b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/mistral-nemo-minitron-8b-8k-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-large`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-medium-3.5-128b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mixtral-8x22b-v0.1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `microsoft/phi-3.5-moe-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
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
