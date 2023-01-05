<script lang="ts" setup>
  import { ref } from 'vue'

  const date = new Date()

  const value2 = ref(true)

  const open1 = ref(false)

  const show1 = ref(false)

  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]

  const onClose = e => console.log(e)
</script>

<template>
  <h1>{{ value2 ? 'success' : 'warning' }}</h1>
  <f-button type="primary" @click="show1 = true">打开</f-button>
  <f-image-preview v-model:visible="show1" :img-list="listImg" :on-close="onClose" />

  <f-switch v-model="value2" />
  <f-empty />
  <f-page-header />
  <f-fighting-global :type="value2 ? 'success' : 'warning'" :lang="value2 ? 'zh-CN' : 'en-US'">
    <f-sticky-card :open="open1">
      <h1>Hello World！</h1>
      <h1>Hello World！</h1>
    </f-sticky-card>
    <f-tag type="danger">失败</f-tag>

    <f-ripple v-for="(item, i) in 5" :key="i">
      <div class="list">
        <f-text>{{ item }} 涟漪</f-text>
      </div>
    </f-ripple>

    <f-link href="">默认链接</f-link>
    <f-link href="">主要链接</f-link>
    <f-link href="" type="success">成功链接</f-link>
    <f-link href="" type="danger">危险链接</f-link>
    <f-link href="" type="warning">警告链接</f-link>

    <f-page-header />
    <f-empty />

    <f-calendar v-model:date="date" />

    <f-space>
      <f-button>默认按钮</f-button>
      <f-button>主要按钮</f-button>
      <f-button>成功按钮</f-button>
      <f-button>危险按钮</f-button>
      <f-button>警告按钮</f-button>

      <f-button simple type="default">默认按钮</f-button>
      <f-button simple type="primary">主要按钮</f-button>
      <f-button simple type="success">成功按钮</f-button>
      <f-button simple type="danger">危险按钮</f-button>
      <f-button simple type="warning">警告按钮</f-button>
    </f-space>
  </f-fighting-global>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
