// 组件 JS 打包

import nodeResolve from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue' // 处理vue文件
import { resolve } from 'path'

const input = resolve(__dirname, '../packages') // 入口文件
const output = resolve(__dirname, '../lib') // 输出文件

const config = [
  {
    input: `${input}/index.ts`,
    output: {
      format: 'es',
      file: `${output}/index.esm.js`
    },
    plugins: [
      terser(),
      nodeResolve(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false
      }),
      typescript({
        useTsconfigDeclarationDir: false,
        tsconfigOverride: {
          include: ['packages/**/*'],
          exclude: ['node_modules', 'examples', 'tests']
        },
        abortOnError: false
      })
    ],
    external: ['vue']
  }
]

export default config
