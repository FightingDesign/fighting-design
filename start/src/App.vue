<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const openMessage = (): void => {
    FMessage({
      message: '这是一个提示信息',
      type: 'warning'
      // onClose: () => {}
    })

  //   FMessage({
  //     message: '这是一个提示信息'
  //   })

  //   FMessage.success('123')

  //   FMessage.danger('123')
  }
</script>

<template>
  <button @click="openMessage">1234</button>
</template>

<style lang="scss" scoped></style>
