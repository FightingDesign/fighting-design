import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync } from 'fs'

const input = resolve(__dirname, 'packages/fighting-theme/src')

export default defineConfig({
  build: {
    assetsDir: 'theme',
    rollupOptions: {
      input: readdirSync(input).map((name) => {
        return `${input}/${name}`
      }),
      output: {
        entryFileNames: 'theme/[name].js',
        chunkFileNames: 'theme/[name].js',
        assetFileNames: 'theme/[name].[ext]'
      }
    }
  }
})
