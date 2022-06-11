import { nodeResolve } from '@rollup/plugin-node-resolve'
import vuePlugin from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { readdirSync } from 'fs'
import { resolve } from 'path'
import esbuild from 'rollup-plugin-esbuild'
// import dts from "rollup-plugin-dts";

const input = resolve(__dirname, '../packages/fighting-components')
const output = resolve(__dirname, '../dist/packages')

const config = readdirSync(input)
  .filter(
    (name) =>
      !['index.ts', 'package.json', 'README.md', 'README.en-US.md'].includes(
        name
      )
  )
  .map((name) => ({
    input: `${input}/${name}/index.ts`,
    external: ['vue'],
    plugins: [nodeResolve(), vuePlugin(), terser(), esbuild()],
    output: {
      dir: `${output}/${name}`,
      format: 'es'
    }
  }))

export default config
