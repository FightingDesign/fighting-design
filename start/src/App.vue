<script setup lang="ts">
  import { FNotification } from 'fighting-design'
  import type { NotificationPlacement } from 'fighting-design'

  const openNotificationPlacement = (placement: NotificationPlacement) => {
    FNotification({
      title: '一条通知',
      message: '这是一条自定义位置的消息',
      type: 'primary',
      close: true,
      duration: 0,
      placement: placement
    })
  }
</script>

<template>
  <f-space>
    <f-button type="primary" @click="openNotificationPlacement('top-left')"> 左上 </f-button>
    <f-button type="primary" @click="openNotificationPlacement('top-right')"> 右上 </f-button>
    <f-button type="success" @click="openNotificationPlacement('bottom-left')"> 左下 </f-button>
    <f-button type="success" @click="openNotificationPlacement('bottom-right')"> 右下 </f-button>
  </f-space>
</template>
