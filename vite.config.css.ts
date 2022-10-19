import { resolve } from 'path'
import { readdirSync } from 'fs'
import type { UserConfigExport } from 'vite'

const input: string = resolve(__dirname, 'packages/fighting-theme/src')

export default (): UserConfigExport => {
  return {
    build: {
      assetsDir: 'theme',
      rollupOptions: {
        input: readdirSync(input).map((name): string => {
          return `${input}/${name}`
        }),
        output: {
          entryFileNames: 'theme/[name].js',
          chunkFileNames: 'theme/[name].js',
          assetFileNames: 'theme/[name].[ext]'
        }
      }
    }
  } as UserConfigExport
}
