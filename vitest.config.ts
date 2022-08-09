/// <reference types="vitest" />

import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

export default (): UserConfigExport => {
  return {
    plugins: [vue()],
    test: {
      environment: 'happy-dom',
      exclude: ['**/script/**'],
      include: ['**/fighting-test/*.{test,spec}.{ts,tsx}']
    }
  }
}
