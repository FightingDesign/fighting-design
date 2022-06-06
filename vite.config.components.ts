import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
      // entry: resolve(__dirname, 'packages/fighting-design/index.ts'),
      name: 'fightingDesign',
      formats: ['es'],
      fileName: 'index.js'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue']
    }
  }
})
