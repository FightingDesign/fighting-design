import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  root: './start',
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  // build: {
  //   // lib: {
  //   //   entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
  //   //   name: 'fightingDesign',
  //   //   formats: ['es'],
  //   //   fileName: 'index.js'
  //   // },
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ['vue']
  //   }
  // }
})