/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    exclude: ['**/add-component/**'],
    include: ['**/__test__/*.{test,spec}.{ts,tsx}']
  }
})
