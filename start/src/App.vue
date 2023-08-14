<script lang="ts" setup>
  import { FConfirmBox } from 'fighting-design'

  const open = (): void => {
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
  <f-button :on-click="open">提示</f-button>
</template>
