# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-08-24T04:21:04.156Z
- Source runs: 3
- Winner: `nvidia/ising-calibration-1.5-31b`
- Fallbacks: `meta/llama-3.1-8b-instruct`, `nvidia/nemotron-3-nano-30b-a3b`, `nvidia/nemotron-3-super-120b-a12b`, `nvidia/riva-translate-4b-instruct-v1.1`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 9
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `nvidia/ising-calibration-1.5-31b` | yes | 54 | 55 | 0.0% | 100.0% | 100.0% | 651ms | 1875ms | 3/3 |
| 2 | `meta/llama-3.1-8b-instruct` | yes | 52 | 53 | 0.0% | 100.0% | 100.0% | 458ms | 1508ms | 3/3 |
| 3 | `nvidia/nemotron-3-nano-30b-a3b` | yes | 29 | 21 | 0.0% | 100.0% | 100.0% | 1238ms | 3862ms | 3/3 |
| 4 | `nvidia/nemotron-3-super-120b-a12b` | yes | 26 | 16 | 0.0% | 100.0% | 100.0% | 2238ms | 7503ms | 3/3 |
| 5 | `nvidia/riva-translate-4b-instruct-v1.1` | yes | 20 | 9 | 0.0% | 100.0% | 100.0% | 1210ms | 1661ms | 3/3 |
| 6 | `nvidia/riva-translate-4b-instruct-v2` | yes | 18 | 5 | 0.0% | 100.0% | 100.0% | 662ms | 829ms | 3/3 |
| 7 | `meta/muse-glimmer-30b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 371ms | 449ms | 3/3 |
| 8 | `nvidia/nvidia-nemotron-nano-9b-v2` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2402ms | 5125ms | 3/3 |
| 9 | `openai/gpt-oss-20b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2444ms | 7149ms | 3/3 |
| 10 | `minimaxai/minimax-m3` | no | 53 | 70 | 0.0% | 15.4% | 0.0% | 4485ms | 8709ms | 3/3 |
| 11 | `meta/llama-3.2-1b-instruct` | no | 48 | 51 | 0.0% | 100.0% | 66.7% | 3227ms | 11763ms | 3/3 |
| 12 | `poolside/laguna-xs-2.1` | no | 48 | 57 | 0.0% | 59.0% | 33.3% | 2522ms | 11016ms | 3/3 |
| 13 | `nvidia/llama-3.3-nemotron-super-49b-v1` | no | 46 | 56 | 0.0% | 82.1% | 0.0% | 3790ms | 13518ms | 3/3 |
| 14 | `mistralai/mistral-nemotron` | no | 45 | 53 | 0.0% | 43.6% | 33.3% | 811ms | 1029ms | 3/3 |
| 15 | `meta/llama-3.1-70b-instruct` | no | 45 | 54 | 0.0% | 84.6% | 0.0% | 3299ms | 14397ms | 3/3 |
| 16 | `nvidia/nemotron-mini-4b-instruct` | no | 35 | 35 | 0.0% | 66.7% | 66.7% | 493ms | 607ms | 3/3 |
| 17 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 20 | 16 | 0.0% | 87.2% | 33.3% | 4092ms | 13095ms | 3/3 |
| 18 | `moonshotai/kimi-k3` | no | 11 | 12 | 0.0% | 10.3% | 0.0% | 3963ms | 5546ms | 3/3 |
| 19 | `nvidia/nemotron-3.5-lightning-30b-a3b` | no | 10 | 5 | 0.0% | 89.7% | 0.0% | 2984ms | 11896ms | 3/3 |
| 20 | `stepfun-ai/step-3.7-flash` | no | 7 | 0 | 0.0% | 100.0% | 0.0% | 5476ms | 14983ms | 3/3 |
| 21 | `openai/gpt-oss-120b` | no | 6 | 0 | 0.0% | 33.3% | 33.3% | 1831ms | 3752ms | 3/3 |
| 22 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | no | 6 | 0 | 0.0% | 76.9% | 0.0% | 6154ms | 14547ms | 3/3 |
| 23 | `thinkingmachines/inkling` | no | 5 | 0 | 0.0% | 59.0% | 0.0% | 5942ms | 11690ms | 3/3 |
| 24 | `deepseek-ai/deepseek-v4-flash-0731` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 25 | `moonshotai/kimi-k2.6` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 26 | `nvidia/llama-3.1-nemotron-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 27 | `meta/llama-3.3-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 28 | `nvidia/llama-3.1-nemotron-51b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 29 | `nvidia/llama3-chatqa-1.5-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 30 | `nvidia/nemotron-4-340b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 31 | `meta/llama-3.2-3b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 32 | `meta/llama2-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 33 | `nvidia/llama-3.1-nemotron-nano-8b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 34 | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 35 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 36 | `nvidia/nemotron-4-340b-reward` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 37 | `nvidia/nemotron-nano-3-30b-a3b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 38 | `nvidia/nemotron-parse` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 39 | `mistralai/mistral-7b-instruct-v0.3` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 40 | `mistralai/mistral-large-2-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 41 | `nv-mistralai/mistral-nemo-12b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 42 | `nvidia/mistral-nemo-minitron-8b-8k-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 43 | `mistralai/mistral-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
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
- `minimaxai/minimax-m3`: max latency 8709ms > 8000ms; success rate 0.154 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.2-1b-instruct`: max latency 11763ms > 8000ms
- `poolside/laguna-xs-2.1`: max latency 11016ms > 8000ms; success rate 0.590 < 0.8; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1`: max latency 13518ms > 8000ms; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mistral-nemotron`: success rate 0.436 < 0.8; timeout failure rate 0.282 > 0.1; runtime eligible rate 0.333 < 0.5
- `meta/llama-3.1-70b-instruct`: max latency 14397ms > 8000ms; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-mini-4b-instruct`: success rate 0.667 < 0.8
- `nvidia/nemotron-3-ultra-550b-a55b`: max latency 13095ms > 8000ms; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.333 < 0.5
- `moonshotai/kimi-k3`: success rate 0.103 < 0.8; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3.5-lightning-30b-a3b`: max latency 11896ms > 8000ms; timeout failure rate 0.103 > 0.1; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-3.7-flash`: max latency 14983ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `openai/gpt-oss-120b`: success rate 0.333 < 0.8; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1.5`: avg latency 6154ms > 6000ms; max latency 14547ms > 8000ms; success rate 0.769 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `thinkingmachines/inkling`: max latency 11690ms > 8000ms; success rate 0.590 < 0.8; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-flash-0731`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `moonshotai/kimi-k2.6`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.3-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
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
