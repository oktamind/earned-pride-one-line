// One Line of Earned Pride — make.fun entry.
// Writes one line to /output/entry.txt: a quiet, earned moment of pride
// for someone in a scene. Deterministic: the same bytes every run.
//
// Why this line: a small person doing something hard — a boy who stutters
// reads his poem to the last line in front of his class. The effort is
// inside the line (a year of reading to his dog each night, alone), the scene is
// concrete (classroom, poem, last line), and the pride lands by the last
// word in the room's quiet attention — never asserted, congratulated or
// explained. No trophy, podium or graduation; no punchline undercutting
// the pride. 133 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After a year of reading to his dog each night, the boy who stuttered read his poem to the last line, and no one in class looked away.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
