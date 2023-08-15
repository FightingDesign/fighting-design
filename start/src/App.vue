<script lang="ts" setup>
  import { FConfirmBox } from 'fighting-design'

  const open = (): void => {
    FConfirmBox({
      title: '标题',
      content: '这是内容',
      onConfirm: () => {
        return new Promise(res => {
          setTimeout(() => {
            res('123')
          }, 2000)
        })
      }
    })
  }
</script>

<template>
  <f-button :on-click="open">提示</f-button>
</template>
