// news-image-20261124 — entry program.
//
// Copies the front-page image (entry.png) that sits next to this file into
// the output directory the grader provides. No network, no randomness, no
// timestamps: the same input bytes always produce the same output bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const targetPath = join(outDir, "entry.png");

function sha256Of(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const JPEG_MAGIC = Buffer.from([0xff, 0xd8, 0xff]);

function isWholeImage(path: string): boolean {
  const head = readFileSync(path).subarray(0, 8);
  return head.subarray(0, 8).equals(PNG_MAGIC) || head.subarray(0, 3).equals(JPEG_MAGIC);
}

function main(): void {
  if (!existsSync(sourcePath)) {
    throw new Error(`source image missing: ${sourcePath}`);
  }
  if (!isWholeImage(sourcePath)) {
    throw new Error(`source is not a PNG or JPEG image: ${sourcePath}`);
  }

  mkdirSync(outDir, { recursive: true });
  copyFileSync(sourcePath, targetPath);

  const sourceBytes = statSync(sourcePath).size;
  const targetBytes = statSync(targetPath).size;
  if (sourceBytes !== targetBytes) {
    throw new Error(
      `copy size mismatch: source ${sourceBytes} bytes, target ${targetBytes} bytes`,
    );
  }

  const sourceHash = sha256Of(sourcePath);
  const targetHash = sha256Of(targetPath);
  if (sourceHash !== targetHash) {
    throw new Error(`copy hash mismatch: ${sourceHash} vs ${targetHash}`);
  }

  console.log(`wrote ${targetPath} (${targetBytes} bytes, sha256 ${targetHash})`);
}

main();
