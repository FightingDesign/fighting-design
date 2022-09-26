<script lang="ts" setup>
  import { FNotification } from '../../packages/fighting-design/index'

  const openMessage = (): void => {
    FNotification({
      message: '这是一条消息提示',
      type: 'success'
    })
  }
</script>

<template>
  <f-button type="primary" @click="openMessage">show</f-button>
</template>

<style scoped></style>
