<template>
  <f-button type="primary" @click="openNotification">show</f-button>
</template>

<script lang="ts" setup>
  import { FMessage } from '../../packages/fighting-design/index'
  const openNotification = () => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success',
      placement: 'top'
    })
  }
</script>
