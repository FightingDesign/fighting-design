<script lang="ts" setup>
  import { FMessage, FNotification } from 'fighting-design'
  // import { isVNode, h } from 'vue'
  // import { FIconArrowDown } from '@fighting-design/fighting-icon'

  const openMessage = (): void => {
    // FMessage({
    //   message: '这是一个提示信息',
    //   type: 'warning',
    //   duration: 0,
    //   placement: 'top',
    //   close: true
    //   // icon: FIconArrowDown
    //   // onClose: () => {}
    // })

    FNotification.success('123')

    FMessage({
      message: '这是一个提示信息'
    })

    // FMessage.success('123')

    //   FMessage.danger('123')
  }
</script>

<template>
  <button @click="openMessage">1234</button>
</template>

<style lang="scss" scoped></style>
