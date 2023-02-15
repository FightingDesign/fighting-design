<script lang="ts" setup>
  import { FMessage, FNotification } from 'fighting-design'

  const openMessage = () => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success'
    })

    FNotification({
      title: '这是一条通知',
      message: '这是通知内容'
    })
  }
</script>

<template>
  <f-button type="primary" @click="openMessage">show</f-button>
</template>
