import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default defineConfig({
  plugins: [
    vueSetupExtend(),
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
      fileName: (target) => {
        return `index.${target}.js`
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
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
