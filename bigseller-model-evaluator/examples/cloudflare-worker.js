// Cloudflare Worker example for serving BigSeller model evaluation results.
//
// Deploy idea:
// 1. GitHub Actions runs the stable evaluator on a schedule.
// 2. The workflow commits these files:
//    - out/visual-report.html
//    - out/runtime-model-config.json
//    - out/model-ranking.json
// 3. This Worker serves a human-facing dashboard at "/" and JSON endpoints
//    for the BigSeller script.
//
// Required environment variables:
//   VISUAL_REPORT_URL=https://raw.githubusercontent.com/<owner>/<repo>/<branch>/bigseller-model-evaluator/out/visual-report.html
//   RUNTIME_CONFIG_URL=https://raw.githubusercontent.com/<owner>/<repo>/<branch>/bigseller-model-evaluator/out/runtime-model-config.json
//   RANKING_URL=https://raw.githubusercontent.com/<owner>/<repo>/<branch>/bigseller-model-evaluator/out/model-ranking.json

const DEFAULT_CACHE_SECONDS = 300;

const ROUTES = {
  "/": {
    envKey: "VISUAL_REPORT_URL",
    contentType: "text/html; charset=utf-8"
  },
  "/visual-report.html": {
    envKey: "VISUAL_REPORT_URL",
    contentType: "text/html; charset=utf-8"
  },
  "/runtime-model-config.json": {
    envKey: "RUNTIME_CONFIG_URL",
    contentType: "application/json; charset=utf-8"
  },
  "/model-ranking.json": {
    envKey: "RANKING_URL",
    contentType: "application/json; charset=utf-8"
  }
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const route = ROUTES[url.pathname];
    if (!route) {
      return new Response("Not found", { status: 404 });
    }

    const upstreamUrl = env[route.envKey];
    if (!upstreamUrl) {
      return json({ error: `Missing ${route.envKey}` }, 500);
    }

    const cache = caches.default;
    const cacheSeconds = Number(env.CACHE_SECONDS || DEFAULT_CACHE_SECONDS);
    const cacheKey = new Request(new URL(url.pathname, request.url).toString(), request);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    const upstream = await fetch(upstreamUrl, {
      headers: { Accept: route.contentType },
      cf: { cacheTtl: cacheSeconds, cacheEverything: true }
    });

    if (!upstream.ok) {
      return json({ error: "Failed to fetch upstream result", status: upstream.status }, 502);
    }

    const body = await upstream.text();
    const response = new Response(body, {
      status: 200,
      headers: {
        "Content-Type": route.contentType,
        "Cache-Control": `public, max-age=${cacheSeconds}`
      }
    });
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
