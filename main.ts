// Break Production, Own It — make.fun entry (program/v1, node22).
// Writes one brutally honest one-line postmortem to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I ran DROP TABLE users on production because staging 'felt slow'. All 4.2M accounts are gone. The backup is from 2019. I did this. I'm sorry.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
