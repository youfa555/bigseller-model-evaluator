// Standalone Tampermonkey helper example.
// This file is not installed automatically and does not modify the current
// BigSeller automation script. Copy the relevant parts into that script only
// after the ranking pipeline has produced a real runtime-model-config.json URL.
//
// Required Tampermonkey metadata in the BigSeller script:
//   // @grant        GM_xmlhttpRequest
//   // @grant        GM_setValue
//   // @grant        GM_getValue
//   // @connect      raw.githubusercontent.com
//   // @connect      <your-worker-domain>

const DEFAULT_AI_BASE_URL = "https://integrate.api.nvidia.com/v1/";
const DEFAULT_AI_MODEL_LIST = [
  "qwen/qwen3.5-122b-a10b",
  "deepseek-ai/deepseek-v4-pro",
  "qwen/qwen3-next-80b-a3b-instruct"
];

const MODEL_CONFIG_URL = "https://example.com/runtime-model-config.json";
const MODEL_CONFIG_CACHE_KEY = "BIGSELLER_RUNTIME_MODEL_CONFIG_V1";
const MODEL_CONFIG_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

async function loadRuntimeModelConfig() {
  const cached = await readCachedRuntimeModelConfig();
  try {
    const remote = await requestJson(MODEL_CONFIG_URL, 12000);
    const normalized = normalizeRuntimeModelConfig(remote);
    await GM_setValue(MODEL_CONFIG_CACHE_KEY, JSON.stringify({
      savedAt: Date.now(),
      config: normalized
    }));
    return normalized;
  } catch (error) {
    if (cached) return cached;
    console.warn("[BigSeller model config] using built-in defaults:", error);
    return {
      baseUrl: DEFAULT_AI_BASE_URL,
      models: DEFAULT_AI_MODEL_LIST,
      winner: DEFAULT_AI_MODEL_LIST[0],
      fallbacks: DEFAULT_AI_MODEL_LIST.slice(1),
      source: "builtin"
    };
  }
}

async function readCachedRuntimeModelConfig() {
  try {
    const raw = await GM_getValue(MODEL_CONFIG_CACHE_KEY, "");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || Date.now() - Number(parsed.savedAt || 0) > MODEL_CONFIG_MAX_AGE_MS) return null;
    return normalizeRuntimeModelConfig(parsed.config);
  } catch {
    return null;
  }
}

function normalizeRuntimeModelConfig(input) {
  if (!input || input.schemaVersion !== 1 || input.provider !== "nvidia") {
    throw new Error("invalid runtime model config schema");
  }
  if (!/^https?:\/\//.test(String(input.baseUrl || ""))) {
    throw new Error("invalid runtime model baseUrl");
  }
  if (!input.winner || typeof input.winner !== "string") {
    throw new Error("runtime model winner is missing");
  }
  const models = Array.isArray(input.models) && input.models.length
    ? input.models
    : [input.winner, ...(Array.isArray(input.fallbacks) ? input.fallbacks : [])];
  const uniqueModels = [...new Set(models.filter(x => typeof x === "string" && x.trim()).map(x => x.trim()))];
  if (!uniqueModels.length || uniqueModels[0] !== input.winner) {
    throw new Error("runtime model order is invalid");
  }
  return {
    baseUrl: String(input.baseUrl).replace(/\/+$/, "") + "/",
    models: uniqueModels,
    winner: input.winner,
    fallbacks: uniqueModels.slice(1),
    updatedAt: input.updatedAt || "",
    source: "remote"
  };
}

function requestJson(url, timeoutMs) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: "GET",
      url,
      timeout: timeoutMs,
      onload: res => {
        if (res.status < 200 || res.status >= 300) {
          reject(new Error(`HTTP ${res.status}`));
          return;
        }
        try {
          resolve(JSON.parse(res.responseText || "{}"));
        } catch (error) {
          reject(error);
        }
      },
      onerror: reject,
      ontimeout: () => reject(new Error("model config timeout"))
    });
  });
}

// Example integration:
// const runtime = await loadRuntimeModelConfig();
// CONFIG.AI_BASE_URL = runtime.baseUrl;
// CONFIG.AI_MODEL_LIST = runtime.models;
// CONFIG.AI_MODEL_ID = runtime.winner;

