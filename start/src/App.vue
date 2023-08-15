<script lang="ts" setup>
  import { FConfirmBox } from 'fighting-design'
  import { ref } from 'vue'

  import Box from '../../packages/fighting-design/confirm-box/src/confirm-box.vue'
  const show = ref(false)

  const open = (): void => {
    // show.value = true

    FConfirmBox({
      title: '标题',
      content: '这是内容',
      onConfirm: () => {
        console.log('点击确定')
      },
      onCancel: () => {
        console.log('点击了取消')
      },
      onClose: () => {
        console.log('关闭了')
      },
      onOpen: () => {
        console.log('开启了')
      }
    })
  }
</script>

<template>
  <!-- <box :show="show" title="123" /> -->
  <f-button :on-click="open">提示</f-button>
</template>
