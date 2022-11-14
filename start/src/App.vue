<script lang="ts" setup>
  import { FMessage } from '@/index'

  const openMessage = (): void => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success'
    })
  }
</script>

<template>
  <f-button type="primary" @click="openMessage">show</f-button>
</template>
