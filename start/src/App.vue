<template>
  <f-select v-model="value3" placeholder="请选择……" :on-before-change="onBeforeChange">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { FConfirmBox } from 'fighting-design'

  const value3 = ref('')

  const onBeforeChange = (): Promise<boolean> => {
    return new Promise(resolve => {
      FConfirmBox({
        title: '标题',
        content: '这是内容',
        zIndex: 2000,
        onConfirm: () => {
          resolve(true)
        },
        onCancel: () => {
          resolve(false)
        }
      })
    })
  }
</script>
