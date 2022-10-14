<script lang="ts" setup>
  import { ref } from 'vue'

  const show = ref(false)

  const visible2 = ref(false)

  const onOpen = (): void => console.log('打开了')
  const onOpenEnd = (): void => console.log('打开完成')
  const onClose = (): void => console.log('关闭了')
  const onCloseEnd = (): void => console.log('关闭完成')
</script>

<template>
  <f-button type="primary" @click="visible2 = true">打开drawer</f-button>

  <f-drawer v-model:visible="visible2" title="Title" :show-header="false">
    fighting-design
  </f-drawer>

  <f-button @click="show = true">打开 popup</f-button>

  <f-popup
    v-model:visible="show"
    direction="center"
    @open="onOpen"
    @open-end="onOpenEnd"
    @close="onClose"
    @close-end="onCloseEnd"
  >
    <p>这是一段文字这是一段文字这是一段文字这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
  </f-popup>
</template>

<style lang="scss" scoped></style>
