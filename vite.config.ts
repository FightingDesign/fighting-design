import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

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
    chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
    reportCompressedSize: false,
    outDir: resolve(__dirname, 'dist/es'),
    lib: {
      entry: resolve(__dirname, 'packages/fighting-design/index.d.ts'),
      formats: ['es'],
      fileName: (target) => {
        return `index.${target}.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      preserveModules: true,
      output: {
        format: 'es',
        globals: {
          vue: 'Vue'
        }
      }
    },
    terserOptions: {
      // 打包取消 console 和 debugger
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
