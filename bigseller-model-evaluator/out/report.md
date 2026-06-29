# BigSeller NVIDIA Stable Model Evaluation Report

- Updated: 2026-06-29T08:47:00.341Z
- Source runs: 3
- Winner: `mistralai/ministral-14b-instruct-2512`
- Fallbacks: `meta/llama-4-maverick-17b-128e-instruct`, `mistralai/mistral-small-4-119b-2603`, `google/gemma-3n-e2b-it`, `meta/llama-3.2-1b-instruct`
- Runtime selection policy: runtime-eligible-quality-warning
- Runtime eligible models: 21
- Warning: no runtime-eligible model reached the hard-pass quality threshold; selected models are fast enough but need manual title-quality review before production use.

## Stable Ranking

| # | Model | Runtime | Final | Quality | Hard Pass | Success | Runtime Stable | Avg Latency | Max Latency | Runs |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `mistralai/ministral-14b-instruct-2512` | yes | 62 | 67 | 0.0% | 100.0% | 100.0% | 1398ms | 6665ms | 3/3 |
| 2 | `meta/llama-4-maverick-17b-128e-instruct` | yes | 56 | 58 | 0.0% | 100.0% | 100.0% | 604ms | 1282ms | 3/3 |
| 3 | `mistralai/mistral-small-4-119b-2603` | yes | 53 | 54 | 0.0% | 100.0% | 100.0% | 487ms | 912ms | 3/3 |
| 4 | `google/gemma-3n-e2b-it` | yes | 53 | 54 | 0.0% | 100.0% | 100.0% | 1586ms | 2015ms | 3/3 |
| 5 | `meta/llama-3.2-1b-instruct` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 283ms | 445ms | 3/3 |
| 6 | `meta/llama-3.1-8b-instruct` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 431ms | 1243ms | 3/3 |
| 7 | `mistralai/mistral-nemotron` | yes | 51 | 52 | 0.0% | 100.0% | 100.0% | 927ms | 1221ms | 3/3 |
| 8 | `stockmark/stockmark-2-100b-instruct` | yes | 51 | 51 | 0.0% | 100.0% | 100.0% | 1628ms | 2227ms | 3/3 |
| 9 | `meta/llama-3.2-3b-instruct` | yes | 48 | 47 | 0.0% | 100.0% | 100.0% | 431ms | 741ms | 3/3 |
| 10 | `upstage/solar-10.7b-instruct` | yes | 46 | 44 | 0.0% | 100.0% | 100.0% | 1052ms | 3490ms | 3/3 |
| 11 | `nvidia/nemotron-mini-4b-instruct` | yes | 39 | 35 | 0.0% | 100.0% | 100.0% | 443ms | 564ms | 3/3 |
| 12 | `nvidia/nemotron-3-nano-30b-a3b` | yes | 29 | 21 | 0.0% | 100.0% | 100.0% | 1148ms | 4010ms | 3/3 |
| 13 | `sarvamai/sarvam-m` | yes | 29 | 21 | 0.0% | 100.0% | 100.0% | 3928ms | 4189ms | 3/3 |
| 14 | `nvidia/ising-calibration-1-35b-a3b` | yes | 28 | 19 | 0.0% | 100.0% | 100.0% | 975ms | 1130ms | 3/3 |
| 15 | `nvidia/riva-translate-4b-instruct-v1.1` | yes | 20 | 9 | 0.0% | 100.0% | 100.0% | 1233ms | 1886ms | 3/3 |
| 16 | `microsoft/phi-4-mini-instruct` | yes | 18 | 5 | 0.0% | 100.0% | 100.0% | 2847ms | 5448ms | 3/3 |
| 17 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` | yes | 15 | 1 | 0.0% | 100.0% | 100.0% | 2125ms | 7310ms | 3/3 |
| 18 | `nvidia/gliner-pii` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 258ms | 280ms | 3/3 |
| 19 | `openai/gpt-oss-120b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1305ms | 2754ms | 3/3 |
| 20 | `openai/gpt-oss-20b` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 1648ms | 6375ms | 3/3 |
| 21 | `nvidia/nvidia-nemotron-nano-9b-v2` | yes | 14 | 0 | 0.0% | 100.0% | 100.0% | 2715ms | 3722ms | 3/3 |
| 22 | `mistralai/mistral-large-3-675b-instruct-2512` | no | 60 | 73 | 0.0% | 71.8% | 33.3% | 951ms | 8540ms | 3/3 |
| 23 | `abacusai/dracarys-llama-3.1-70b-instruct` | no | 52 | 56 | 0.0% | 97.4% | 66.7% | 2744ms | 9729ms | 3/3 |
| 24 | `mistralai/mistral-medium-3.5-128b` | no | 52 | 60 | 0.0% | 79.5% | 33.3% | 1079ms | 4174ms | 3/3 |
| 25 | `qwen/qwen3-next-80b-a3b-instruct` | no | 52 | 62 | 0.0% | 53.8% | 33.3% | 3901ms | 13691ms | 3/3 |
| 26 | `nvidia/llama-3.3-nemotron-super-49b-v1` | no | 50 | 54 | 0.0% | 97.4% | 66.7% | 1783ms | 10178ms | 3/3 |
| 27 | `z-ai/glm-5.1` | no | 50 | 58 | 0.0% | 79.5% | 33.3% | 1319ms | 5360ms | 3/3 |
| 28 | `moonshotai/kimi-k2.6` | no | 48 | 54 | 0.0% | 97.4% | 33.3% | 2140ms | 9494ms | 3/3 |
| 29 | `deepseek-ai/deepseek-v4-flash` | no | 48 | 61 | 0.0% | 51.3% | 0.0% | 3724ms | 12748ms | 3/3 |
| 30 | `minimaxai/minimax-m3` | no | 48 | 61 | 0.0% | 33.3% | 0.0% | 6730ms | 14089ms | 3/3 |
| 31 | `meta/llama-3.1-70b-instruct` | no | 46 | 55 | 0.0% | 92.3% | 0.0% | 3423ms | 14666ms | 3/3 |
| 32 | `qwen/qwen3.5-122b-a10b` | no | 44 | 50 | 0.0% | 76.9% | 33.3% | 861ms | 2892ms | 3/3 |
| 33 | `meta/llama-3.3-70b-instruct` | no | 43 | 54 | 0.0% | 48.7% | 0.0% | 3812ms | 9951ms | 3/3 |
| 34 | `microsoft/phi-4-multimodal-instruct` | no | 35 | 45 | 0.0% | 10.3% | 0.0% | 899ms | 1575ms | 3/3 |
| 35 | `mistralai/mixtral-8x7b-instruct-v0.1` | no | 30 | 32 | 0.0% | 100.0% | 0.0% | 6241ms | 14308ms | 3/3 |
| 36 | `nvidia/nemotron-3-super-120b-a12b` | no | 18 | 15 | 0.0% | 100.0% | 0.0% | 3229ms | 12005ms | 3/3 |
| 37 | `nvidia/nemotron-3-ultra-550b-a55b` | no | 17 | 17 | 0.0% | 56.4% | 0.0% | 6239ms | 12681ms | 3/3 |
| 38 | `stepfun-ai/step-3.5-flash` | no | 9 | 0 | 0.0% | 100.0% | 33.3% | 2374ms | 10515ms | 3/3 |
| 39 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` | no | 9 | 0 | 0.0% | 94.9% | 33.3% | 6061ms | 12452ms | 3/3 |
| 40 | `stepfun-ai/step-3.7-flash` | no | 6 | 0 | 0.0% | 87.2% | 0.0% | 4627ms | 10915ms | 3/3 |
| 41 | `qwen/qwen3.5-397b-a17b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 42 | `deepseek-ai/deepseek-v4-pro` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 43 | `minimaxai/minimax-m2.7` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 44 | `nvidia/llama-3.1-nemotron-70b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 45 | `nvidia/llama-3.1-nemotron-51b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 46 | `nvidia/llama3-chatqa-1.5-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 47 | `nvidia/nemotron-4-340b-instruct` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 48 | `meta/llama2-70b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 49 | `nvidia/llama-3.1-nemotron-nano-8b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 50 | `nvidia/llama-3.1-nemotron-ultra-253b-v1` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
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
| 61 | `google/gemma-2-2b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 62 | `google/gemma-2b` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 63 | `google/gemma-3-12b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
| 64 | `google/gemma-3-4b-it` | no | 2 | 0 | 0.0% | 0.0% | 0.0% | -ms | -ms | 3/3 |
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
- `mistralai/mistral-large-3-675b-instruct-2512`: max latency 8540ms > 8000ms; success rate 0.718 < 0.8; runtime eligible rate 0.333 < 0.5
- `abacusai/dracarys-llama-3.1-70b-instruct`: max latency 9729ms > 8000ms
- `mistralai/mistral-medium-3.5-128b`: success rate 0.795 < 0.8; runtime eligible rate 0.333 < 0.5
- `qwen/qwen3-next-80b-a3b-instruct`: max latency 13691ms > 8000ms; success rate 0.538 < 0.8; timeout failure rate 0.333 > 0.1; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1`: max latency 10178ms > 8000ms
- `z-ai/glm-5.1`: success rate 0.795 < 0.8; runtime eligible rate 0.333 < 0.5
- `moonshotai/kimi-k2.6`: max latency 9494ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `deepseek-ai/deepseek-v4-flash`: max latency 12748ms > 8000ms; success rate 0.513 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `minimaxai/minimax-m3`: avg latency 6730ms > 6000ms; max latency 14089ms > 8000ms; success rate 0.333 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.000 < 0.5
- `meta/llama-3.1-70b-instruct`: max latency 14666ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3.5-122b-a10b`: success rate 0.769 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.333 < 0.5
- `meta/llama-3.3-70b-instruct`: max latency 9951ms > 8000ms; success rate 0.487 < 0.8; timeout failure rate 0.256 > 0.1; runtime eligible rate 0.000 < 0.5
- `microsoft/phi-4-multimodal-instruct`: success rate 0.103 < 0.8; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `mistralai/mixtral-8x7b-instruct-v0.1`: avg latency 6241ms > 6000ms; max latency 14308ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-super-120b-a12b`: max latency 12005ms > 8000ms; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-3-ultra-550b-a55b`: avg latency 6239ms > 6000ms; max latency 12681ms > 8000ms; success rate 0.564 < 0.8; timeout failure rate 0.359 > 0.1; runtime eligible rate 0.000 < 0.5
- `stepfun-ai/step-3.5-flash`: max latency 10515ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `nvidia/llama-3.3-nemotron-super-49b-v1.5`: avg latency 6061ms > 6000ms; max latency 12452ms > 8000ms; runtime eligible rate 0.333 < 0.5
- `stepfun-ai/step-3.7-flash`: max latency 10915ms > 8000ms; timeout failure rate 0.128 > 0.1; runtime eligible rate 0.000 < 0.5
- `qwen/qwen3.5-397b-a17b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `deepseek-ai/deepseek-v4-pro`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `minimaxai/minimax-m2.7`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-70b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-51b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama3-chatqa-1.5-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/nemotron-4-340b-instruct`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `meta/llama2-70b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-nano-8b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; timeout failure rate 0.231 > 0.1; runtime eligible rate 0.000 < 0.5
- `nvidia/llama-3.1-nemotron-ultra-253b-v1`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
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
- `google/gemma-2-2b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-2b`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-12b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
- `google/gemma-3-4b-it`: avg latency 0ms > 6000ms; max latency 0ms > 8000ms; success rate 0.000 < 0.8; runtime eligible rate 0.000 < 0.5
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
