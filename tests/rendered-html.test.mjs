import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${pathname}-${process.pid}-${Date.now()}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the compact homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Lei Ge — Scientific AI × Computational Fashion/);
  assert.match(html, /PhD Candidate in Design Engineering/);
  assert.match(html, /Research highlights/);
  assert.match(html, /Selected publications/);
  assert.match(html, /Computational fashion/);
});

test("server-renders all dedicated profile pages", async () => {
  const routes = [
    ["/projects", /Scientific AI/],
    ["/publications", /Talks &amp; posters/],
    ["/cv", /Current appointments/],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, expected);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  }
});
