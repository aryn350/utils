import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        entryFileNames: "[name].cjs",
      },
      {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [
      typescript({
        include: ["src/**/*"],
      }),
      commonjs(),
      terser(),
    ],
  },
]);
