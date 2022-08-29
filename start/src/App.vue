<script lang="ts" setup>
  import { FNotification } from '../../packages/fighting-design/index'
  // FNotification({
  //   title: 'ds阿松大',
  //   message: '这是一条通知',
  //   duration: 0
  // })
  const openMessage = (item: string) => {
    FNotification({
      title: item,
      message: '这是一条消息提示这是一条消息提示这是一条消',
      type: 'warning',
      placement: item,
      close: true,
      duration: 1000
    })
  }

  const list = ['top-right', 'top-left', 'bottom-left', 'bottom-right']
</script>

<template>
  <div>
    <f-button
      v-for="item in list"
      :key="item"
      type="primary"
      @click="openMessage(item)"
    >
      {{ item }}
    </f-button>
  </div>
</template>
