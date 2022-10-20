<script lang="ts" setup>
  // import { FIconCross } from '@fighting-design/fighting-icon'
  import CloseIconVue from '../../packages/fighting-design/_components/svg/f-icon-cross.vue'
  import { FMessage } from '../../packages/fighting-design/message'
  import { isVNode, h } from 'vue'
  import { ref } from 'vue'

  const value1 = ref(1)

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
  <f-rate v-model="value1" :icon="h(CloseIconVue)" />
</template>
