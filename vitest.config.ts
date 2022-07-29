/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'happy-dom',
    exclude: ['**/script/**'],
    include: ['**/fighting-test/*.{test,spec}.{ts,tsx}']
  }
})
