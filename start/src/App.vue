<script lang="ts" setup>
  import { FMessage, FNotification } from 'fighting-design'

  const openMessage = (): void => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success',
      // duration: 0,
      color: 'red',
      zIndex: 2000,
      background: 'black'
      // placement: 'bottom-right'
    })

    FNotification({
      message: '这是通知内容'
    })
  }
</script>

<template>
  <f-button :on-click="openMessage">打开</f-button>
</template>

<style lang="scss" scoped></style>
