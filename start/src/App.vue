<script lang="ts" setup>
  import { FMessage } from 'fighting-design'
  import { isVNode, h } from 'vue'
  import { FIconArrowDown } from '@fighting-design/fighting-icon'

  console.log(isVNode(FIconArrowDown), h(FIconArrowDown))

  const openMessage = (): void => {
    FMessage({
      message: '这是一个提示信息',
      type: 'warning',
      duration: 0,
      placement: 'top',
      close: true
      // icon: FIconArrowDown
      // onClose: () => {}
    })

    //   FMessage({
    //     message: '这是一个提示信息'
    //   })

      FMessage.success('123')

    //   FMessage.danger('123')
  }
</script>

<template>
  <button @click="openMessage">1234</button>
</template>

<style lang="scss" scoped></style>
