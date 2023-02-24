import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default defineConfig([
  {
    input: "src/common/index.ts",
    output: [
      {
        dir: "dist/common",
        format: "cjs",
        entryFileNames: "[name].cjs",
      },
      {
        dir: "dist/common",
        format: "esm",
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [
      typescript({
        include: "src/common/**/*",
        outDir: "dist/common",
        declarationDir: "dist/common/@types",
      }),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "src/browser/index.ts",
    output: {
      dir: "dist/browser",
      format: "esm",
    },
    plugins: [
      typescript({
        include: "src/browser/**/*",
        outDir: "dist/browser",
        declarationDir: "dist/browser/@types",
      }),
      terser(),
    ],
  },
]);
