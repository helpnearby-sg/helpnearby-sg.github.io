import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);

test("embeds the two public Feishu intake forms", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /https:\/\/my\.feishu\.cn\/share\/base\/form\/shrcnMpUpdNIthdfnMaWtvZNuOe/);
  assert.match(page, /https:\/\/my\.feishu\.cn\/share\/base\/form\/shrcnhczRrnwmBZZIFmvXvU4Myd/);
  assert.match(page, /title="Request Help Nearby form"/);
  assert.match(page, /title="Volunteer with Help Nearby form"/);
});

test("does not expose Feishu application credentials", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.doesNotMatch(page, /FEISHU_APP_ID|FEISHU_APP_SECRET|tenant_access_token/i);
});
