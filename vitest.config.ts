/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import type { UserConfigExport } from 'vite'

/**
 * vitest 配置文件
 *
 * @see vitest https://cn.vitest.dev
 */
export default (): UserConfigExport => {
  return {
    /** 配置插件 vue，如果不配置则识别不了 vue 文件 */
    plugins: [vue()],
    test: {
      /**
       * 配置环境
       *
       * @see environment https://cn.vitest.dev/config/#environment
       */
      environment: 'happy-dom',
      /**
       * 排除目录
       *
       * @see exclude https://cn.vitest.dev/config/#exclude
       */
      exclude: ['**/fighting-add-component/**'],
      /**
       * 包含目录
       *
       * @see include https://cn.vitest.dev/config/#include
       */
      include: ['**/__test__/*.{test,spec}.{ts,tsx}']
    }
  } as UserConfigExport
}
