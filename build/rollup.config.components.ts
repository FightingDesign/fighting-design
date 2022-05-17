import { nodeResolve } from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块 帮助寻找 node_modules里的包
import typescript from 'rollup-plugin-typescript2' // 带有编译器错误的 TypeScript 插件 https://github.com/ezolenko/rollup-plugin-typescript2
import vuePlugin from 'rollup-plugin-vue' // 处理 vue 文件 编译成js代码 https://www.npmjs.com/package/rollup-plugin-vue
// 官方文档：https://rollup-plugin-vue.vuejs.org/
import { readdirSync } from 'fs' // 读取目录的内容 读取文件 http://nodejs.cn/api-v16/fs.html#fs_fs_readdirsync_path_options
// fs扩展https://blog.csdn.net/weixin_43131046/article/details/122963741

import { resolve } from 'path' // 生成的路径被规范化 http://nodejs.cn/api-v16/path.html#path_path_resolve_paths
// import path from 'path'
// import fs from 'fs'
// 对代码进行压缩
// import { terser } from 'rollup-plugin-terser'
// https://www.npmjs.com/package/rollup-plugin-terser

// import babel from 'rollup-plugin-babel' // rollup 的 babel 插件，ES6转ES5
// import replace from 'rollup-plugin-replace' // 替换待打包文件里的一些变量，如process在浏览器端是不存在的，需要被替换
// import commonjs from 'rollup-plugin-commonjs' // 将非ES6语法的包转为ES6可用
// import uglify from 'rollup-plugin-uglify' // 压缩包

// 还需要新增的包
// https://www.npmjs.com/package/@rollup/plugin-json
// import postcss from 'rollup-plugin-postcss'
// import json from '@rollup/plugin-json'
// import { terser } from 'rollup-plugin-terser'
// import { nodeResolve } from '@rollup/plugin-node-resolve'


/**
 * 入口（input）
出口（output）
插件（plugins）
 */

// import css from 'rollup-plugin-css-only'
// rollup-plugin-terser
// 如果依赖模块中存在 es 模块，需要使用 @rollup/plugin-node-resolve 插件进行转换

// const input = resolve(__dirname, '../packages') // 入口目录
const input = resolve(__dirname, '../packages/fighting-components') // 入口目录
const output = resolve(__dirname, '../dist/packages') // 出口目录
const dist = resolve(__dirname, '../dist/dist') // 出口目录

const config = readdirSync(input)
  .filter(name => !['env.d.ts', 'package.json'].includes(name)) // 过滤不需要打包的文件
  // .filter(name => !['env.d.ts', 'package.json', 'index.ts'].includes(name)) // 过滤不需要打包的文件
  .map(name => (
    {
      input: name === 'index.ts' ? `${input}/index.ts` : `${input}/${name}/index.ts`, // 入口文件 要打包的文件源路径
      external: ['vue'], // 依赖模块 告诉 rollup 不要将此打包，而作为外部依赖
      // 插件列表 各种插件使用的配置
      plugins: [
        nodeResolve(), // https://github.com/rollup/plugins/tree/master/packages/node-resolve
        vuePlugin(), // https://www.npmjs.com/package/rollup-plugin-vue
        typescript({
          // 配置项参考：https://github.com/ezolenko/rollup-plugin-typescript2
          tsconfigOverride: {
            compilerOptions: {
              declaration: false
            },
            exclude: ['node_modules'] // 排除目录
          },
          abortOnError: false,
          clean: true // 清除每个构建上的缓存
        }),
      ],
      // 出口配置
      output: {
        name: name === 'index.ts' ? 'FightingDesign' : '', // 包的全局变量名称 //当 format 为 iife 和 umd 时必须提供，将作为全局变量挂在 window (浏览器环境)下：window.A=...
        file: name === 'index.ts' ? `${dist}/index.js` : `${output}/${name}/index.js`, // 打包产生的文件目录和文件名
        // 如果在 html 中使用就改为 `iife`
        format: name === 'index.ts' ? 'iife' : 'es', // 文件输出的格式 "amd", "cjs", "system", "es", "iife" or "umd".
        // sourcemap: true  //生成 bundle.map.js 文件，方便调试,
        // globals: { https://rollupjs.org/guide/en/#outputdir
        //   jquery: '$'
        // }
      }
    }
  ))

// config.push({
//   input: `${input}/index.ts`,
//   external: ['vue'],
//   plugins: [
//     nodeResolve(),
//     vuePlugin(),
//     typescript({
//       tsconfigOverride: {
//         compilerOptions: {
//           declaration: false
//         },
//         exclude: ['node_modules', 'examples', 'mobile', 'tests']
//       },
//       abortOnError: false,
//       clean: true
//     })
//   ],
//   output: {
//     name: 'FightingDesign',
//     file: '../dist/dist/index.js',
//     format: 'iife'
//   }
// })

export default config
