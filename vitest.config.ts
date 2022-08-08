/// <reference types="vitest" />

import type { UserConfigExport } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default (): UserConfigExport => {
  return {
    plugins: [Vue()],
    test: {
      environment: 'happy-dom',
      exclude: ['**/script/**'],
      include: ['**/fighting-test/*.{test,spec}.{ts,tsx}']
    }
  }
}
