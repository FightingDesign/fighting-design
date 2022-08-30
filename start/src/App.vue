<script lang="ts" setup>
  // import { useLoadingBar } from '../../packages/fighting-design/loading-bar/src/method'
  import {
    useLoadingBar,
    // FMessage,
    FNotification
  } from '../../packages/fighting-design/index'

  const openMessage = () => {
    FNotification({
      message: '这是一条消息提示',
      type: 'success',
      duration: 0
    })
    FNotification({
      message: '这是一条消息提示',
      duration: 0
    })
  }

  const bar = useLoadingBar()
  const start = () => {
    bar.start()
  }

  const finish = () => {
    bar.finish()
  }

  const error = () => {
    bar.error()
  }
</script>

<template>
  <f-button @click="start">开始</f-button>
  <f-button @click="finish">结束</f-button>
  <f-button @click="error">报错</f-button>
  <f-button type="primary" @click="openMessage">show</f-button>
</template>

<style scoped></style>
