// https://github.com/Swatinem/rollup-plugin-dts
// 打包类型文件

import dts from "rollup-plugin-dts";
import { resolve } from 'path'
import { readdirSync } from 'fs'
// import vue from '@vitejs/plugin-vue'
import vue from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript'
// const input = resolve(__dirname, '../packages/fighting-type/index.d.ts')
const input = resolve(__dirname, '../packages/fighting-components/index.ts')

const config = [
  // …
  {
    input,
    plugins: [
      dts(),
      vue(),
      typescript()
    ],
    output: [{ file: "dist/fighting-type/index.d.ts", format: "es" }],
  },
];

export default config;