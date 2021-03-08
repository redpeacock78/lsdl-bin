import * as path from "path";

type fromRoot = (...parts: string[]) => string;

const from_root: fromRoot = (...parts: string[]): string =>
  path.join(path.resolve(""), ...parts);

module.exports = from_root(
  "node_module",
  "line-sticker-downloder",
  "bin",
  "main.js"
);
