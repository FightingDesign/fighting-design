<script lang="ts" setup>
  import { FMessage } from 'fighting-design'
  import { Message } from './Message'

  const openMessage = (): void => {
    FMessage({ message: '这是一条消息提示222222222222', duration: 0 })
    FMessage({ message: '这是一条消息提示111111111', duration: 0 })
  }

  const openMessage1 = (): void => {
    Message({ message: '这是一条消息提示222222222222', duration: 0 })
    Message({
      message:
        '这是一条消息提示111111111这是一条消息提示111111111这是一条消息提示111111111这是一条消息提示111111111这是一条消息提示111111111',
      duration: 0
    })
  }
</script>

<template>
  <f-button type="primary" :on-click="openMessage">打开</f-button>
  <f-button type="primary" :on-click="openMessage1">打开</f-button>
</template>
