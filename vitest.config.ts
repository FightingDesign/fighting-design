/// <reference types="vitest" />

import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

export default (): UserConfigExport => {
  return {
    plugins: [vue()],
    test: {
      environment: 'happy-dom',
      exclude: ['**/script/**'],
      include: ['**/__test__/*.{test,spec}.{ts,tsx}']
    }
  }
}
