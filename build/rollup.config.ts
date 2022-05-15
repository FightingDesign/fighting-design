import { nodeResolve } from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue' // 处理 vue 文件
import { readdirSync } from 'fs' // 写文件
import { resolve } from 'path'

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [nodeResolve(), typescript(), vuePlugin()]
}
