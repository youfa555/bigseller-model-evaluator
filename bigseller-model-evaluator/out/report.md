# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-08-03T07:12:51.382Z
- Source runs: 3
- Winner: `meta/llama-3.1-8b-instruct`
- Fallbacks: `nvidia/nemotron-mini-4b-instruct`, `nvidia/nemotron-3-nano-30b-a3b`, `nvidia/riva-translate-4b-instruct-v1.1`, `nvidia/riva-translate-4b-instruct-v2`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 8
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `meta/llama-3.1-8b-instruct` | yes | 51 | 52 | 0.0% | 100.0% | 100.0% | 316ms | 522ms | 3/3 |
| 2 | `nvidia/nemotron-mini-4b-instruct` | yes | 39 | 35 | 0.0% | 100.0% | 100.0% | 499ms | 635ms | 3/3 |
| 3 | `nvidia/nemotron-3-nano-30b-a3b` | yes | 31 | 24 | 0.0% | 100.0% | 100.0% | 1173ms | 3796ms | 3/3 |
| 4 | `nvidia/riva-translate-4b-instruct-v1.1` | yes | 20 | 9 | 0.0% | 100.0% | 100.0% | 1272ms | 1743ms | 3/3 |
| 5 | `nvidia/riva-translate-4b-instruct-v2` | yes | 18 | 5 | 0.0% | 100.0% | 100.0% | 650ms | 751ms | 3/3 |
| 6 | `openai/gpt-oss-120b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1779ms | 5328ms | 3/3 |
| 7 | `openai/gpt-oss-20b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1870ms | 5573ms | 3/3 |
| 8 | `nvidia/nvidia-nemotron-nano-9b-v2` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2455ms | 4556ms | 3/3 |
| 9 | `deepseek-ai/deepseek-v4-pro` | no | 56 | 70 | 0.0% | 74.4% | 0.0% | 7951ms | 14169ms | 3/3 |
| 10 | `nvidia/ising-calibration-1.5-31b` | no | 53 | 58 | 0.0% | 97.4% | 66.7% | 930ms | 10660ms | 3/3 |
| 11 | `deepseek-ai/deepseek-v4-flash` | no | 53 | 66 | 0.0% | 69.2% | 0.0% | 3179ms | 5997ms | 3/3 |
| 12 | `minimaxai/minimax-m3` | no | 49 | 64 | 0.0% | 12.8% | 0.0% | 10151ms | 14448ms | 3/3 |
| 13 | `poolside/laguna-xs-2.1` | no | 48 | 54 | 0.0% | 87.2% | 33.3% | 1627ms | 12323ms | 3/3 |
| 14 | `nvidia/llama-3.3-nemotron-super-49b-v1` | no | 48 | 55 | 0.0% | 79.5% | 33.3% | 3046ms | 12175ms | 3/3 |
| 15 | `z-ai/glm-5.2` | no | 47 | 60 | 0.0% | 41.0% | 0.0% | 10219ms | 14104ms | 3/3 |
| 16 | `mistralai/mistral-nemotron` | no | 46 | 51 | 0.0% | 89.7% | 33.3% | 1110ms | 4750ms | 3/3 |
| 17 | `meta/llama-3.2-1b-instruct` | no | 45 | 50 | 0.0% | 94.9% | 33.3% | 3604ms | 14591ms | 3/3 |
| 18 | `meta/llama-3.1-70b-instruct` | no | 44 | 55 | 0.0% | 48.7% | 0.0% | 3195ms | 14891ms | 3/3 |
| 19 | `meta/llama-3.3-70b-instruct` | no | 37 | 48 | 0.0% | 5.1% | 0.0% | 8896ms | 14804ms | 3/3 |
| 20 | `nvidia/nemotron-3-super-120b-a12b` | no | 20 | 15 | 0.0% | 92.3% | 33.3% | 2424ms | 11053ms | 3/3 |
| 21 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 17 | 14 | 0.0% | 97.4% | 0.0% | 4499ms | 11892ms | 3/3 |
| 22 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | no | 7 | 0 | 0.0% | 94.9% | 0.0% | 5472ms | 13925ms | 3/3 |
| 23 | `stepfun-ai/step-3.7-flash` | no | 5 | 0 | 0.0% | 66.7% | 0.0% | 5538ms | 13855ms | 3/3 |
| 24 | `thinkingmachines/inkling` | no | 4 | 0 | 0.0% | 41.0% | 0.0% | 2473ms | 5541ms | 3/3 |
| 25 | `moonshotai/kimi-k2.6` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 26 | `nvidia/llama-3.1-nemotron-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 27 | `nvidia/llama-3.1-nemotron-51b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 28 | `nvidia/llama3-chatqa-1.5-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 29 | `nvidia/nemotron-4-340b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 30 | `meta/llama-3.2-3b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 31 | `meta/llama2-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 32 | `nvidia/llama-3.1-nemotron-nano-8b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 33 | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 34 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 35 | `nvidia/nemotron-4-340b-reward` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 36 | `nvidia/nemotron-nano-3-30b-a3b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 37 | `nvidia/nemotron-parse` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 38 | `mistralai/mistral-7b-instruct-v0.3` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 39 | `mistralai/mistral-large-2-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 40 | `nv-mistralai/mistral-nemo-12b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 41 | `nvidia/mistral-nemo-minitron-8b-8k-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 42 | `mistralai/mistral-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 43 | `mistralai/mistral-medium-3.5-128b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 44 | `mistralai/mixtral-8x22b-v0.1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 45 | `microsoft/phi-3.5-moe-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 46 | `google/gemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 47 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 48 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 49 | `google/gemma-4-31b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 50 | `google/recurrentgemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 51 | `ai21labs/jamba-1.5-large-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 52 | `aisingapore/sea-lion-7b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 53 | `databricks/dbrx-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 54 | `ibm/granite-3.0-3b-a800m-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 55 | `ibm/granite-3.0-8b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 56 | `nvidia/riva-translate-4b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 57 | `zyphra/zamba2-7b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 58 | `writer/palmyra-creative-122b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 59 | `writer/palmyra-fin-70b-32k` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 60 | `writer/palmyra-med-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 61 | `writer/palmyra-med-70b-32k` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 62 | `01-ai/yi-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 63 | `microsoft/kosmos-2` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 64 | `nvidia/neva-22b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 65 | `nvidia/vila` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |

## Runtime Exclusions
- `deepseek-ai/deepseek-v4-pro`: avg latency 7951ms > 6000ms; max latency 14169ms > 8000ms; success rate 0.744 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/ising-calibration-1.5-31b`: max latency 10660ms > 8000ms
- `deepseek-ai/deepseek-v4-flash`: success rate 0.692 < 0.8; runtime eligible rate 0.000 < 0.5
- `minimaxai/minimax-m3`: avg latency 10151ms > 6000ms; max latency 14448ms > 8000ms; success rate 0.128 < 0.8; timeout failure rate 0.333 > 0.1; runtime eligible rate 0.000 < 0.5
- `poolside/laguna-xs-2.1`: max latency 12323ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1`: max latency 12175ms > 8000ms; success rate 0.795 < 0.8; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.333 < 0.5
- `z-ai/glm-5.2`: avg latency 10219ms > 6000ms; max latency 14104ms > 8000ms; success rate 0.410 < 0.8; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-nemotron`: timeout failure rate 0.103 > 0.1; runtime eligible rate 0.333 < 0.5
- `meta/llama-3.2-1b-instruct`: max latency 14591ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `meta/llama-3.1-70b-instruct`: max latency 14891ms > 8000ms; success rate 0.487 < 0.8; timeout failure rate 0.359 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.3-70b-instruct`: avg latency 8896ms > 6000ms; max latency 14804ms > 8000ms; success rate 0.051 < 0.8; timeout failure rate 0.282 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-super-120b-a12b`: max latency 11053ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/nemotron-3-ultra-550b-a55b`: max latency 11892ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1.5`: max latency 13925ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-3.7-flash`: max latency 13855ms > 8000ms; success rate 0.667 < 0.8; timeout failure rate 0.333 > 0.1; runtime eligible rate 0.000 < 0.5
- `thinkingmachines/inkling`: success rate 0.410 < 0.8; runtime eligible rate 0.000 < 0.5
- `moonshotai/kimi-k2.6`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-51b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama3-chatqa-1.5-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.2-3b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
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
- `mistralai/mistral-medium-3.5-128b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mixtral-8x22b-v0.1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `microsoft/phi-3.5-moe-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
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
