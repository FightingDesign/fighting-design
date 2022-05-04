import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/fighting-design/index.ts'),
      name: 'fighting',
      fileName: (format: string): string => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'fightingDesign'
        }
      }
    }

    // 其它参考
    // rollupOptions: {
    //   // 请确保外部化那些你的库中不需要的依赖
    //   external: ['vue'],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       vue: 'Vue'
    //     }
    //   }
    // },
    // outDir: 'dist/fighting-design',
    // lib: {
    //   fileName: 'fightingDesign',
    //   entry: './packages/fighting-design/index.ts',
    //   name: 'fightingDesign',
    // },
    // lib: {
    //   entry: '/packages/fighting-design/index.ts',
    //   name: 'fighting-design'
    // },
    // https://cn.vitejs.dev/guide/build.html#customizing-the-build
    // rollupOptions: {
    // input: '/packages/fighting-design/index.ts', // 输入地址
    // output: {

    // manualChunks: ['ada']
    // // name: 'MyBundle'
    // file: 'bundle.js',
    // // format: 'iife',
    // name: 'MyBundle',
    // dir: 'fighting-design', // 放置所有生成的块的目录
    // // file: 'fighting.js',// 要写入的文件 打包到那个文件
    // // format: 'esm' // 生成包的格式
    //   }
    // }
  },

  // test: {
  //   clearMocks: true,
  //   environment: 'jsdom',
  //   setupFiles: ['./vitest.setup.ts'],
  //   transformMode: {
  //     web: [/\.[jt]sx$/],
  //   }
  // }
})
