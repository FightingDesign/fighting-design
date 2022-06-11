// import typescript from 'rollup-plugin-typescript2'
import esbuild from 'rollup-plugin-esbuild'
// import commonjs from 'rollup-plugin-commonjs'
// import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
// import nodeResolve from 'rollup-plugin-node-resolve'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import { resolve } from 'path'
// import filesize from 'rollup-plugin-filesize'
// import buble from 'rollup-plugin-buble'
// import replace from 'rollup-plugin-replace'
// rollup-plugin-filesize: 显示打包出来的文件大小

// 入口
// const input = 'src/index.ts'
const input = resolve(__dirname, 'packages/fighting-components/index.ts')
// 插件
const plugins = [ // 顺序无严格要求，目前观察buble需要放在vue下面
  // json(),
  nodeResolve(),
  vue(),
  esbuild(),
  // terser(),
]

// 外链 - 外部依赖的名称，放在该处的npm包不会参与打包
const external = ['vue']

export default [
  // {
  //   input,
  //   // 出口
  //   output: {
  //     file: 'dist/index.umd.js',
  //     format: 'umd', // umd格式为amd, cjs, iife的结合
  //     name: 'rollup-vue-ts', // 此处修改为希望包挂在window上的名称
  //     sourcemap: false
  //   },
  //   plugins,
  //   external
  // },
  {
    input,
    // 出口
    output: {
      file: 'dist/index.esm.js',
      format: 'es', // es格式，推荐同时输出一份es格式的, 提供给模块化打包工具
      sourcemap: false
    },
    plugins,
    external
  }
]