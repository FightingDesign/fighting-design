<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  import type { MessagePlacement } from 'fighting-design'

  const openMessagePlacement = (placement: MessagePlacement): void => {
    FMessage({
      message: '这是一条自定义位置的消息',
      type: 'primary',
      close: true,
      duration: 0,
      placement: placement
    })
  }

  const openMessage = (): void => {
    FMessage('这是一条消息提示')
  }
</script>

<template>
  <f-button type="primary" :on-click="openMessage">打开</f-button>

  <f-space>
    <f-button type="primary" @click="openMessagePlacement('top')">顶部</f-button>
    <f-button type="primary" @click="openMessagePlacement('top-left')">左上</f-button>
    <f-button type="primary" @click="openMessagePlacement('top-right')">右上</f-button>
    <f-button type="success" @click="openMessagePlacement('bottom')">底部</f-button>
    <f-button type="success" @click="openMessagePlacement('bottom-left')">左下</f-button>
    <f-button type="success" @click="openMessagePlacement('bottom-right')">右下</f-button>
  </f-space>
</template>
