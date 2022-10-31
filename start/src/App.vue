<template>
  <f-button type="primary" @click="openMessage">show</f-button>

  <f-button type="primary" @click="openNotification">show</f-button>
</template>

<script lang="ts" setup>
  import { FMessage, FNotification } from '../../packages/fighting-design/index'

  const openMessage = () => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success'
    })
  }

  const openNotification = () => {
    FNotification({
      title: '这是一条通知',
      message: '这是通知内容'
    })
  }
</script>
