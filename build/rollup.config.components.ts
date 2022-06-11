// 打包 vue 组件 

// import vuePlugin from 'rollup-plugin-vue'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

const input = resolve(__dirname, '../packages/fighting-components/index.ts')

const config = {
  input,
  plugins: [vue()],
  output: [{ file: "dist/fighting-components/index.ts", format: "es" }],
}

export default config
