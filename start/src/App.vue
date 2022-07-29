<script lang="ts" setup>
  import {
    FIcon,
    FMessage,
    FMessageInstance
  } from '@fighting-design/fighting-components'
  import FMessageVue from '@fighting-design/fighting-components/message/src/message.vue'
  import { h, ref } from 'vue'
  const uid = ref(0)
  const showMessage1 = () => {
    FMessage({
      type: 'success',
      message: h('div', {}, '成功提示' + uid.value),
      round: true,
      close: true,
      placement: 'bottom',
      duration: 0,
      icon: 'f-icon-atm-fill',
      closeBtn: '关闭',
      color: '#ff7904',
      closeEnd: () => {
        console.log('关闭了？？')
      }
    })
    uid.value++
  }
  const showMessage2 = () => {
    FMessage({
      type: 'success',
      message: h('div', {}, '成功提示'),
      round: true,
      close: true,
      placement: 'bottom-left',
      duration: 0,
      icon: 'f-icon-atm-fill',
      closeBtn: '关闭',
      closeEnd: () => {
        console.log('关闭了？？')
      }
    })
  }
  const showMessage3 = () => {
    FMessage({
      type: 'success',
      message: h('div', {}, '成功提示'),
      round: true,
      close: true,
      placement: 'bottom-right',
      duration: 0,
      icon: 'f-icon-atm-fill',
      closeBtn: '关闭',
      closeEnd: () => {
        console.log('关闭了？？')
      }
    })
  }
  const showMessage4 = () => {
    FMessage({
      type: 'primary',
      message: '这是一条重要的消息',
      round: true,
      close: true,
      duration: 99999,
      icon: h('div', { icon: 'f-icon-atm-fill' }, '哈哈哈')
    })
  }

  const message5 = ref<FMessageInstance | null>(null)
  const showMessage5 = () => {
    message5.value = FMessage({
      message: '这是一条默认的消息',
      round: true,
      close: true,
      duration: 0,
      icon: 'f-icon-atm-fill'
    })
  }
  const closeMessage5 = () => {
    message5.value?.close()
  }
</script>

<template>
  <f-list>
    <f-list-item>你好啊这是一个列表</f-list-item>
    <f-list-item>你好啊这是一个列表</f-list-item>
    <f-list-item>你好啊这是一个列表</f-list-item>
    <f-list-item>你好啊这是一个列表</f-list-item>
    <f-list-item>你好啊这是一个列表</f-list-item>
  </f-list>
  <f-space>
    <f-button @click="showMessage1">提示1</f-button>
    <f-button @click="showMessage2">提示2</f-button>
    <f-button @click="showMessage3">提示3</f-button>
    <f-button @click="showMessage4">提示4</f-button>
    <f-button @click="showMessage5">提示5</f-button>

    <f-button @click="closeMessage5">关闭提示5</f-button>
  </f-space>
  <f-text center>你好啊这是一个列表</f-text>
</template>

<style scoped></style>
