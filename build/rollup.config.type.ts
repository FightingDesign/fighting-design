// https://github.com/Swatinem/rollup-plugin-dts
// 打包类型文件

import dts from "rollup-plugin-dts";

const config = [
  // …
  {
    input: "./my-input/index.d.ts",
    output: [{ file: "dist/my-library.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;