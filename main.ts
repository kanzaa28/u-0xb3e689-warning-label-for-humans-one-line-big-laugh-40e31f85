// Warning Label for Humans: One Line, Big Laugh
// Writes the winning one-line warning label to /output/entry.txt.
// The line is a fixed string: the entry is the text, not a generator.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Do not ask this human how it is doing unless you have forty-five minutes, a chair, and a genuine interest in its lower back.";

// The sealed gate refuses entry.txt outside 1..160 characters, so fail
// loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`label is ${LINE.length} chars, outside the 1..160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
