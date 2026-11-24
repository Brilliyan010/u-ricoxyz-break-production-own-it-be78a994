// Break Production, Own It — make.fun entry (program/v1, node22).
// Writes one brutally honest one-line postmortem to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I ran DROP TABLE users on production because staging 'felt slow'. All 4.2M accounts are gone. The backup is from 2019. I did this. I'm sorry.";

// Gate guard: entry must stay 1 line, 1–200 chars, or fail loudly instead of shipping invalid output.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) throw new Error("entry must be 1 line, 1-200 chars");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
