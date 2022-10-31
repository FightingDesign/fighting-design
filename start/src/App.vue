<template>
  <f-button type="primary" @click="openNotification">show</f-button>
  <f-button type="primary" @click="openNotification2">show2</f-button>

  <f-up-load />
</template>

<script lang="ts" setup>
  import { FMessage } from '../../packages/fighting-design/index'
  import { FNotification } from '../../packages/fighting-design/notification/index'

  const openNotification = () => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success',
      placement: 'top'
    })
  }

  const openNotification2 = () => {
    FNotification({
      title: '啊啊啊',
      message: '123123'
    })
  }
</script>
