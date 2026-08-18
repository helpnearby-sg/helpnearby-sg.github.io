import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);

test("embeds the two public Google intake forms", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /1FAIpQLSfgNYkt0JN6puykb5vSNCORkcOaYT9ZTpZaZV_o0u2e3yZl_g\/viewform\?embedded=true/);
  assert.match(page, /1FAIpQLScA9XsiBg8_PA2AdQR7tJfPcbIEtU4WMjj0QtSxKxkMooFLbw\/viewform\?embedded=true/);
  assert.match(page, /title="Request Help Nearby form"/);
  assert.match(page, /title="Volunteer with Help Nearby form"/);
});

test("does not expose private service credentials", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.doesNotMatch(page, /FEISHU_APP_ID|FEISHU_APP_SECRET|tenant_access_token/i);
  assert.doesNotMatch(page, /spreadsheetId|GOOGLE_API_KEY|private_key/i);
});

test("uses four spare-time windows and broad everyday-help positioning", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /const durations = \[10, 20, 30, 60\]/);
  assert.match(page, /spare time/i);
  assert.match(page, /Parcel or grocery collection/i);
  assert.match(page, /voice or video call/i);
  assert.doesNotMatch(page, /[㐀-鿿]/u);
  assert.doesNotMatch(page, /focuses only on straightforward digital assistance/i);
  assert.doesNotMatch(page, /120 minutes|120m/);
});
