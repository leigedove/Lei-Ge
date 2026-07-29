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
  assert.match(html, /Deep Matters: Foundations/);
  assert.match(html, /iCircular3 Marie Curie Doctoral Network/);
  assert.match(html, /News archive, 15 updates/);
  assert.match(html, /Large Language Models in Materials Science at L2M3/);
  assert.match(html, /AI4AM in Madrid/);
  assert.match(html, /AI for Materials Summer School in Karlsruhe/);
  assert.match(html, /Battery GPT\?/);
  assert.match(html, /projects\/llm-surrogate\.png/);
  assert.equal(
    (html.match(/class="paper-id"/g) || []).length,
    4,
    "Homepage should show four selected publications",
  );
  assert.ok(
    html.indexOf("News ⌨️") < html.indexOf("Research highlights"),
    "News should appear before research highlights",
  );
  assert.ok(
    html.indexOf("Research highlights") < html.indexOf("Selected publications"),
    "Research highlights should appear before selected publications",
  );
});

test("server-renders all dedicated profile pages", async () => {
  const routes = [
    ["/projects", /Scientific AI/],
    ["/publications", /Talks &amp; posters/],
    ["/cv", /Current appointments/],
    ["/life", /Life, outside the lab\./],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, expected);
    if (pathname === "/projects") {
      assert.match(html, /projects\/llm-surrogate\.png/);
      assert.match(html, /View paper/);
      assert.match(
        html,
        /researchgate\.net\/publication\/378395439_Review_of_digital_pattern-making_technology_in_garment_production/,
      );
    }
    if (pathname === "/cv") {
      assert.match(html, /Lee Family Scholarship/);
      assert.match(
        html,
        /researchgate\.net\/publication\/378395439_Review_of_digital_pattern-making_technology_in_garment_production/,
      );
    }
    if (pathname === "/life") {
      assert.match(html, /Dive Master/);
      assert.match(html, /Baking/);
      assert.match(html, /Making clothes/);
      assert.match(html, /Paint, ink, and nowhere to rush to\./);
      assert.match(html, /life\/calligraphy\.jpg/);
    }
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  }
});
