// https://github.com/Swatinem/rollup-plugin-dts
// 打包类型文件

import dts from "rollup-plugin-dts";
import { resolve } from 'path'

const input = resolve(__dirname, '../packages/fighting-type/index.d.ts')

const config = [
  // …
  {
    input,
    plugins: [dts()],
    output: [{ file: "dist/fighting-type/index.d.ts", format: "es" }],
  },
];

export default config;