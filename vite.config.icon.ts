import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueSetupExtend(),
      svgLoader()
    ],
    build: {
      minify: true,
      emptyOutDir: false,
      outDir: resolve(__dirname, 'dist-icon'),
      lib: {
        entry: resolve(__dirname, 'packages/fighting-icon/index.ts'),
        formats: ['es'],
        fileName: () => 'index.js'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          preserveModules: true
        }
      }
    }
  }
}
