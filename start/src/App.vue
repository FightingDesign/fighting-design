<template>
  <div>
    <f-button type="primary" @click="openMessage">show</f-button>

    <!-- <FMessage message='message-test' type='success'></FMessage> -->
  </div>
</template>

<script lang="ts" setup>
  import { FMessage } from '../../packages/fighting-design/index'

  const openMessage = () => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success'
    })
  }
</script>
