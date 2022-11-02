<template>
  <f-button @click="openMessage">查看消息</f-button>
</template>

<script lang="ts" setup>
  import { FMessage } from '../../packages/fighting-design/index'

  const openMessage = () => {
    const info = FMessage({
      message: '这是一条消息提示',
      type: 'success'
    })
  }
</script>
