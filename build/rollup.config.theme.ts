import { nodeResolve } from '@rollup/plugin-node-resolve'
// import vuePlugin from 'rollup-plugin-vue'
// import { terser } from 'rollup-plugin-terser'
// import { readdirSync } from 'fs'
import esbuild from 'rollup-plugin-esbuild'

import { resolve } from 'path'
import collectSass from 'rollup-plugin-collect-sass'
import postcss from 'rollup-plugin-postcss'
import sass from 'node-sass' // https://github.com/sass/node-sass

const input = resolve(__dirname, '../packages/fighting-theme/index.scss')
const output = resolve(__dirname, '../dist/theme')

const config = {
  input,
  plugins: [
    nodeResolve(),
    collectSass(),
    esbuild(),
    // postcss({
    //   extract: true,
    //   // Or with custom file name
    //   // extract: resolve('dist/index.css')
    //   // fileName: 'index',
    //   // extract: 'dist/index.css'
    // })
    postcss({
      extract: true,
      extensions: ['.css', '.scss'] // 识别css和scss文件
      // 在打包过程中需要配合 node-sass 使用
      // process(context, payload) {
      //   return new Promise((resolve, reject) => {
      //     sass.render({
      //       file: context
      //     }, function (err, result) {
      //       if (!err) {
      //         resolve(result)
      //       } else {
      //         reject(err)
      //       }
      //     })
      //   })
      // }
    })
  ],
  output: {
    dir: output,
    format: 'es'
  }
}

export default config
