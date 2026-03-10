import { Hono } from "hono";

type Bindings = {
  ASSETS: { fetch: typeof fetch };
};

const app = new Hono<{ Bindings: Bindings }>();

const PREFIX = "/better-sidebar";

app.get("/api/health", (c) => c.json({ status: "ok" }));

// Handle all requests under /better-sidebar/*
app.all(`${PREFIX}/*`, async (c) => {
  // Strip the prefix to get the real asset path
  const url = new URL(c.req.url);
  url.pathname = url.pathname.slice(PREFIX.length) || "/";
  return c.env.ASSETS.fetch(new Request(url.toString(), c.req.raw));
});

// Exact /better-sidebar (no trailing slash) -> redirect
app.get(PREFIX, (c) => c.redirect(`${PREFIX}/`, 301));

// Root redirect to prefixed path
app.get("/", (c) => c.redirect(`${PREFIX}/`, 302));

export default app;
