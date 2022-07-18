import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vueSetupExtend(), vue()],
  build: {
    outDir: resolve(__dirname, 'dist/dist'),
    lib: {
      entry: resolve(__dirname, 'packages/fighting-design/index.d.ts'),
      name: 'FightingDesign',
      formats: ['umd'],
      fileName: () => {
        return 'index.js'
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'umd',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
