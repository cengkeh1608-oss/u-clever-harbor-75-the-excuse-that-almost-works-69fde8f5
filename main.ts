import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// Why D20 beat runner-up D11 (24/25): D11 says "I have to comb him out
// before nine" — a plan. D20 says "I'm combing him out, he's scratching
// like mad" — it is happening right now, present tense, with a vivid
// detail the manager can picture. The laugh comes from that detail,
// not from a joke bolted on the end.
const ENTRY =
  "School rang, my kid's got nits again, I'm combing him out, he's scratching like mad.";

const outDir = process.argv[2] ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), ENTRY, "utf8");
