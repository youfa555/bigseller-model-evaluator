# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-07-06T08:39:24.711Z
- Source runs: 3
- Winner: `mistralai/mistral-small-4-119b-2603`
- Fallbacks: `meta/llama-3.1-8b-instruct`, `mistralai/mistral-nemotron`, `stockmark/stockmark-2-100b-instruct`, `meta/llama-3.2-3b-instruct`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 15
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `mistralai/mistral-small-4-119b-2603` | yes | 53 | 54 | 0.0% | 100.0% | 100.0% | 503ms | 751ms | 3/3 |
| 2 | `meta/llama-3.1-8b-instruct` | yes | 51 | 52 | 0.0% | 100.0% | 100.0% | 370ms | 994ms | 3/3 |
| 3 | `mistralai/mistral-nemotron` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 842ms | 1345ms | 3/3 |
| 4 | `stockmark/stockmark-2-100b-instruct` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 1598ms | 2229ms | 3/3 |
| 5 | `meta/llama-3.2-3b-instruct` | yes | 46 | 45 | 0.0% | 100.0% | 100.0% | 544ms | 666ms | 3/3 |
| 6 | `upstage/solar-10.7b-instruct` | yes | 45 | 43 | 0.0% | 100.0% | 100.0% | 1159ms | 3665ms | 3/3 |
| 7 | `nvidia/nemotron-mini-4b-instruct` | yes | 40 | 36 | 0.0% | 100.0% | 100.0% | 615ms | 1770ms | 3/3 |
| 8 | `nvidia/nemotron-3-nano-30b-a3b` | yes | 31 | 24 | 0.0% | 100.0% | 100.0% | 1393ms | 6266ms | 3/3 |
| 9 | `nvidia/ising-calibration-1-35b-a3b` | yes | 26 | 17 | 0.0% | 100.0% | 100.0% | 1101ms | 1760ms | 3/3 |
| 10 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | yes | 26 | 17 | 0.0% | 100.0% | 100.0% | 1383ms | 4301ms | 3/3 |
| 11 | `nvidia/riva-translate-4b-instruct-v1.1` | yes | 20 | 9 | 0.0% | 100.0% | 100.0% | 1229ms | 1689ms | 3/3 |
| 12 | `nvidia/gliner-pii` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 309ms | 352ms | 3/3 |
| 13 | `openai/gpt-oss-20b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1122ms | 2730ms | 3/3 |
| 14 | `openai/gpt-oss-120b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1258ms | 2593ms | 3/3 |
| 15 | `nvidia/nvidia-nemotron-nano-9b-v2` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2571ms | 4151ms | 3/3 |
| 16 | `mistralai/mistral-large-3-675b-instruct-2512` | no | 64 | 74 | 0.0% | 71.8% | 66.7% | 1177ms | 5765ms | 3/3 |
| 17 | `google/gemma-4-31b-it` | no | 59 | 75 | 0.0% | 59.0% | 0.0% | 3598ms | 13355ms | 3/3 |
| 18 | `qwen/qwen3-next-80b-a3b-instruct` | no | 54 | 61 | 0.0% | 66.7% | 66.7% | 1569ms | 3013ms | 3/3 |
| 19 | `minimaxai/minimax-m3` | no | 52 | 66 | 0.0% | 48.7% | 0.0% | 6388ms | 12204ms | 3/3 |
| 20 | `z-ai/glm-5.2` | no | 52 | 63 | 0.0% | 87.2% | 0.0% | 8672ms | 14428ms | 3/3 |
| 21 | `abacusai/dracarys-llama-3.1-70b-instruct` | no | 50 | 55 | 0.0% | 66.7% | 66.7% | 1693ms | 3892ms | 3/3 |
| 22 | `moonshotai/kimi-k2.6` | no | 49 | 58 | 0.0% | 100.0% | 0.0% | 2220ms | 14191ms | 3/3 |
| 23 | `meta/llama-4-maverick-17b-128e-instruct` | no | 49 | 59 | 0.0% | 89.7% | 0.0% | 6249ms | 14070ms | 3/3 |
| 24 | `nvidia/llama-3.3-nemotron-super-49b-v1` | no | 48 | 55 | 0.0% | 84.6% | 33.3% | 2749ms | 12513ms | 3/3 |
| 25 | `qwen/qwen3.5-397b-a17b` | no | 47 | 52 | 0.0% | 100.0% | 33.3% | 2715ms | 9605ms | 3/3 |
| 26 | `microsoft/phi-4-multimodal-instruct` | no | 46 | 50 | 0.0% | 66.7% | 66.7% | 587ms | 1517ms | 3/3 |
| 27 | `qwen/qwen3.5-122b-a10b` | no | 46 | 57 | 0.0% | 53.8% | 0.0% | 2341ms | 10099ms | 3/3 |
| 28 | `meta/llama-3.1-70b-instruct` | no | 46 | 55 | 0.0% | 82.1% | 0.0% | 2854ms | 14675ms | 3/3 |
| 29 | `mistralai/mixtral-8x7b-instruct-v0.1` | no | 33 | 30 | 0.0% | 100.0% | 66.7% | 3678ms | 12696ms | 3/3 |
| 30 | `deepseek-ai/deepseek-v4-flash` | no | 30 | 37 | 0.0% | 25.6% | 0.0% | 8036ms | 12310ms | 3/3 |
| 31 | `nvidia/llama-3.1-nemotron-nano-8b-v1` | no | 29 | 29 | 0.0% | 66.7% | 33.3% | 1499ms | 2778ms | 3/3 |
| 32 | `sarvamai/sarvam-m` | no | 25 | 31 | 0.0% | 15.4% | 0.0% | 3965ms | 4033ms | 3/3 |
| 33 | `nvidia/nemotron-3-super-120b-a12b` | no | 21 | 17 | 0.0% | 92.3% | 33.3% | 2967ms | 11184ms | 3/3 |
| 34 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 17 | 15 | 0.0% | 79.5% | 0.0% | 6090ms | 14391ms | 3/3 |
| 35 | `stepfun-ai/step-3.7-flash` | no | 12 | 0 | 0.0% | 100.0% | 66.7% | 2568ms | 14090ms | 3/3 |
| 36 | `stepfun-ai/step-3.5-flash` | no | 9 | 0 | 0.0% | 100.0% | 33.3% | 2152ms | 14185ms | 3/3 |
| 37 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | no | 9 | 0 | 0.0% | 89.7% | 33.3% | 5489ms | 10908ms | 3/3 |
| 38 | `minimaxai/minimax-m2.7` | no | 7 | 0 | 0.0% | 92.3% | 0.0% | 7214ms | 13902ms | 3/3 |
| 39 | `deepseek-ai/deepseek-v4-pro` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 40 | `nvidia/llama-3.1-nemotron-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 41 | `meta/llama-3.3-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 42 | `nvidia/llama-3.1-nemotron-51b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 43 | `nvidia/llama3-chatqa-1.5-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 44 | `nvidia/nemotron-4-340b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 45 | `meta/llama-3.2-1b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 46 | `meta/llama2-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 47 | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 48 | `nvidia/nemotron-4-340b-reward` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 49 | `nvidia/nemotron-nano-3-30b-a3b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 50 | `nvidia/nemotron-parse` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 51 | `mistralai/ministral-14b-instruct-2512` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 52 | `mistralai/mistral-7b-instruct-v0.3` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 53 | `mistralai/mistral-large-2-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 54 | `nv-mistralai/mistral-nemo-12b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 55 | `nvidia/mistral-nemo-minitron-8b-8k-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 56 | `mistralai/mistral-large` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 57 | `mistralai/mistral-medium-3.5-128b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 58 | `mistralai/mixtral-8x22b-v0.1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 59 | `microsoft/phi-3.5-moe-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 60 | `microsoft/phi-4-mini-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 61 | `google/gemma-2-2b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 62 | `google/gemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 63 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 64 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 65 | `google/gemma-3n-e2b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 66 | `google/gemma-3n-e4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
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
- `mistralai/mistral-large-3-675b-instruct-2512`: success rate 0.718 < 0.8
- `google/gemma-4-31b-it`: max latency 13355ms > 8000ms; success rate 0.590 < 0.8; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3-next-80b-a3b-instruct`: success rate 0.667 < 0.8
- `minimaxai/minimax-m3`: avg latency 6388ms > 6000ms; max latency 12204ms > 8000ms; success rate 0.487 < 0.8; timeout failure rate 0.103 > 0.1; runtime eligible rate 0.000 < 0.5
- `z-ai/glm-5.2`: avg latency 8672ms > 6000ms; max latency 14428ms > 8000ms; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `abacusai/dracarys-llama-3.1-70b-instruct`: success rate 0.667 < 0.8
- `moonshotai/kimi-k2.6`: max latency 14191ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `meta/llama-4-maverick-17b-128e-instruct`: avg latency 6249ms > 6000ms; max latency 14070ms > 8000ms; timeout failure rate 0.103 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1`: max latency 12513ms > 8000ms; timeout failure rate 0.154 > 0.1; runtime eligible rate 0.333 < 0.5
- `qwen/qwen3.5-397b-a17b`: max latency 9605ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `microsoft/phi-4-multimodal-instruct`: success rate 0.667 < 0.8
- `qwen/qwen3.5-122b-a10b`: max latency 10099ms > 8000ms; success rate 0.538 < 0.8; timeout failure rate 0.103 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.1-70b-instruct`: max latency 14675ms > 8000ms; timeout failure rate 0.179 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mixtral-8x7b-instruct-v0.1`: max latency 12696ms > 8000ms
- `deepseek-ai/deepseek-v4-flash`: avg latency 8036ms > 6000ms; max latency 12310ms > 8000ms; success rate 0.256 < 0.8; timeout failure rate 0.410 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-nano-8b-v1`: success rate 0.667 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.333 < 0.5
- `sarvamai/sarvam-m`: success rate 0.154 < 0.8; timeout failure rate 0.333 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-super-120b-a12b`: max latency 11184ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/nemotron-3-ultra-550b-a55b`: avg latency 6090ms > 6000ms; max latency 14391ms > 8000ms; success rate 0.795 < 0.8; timeout failure rate 0.205 > 0.1; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-3.7-flash`: max latency 14090ms > 8000ms
- `stepfun-ai/step-3.5-flash`: max latency 14185ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1.5`: max latency 10908ms > 8000ms; timeout failure rate 0.103 > 0.1; runtime eligible rate 0.333 < 0.5
- `minimaxai/minimax-m2.7`: avg latency 7214ms > 6000ms; max latency 13902ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-pro`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.3-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-51b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama3-chatqa-1.5-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.2-1b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama2-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-ultra-253b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
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
- `microsoft/phi-4-mini-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/gemma-2-2b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-2b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-12b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-4b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3n-e2b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `google/gemma-3n-e4b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
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
