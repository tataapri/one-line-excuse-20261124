import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The task took 0.4 seconds; I spent the rest of the deadline deciding whether to tell you, and chose this message as the deliverable.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
