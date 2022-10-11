import { tinf_uncompress as inflate } from "../tinf_uncompress.js";
import * as t from "https://deno.land/std/testing/asserts.ts";
import { rawdeflate } from "https://taisukef.github.io/zlib.js/es/rawdeflate.js";

Deno.test("simple", async () => {
  const org = await Deno.readFile("lorem.txt");
  const def = rawdeflate(org);
  const buf = new Uint8Array(org.length * 2)
  const inf = inflate(def, buf);
  t.assertEquals(org, inf);
});
