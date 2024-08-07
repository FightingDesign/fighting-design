/// <reference types="vitest" />

import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

/**
 * vitest 配置文件
 *
 * @see vitest https://cn.vitest.dev
 *
 * 文件名需要使用 mts 后缀，否则会有警告信息
 *
 * @see CJS https://cn.vitejs.dev/guide/troubleshooting#vite-cjs-node-api-deprecated
 */
export default defineConfig({
  /**
   * 配置插件 vue，如果不配置则识别不了 vue 文件
   */
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    })
  ],
  test: {
    /**
     * 配置环境
     *
     * @see environment https://cn.vitest.dev/config/#environment
     *
     * 这里建议使用 jsdom 因为 happy-dom 会有一些不可预期错误，详情参考：
     *
     * @see test-utils https://github.com/vuejs/test-utils/issues/1704
     * @see test-utils https://github.com/vuejs/test-utils/issues/1602
     * @see fighting-design https://github.com/FightingDesign/fighting-design/pull/346
     */
    environment: 'jsdom',
    css: true,
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'docs/**',
        'start/**',
        'scripts/**',
        'packages/fighting-add-component/**',
        'packages/fighting-playground/**',
        'packages/fighting-eslint-config/**',
        'packages/fighting-icon/**',
      ]
    },
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
    include: ['**/packages/fighting-design/**/__test__/*.{test,spec}.{ts,tsx}']
  }
})
