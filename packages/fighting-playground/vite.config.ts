import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    port: 7171
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../fighting-design'), // 组件目录
      '~': resolve(__dirname, '../fighting-theme/src') // 样式目录
    }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
