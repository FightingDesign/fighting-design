import { nodeResolve } from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue' // 处理 vue 文件
import { readdirSync } from 'fs' // 写文件
import { resolve } from 'path'

const input = resolve(__dirname, '../packages/fighting-components') // 入口目录
const output = resolve(__dirname, '../dist/lib') // 输入目录
const config = readdirSync(input)
  .filter(name => !['theme-default', 'index.ts', 'types.ts'].includes(name))
  .map(name => (
    console.log(name),
    {
      input: `${input}/${name}/index.ts`,
      external: ['vue'],
      plugins: [
        nodeResolve(),
        vuePlugin(),
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false
            },
            exclude: ['node_modules', 'examples', 'mobile', 'tests']
          },
          abortOnError: false,
          clean: true
        })
      ],
      output: {
        name: 'index',
        file: `${output}/${name}/index.ts`,
        format: 'es'
      }
    }))
config.push({
  input: `${input}/index.ts`,
  external: ['vue'],
  plugins: [
    nodeResolve(),
    vuePlugin(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false
        },
        exclude: ['node_modules', 'examples', 'mobile', 'tests']
      },
      abortOnError: false,
      clean: true
    })
  ],
  output: {
    name: 'index',
    file: `${output}/index.js`,
    format: 'es'
  }
})
// const config = {
//   input: `${input}/index.ts`,
//   external: ['vue'],
//   plugins: [
//     nodeResolve(),
//     typescript({
//       tsconfigOverride: {
//         compilerOptions: {
//           declaration: false
//         },
//         exclude: ['node_modules', 'examples', 'mobile', 'tests']
//       },
//       abortOnError: false,
//       clean: true
//     }),
//     vuePlugin()
//   ],
//   output: {
//     name: 'index',
//     file: `${output}/index.js`,
//     format: 'es'
//   }
// }

export default config
