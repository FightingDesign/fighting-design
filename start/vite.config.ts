import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import { resolve } from 'path'
import { vitePluginSvgIcon } from '../script/vite-plugin-svg-icon'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueSetupExtend(),
    // vitePluginSvgIcon('../packages/fighting-icon/')
    // vitePluginSvgIcon(resolve(__dirname, '/icons/'))
    vitePluginSvgIcon('./icons/')
    // createSvgIconsPlugin({
    //   // 指定需要缓存的图标文件夹
    //   // iconDirs: [resolve(process.cwd(), 'packages/fighting-icon')],
    //   iconDirs: [resolve(process.cwd(), 'start/src/icons')],
    //   // 指定symbolId格式
    //   // symbolId: 'icon-[name]',
    //   symbolId: 'icon-[dir]-[name]',
    //   // inject: 'body-last'
    // })
  ]
})
