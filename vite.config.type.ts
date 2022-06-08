import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts' // 用于生成 `.d.ts` 文件的 vite 插件 https://github.com/qmhc/vite-plugin-dts
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      cleanVueFileName: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
      name: 'fightingDesign',
      formats: ['es']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue']
    }
  }
})
