// 打包 vue 组件

// npm i vue vue-template-compiler rollup-plugin-vue@5.1.9 vue-class-component vue-property-decorator rollup-plugin-replace -D

// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'

const input = resolve(__dirname, '../packages/fighting-components/index.ts')

const config = {
  input,
  external: ['vue'],
  plugins: [
    nodeResolve(),
    vue(),
    esbuild(),
    // dts(),
    typescript()
  ],
  output: [{ file: 'dist/fighting-components/index.ts', format: 'es' }]
}

export default config
