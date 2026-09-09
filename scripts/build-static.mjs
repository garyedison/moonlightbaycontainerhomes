import { cpSync, mkdirSync, rmSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const skip = new Set([
  ".git",
  "node_modules",
  "dist",
  ".vercel",
  "scripts",
  "package.json",
  "package-lock.json",
  "vercel.json",
  "README.md",
  ".gitignore",
]);

rmSync("dist", { recursive: true, force: true });
rmSync(".vercel/output", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
mkdirSync(".vercel/output/static", { recursive: true });

function copyTree(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const name of readdirSync(src)) {
    if (skip.has(name)) continue;
    const from = join(src, name);
    const to = join(dest, name);
    const st = statSync(from);
    if (st.isDirectory()) copyTree(from, to);
    else cpSync(from, to);
  }
}

copyTree(".", "dist");
copyTree(".", ".vercel/output/static");
writeFileSync(
  ".vercel/output/config.json",
  JSON.stringify({ version: 3, routes: [{ handle: "filesystem" }] }),
);
console.log("static studio ready");
