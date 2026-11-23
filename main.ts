import { mkdirSync, writeFileSync } from "node:fs";

const entry = "One star. Sleep takes a third of my life, ends the moment the dream gets good, and the subscription renews nightly.";
if (entry.length < 1 || entry.length > 160) throw new Error("bad length");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
