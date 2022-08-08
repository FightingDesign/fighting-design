/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

// import { resolve } from 'path'
import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import Components from 'unplugin-vue-components/vite' // https://github.com/antfu/unplugin-vue-components

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [
      vue(),
      vueSetupExtend(),
      Components({
        dts: '../packages/fighting-components/components.d.ts'
      })
    ]
  }
}
