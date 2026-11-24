import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(scriptDir, process.env.MAKEFUN_OUTPUT_DIR || '/output');

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'entry.txt'), "ERROR: Bread not found. I have toasted nothing, and somehow that's still your fault.");

const content = readFileSync(resolve(outputDir, 'entry.txt'), 'utf8');
if (content.length !== 84 || /[\r\n]/.test(content) || content !== "ERROR: Bread not found. I have toasted nothing, and somehow that's still your fault.") {
  throw new Error(`Invalid entry content: ${JSON.stringify(content)}`);
}
