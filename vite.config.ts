import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  // build: {
  //   lib: {
  //     entry: '/packages/fighting-design/index.ts',
  //     name: 'fighting-design'
  //   }
  // }
})
