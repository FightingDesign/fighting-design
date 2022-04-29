import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    // lib: {
    //   entry: '/packages/fighting-design/index.ts',
    //   name: 'fighting-design'
    // },
    // https://cn.vitejs.dev/guide/build.html#customizing-the-build
    rollupOptions: {
      input: '/packages/fighting-design/index.ts', // 输入地址
      output: {
        // dir: '', // 放置所有生成的块的目录
        // file: 'fighting.js',// 要写入的文件 打包到那个文件
        // format: 'esm' // 生成包的格式
      }
    }
  }
})
