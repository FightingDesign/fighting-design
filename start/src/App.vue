<script lang="ts" setup>
  import { h } from 'vue'
  import { FMessage } from 'fighting-design'

  const openMessageVNode = () => {
    FMessage('这是一条消息提示')
  }
</script>

<template>
  <f-button type="primary" @click="openMessageVNode">打开</f-button>
</template>
