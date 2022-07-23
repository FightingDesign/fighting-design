import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(async () => {
  return {
    plugins: [
      vue(),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        cleanVueFileName: true
      })
    ],
    build: {
      outDir: resolve(__dirname, 'dist/lib'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-design/index.d.ts'),
        formats: ['cjs'],
        fileName: () => {
          return 'index.js'
        }
      },
      rollupOptions: {
        external: ['vue'],
        preserveModules: true,
        output: {
          format: 'cjs',
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
})
