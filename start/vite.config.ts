import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default defineConfig({
  base: './',
  plugins: [vue(), vueSetupExtend()]
})
