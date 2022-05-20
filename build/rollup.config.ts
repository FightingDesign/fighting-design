import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { readdirSync } from 'fs'
import { resolve } from 'path'

const input = resolve(__dirname, '../packages/fighting-components')
const output = resolve(__dirname, '../dist/packages')
// const lib = resolve(__dirname, '../dist/lib')

const config = readdirSync(input)
  .filter(name => !['index.ts', 'package.json', 'README.md', 'CHANGELOG.zh-CN.md'].includes(name))
  .map(name => (
    {
      // input: name === 'index.ts' ? `${input}/index.ts` : `${input}/${name}/index.ts`,
      input: `${input}/${name}/index.ts`,
      external: ['vue'],
      plugins: [
        nodeResolve(),
        vuePlugin(),
        terser(),
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false
            },
            exclude: ['node_modules']
          },
          abortOnError: false,
          clean: true
        })
      ],
      output: {
        // name: name === 'index.ts' ? 'FightingDesign' : '',
        // file: name === 'index.ts' ? `${lib}/index.js` : `${output}/${name}/index.ts`,
        // format: name === 'index.ts' ? 'iife' : 'es',
        file: `${output}/${name}/index.ts`,
        format: 'es',
      }
    }
  ))

export default config
