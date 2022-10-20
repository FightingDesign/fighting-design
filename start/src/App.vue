<script lang="ts" setup>
  // import { FIconCross } from '@fighting-design/fighting-icon'
  import CloseIconVue from '../../packages/fighting-design/_components/svg/f-icon-cross.vue'
  import { FMessage } from '../../packages/fighting-design/message'
  import { isVNode, h } from 'vue'

  console.log(isVNode(h(CloseIconVue)))

  const goBack = (): void => {
    console.log('go back')
    FMessage({
      message: '这是一条消息提示',
      type: 'success',
      icon: h(CloseIconVue),
      duration: 0,
      close: true
    })
  }
</script>

<template>
  <f-page-header title="标题" @back="goBack" />
</template>
