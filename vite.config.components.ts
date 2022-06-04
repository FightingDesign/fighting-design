import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { readdirSync } from 'fs'

const input = resolve(__dirname, 'packages/fighting-components')
// console.log(input)
// readdirSync(input)
//   .filter(name => {
//     !['index.ts', 'package.json', 'README.md', 'README.en-US.md'].includes(name)
//   })
//   .map(name => {
//     console.log(name)
//   })

// const config = readdirSync(input)
//   .filter(name => {
//     !['index.ts', 'package.json', 'README.md', 'README.en-US.md'].includes(name)
//   })
//   .map(name => {
//     console.log(name)
//     const _config = {
//       plugins: [vue(), vueSetupExtend()],
//       resolve: {
//         extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
//       },
//       build: {
//         lib: {
//           entry: resolve(__dirname, `packages/fighting-components/${name}/index.ts`),
//           name: 'fightingDesign',
//           formats: ['es'],
//           fileName: 'index.ts'
//         },
//         rollupOptions: {
//           // 确保外部化处理那些你不想打包进库的依赖
//           external: ['vue']
//         }
//       }
//     }
//     return _config
//   })

// export default config[0]

// export default defineConfig({
//   // root: './start',
//   plugins: [vue(), vueSetupExtend()],
//   resolve: {
//     // https://cn.vitejs.dev/config/#resolve-extensions
//     extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
//   },
//   build: {
//     lib: {
//       // entry: resolve(__dirname, 'packages/fighting-components/index.ts'),
//       entry: resolve(__dirname, 'packages/fighting-components/button/index.ts'),
//       name: 'fightingDesign',
//       formats: ['es'],
//       fileName: 'index.js'
//     },
//     rollupOptions: {
//       // 确保外部化处理那些你不想打包进库的依赖
//       external: ['vue']
//     }
//   }
// })

const output = resolve(__dirname, 'dist/packages')

export default defineConfig({
  // root: './start',
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      input: resolve(__dirname, 'packages/fighting-components/button/index.ts'),
      output: {
        dir: `${output}/index`,
        format: 'es',
        // chunkFileNames: 'js/[name]-[hash].js'
      }
    }
  }
})