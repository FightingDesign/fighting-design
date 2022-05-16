import { nodeResolve } from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue' // 处理 vue 文件
import { readdirSync } from 'fs' // 写文件
import { resolve } from 'path'

const input = resolve(__dirname, '../packages/fighting-components') // 入口目录
const output = resolve(__dirname, '../dist/packages') // 输入目录

const config = readdirSync(input)
  .filter(name => !['env.d.ts', 'package.json', 'index.ts'].includes(name))
  .map(name => (
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
    }
  ))

export default config
