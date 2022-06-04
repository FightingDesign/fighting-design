import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    minify: true, // https://rollupjs.org/guide/en/#outputminifyinternalexports
    lib: {
      entry: resolve(__dirname, './packages/fighting-theme/index.scss'),
      formats: ['es'],
      name: 'index',
      fileName: 'index'
    },
    emptyOutDir: false // https://cn.vitejs.dev/config/#build-emptyoutdir
  }
})
