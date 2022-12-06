/**
 * 请求 CDN 的基础路径
 */
export const publicPath = 'https://cdn.jsdelivr.net/npm/fighting-design/'

/**
 * 默认入口文件名
 */
export const defaultMainFile = 'App.vue'

/**
 * Fighting-Design 配置文件名
 */
export const fightingPlugin = 'fighting.ts'

/**
 * 引入 es 模块代码
 */
export const fightingImports = {
  'fighting-design': `${publicPath}es/index.js`
}

/**
 * 插件代码段
 */
export const fightingPluginCode = `
import FightingDesign from 'fighting-design'
import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

await appendStyle()

export function install () {
  const instance = getCurrentInstance() as ComponentInternalInstance
  instance.appContext.app.use(FightingDesign)
}

function appendStyle () {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${publicPath}dist/index.css'
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}
`

/**
 * 默认展示代码段
 */
export const defaultCode = `
<script setup lang='ts'>
  import { ref } from 'vue'
  import { install } from './${fightingPlugin}'

  install()

  const value = ref(true)
  const msg = ref('Hello World！')
</script>

<template>
  <h2>🌈 欢迎使用 Fighting Design！</h2>

  <f-space>
    <f-button type="primary">{{ msg }}</f-button>
    <f-button type="success" ripples>涟漪效果</f-button>
    <f-button type="warning" ripples>点我试试</f-button>
  </f-space>
</template>
`
