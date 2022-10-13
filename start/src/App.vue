<script lang="ts" setup>
  import { ref } from 'vue'

  const show = ref(false)

  const onOpen = (): void => console.log('打开了')
  const onOpenEnd = (): void => console.log('打开完成')
  const onClose = (): void => console.log('关闭了')
  const onCloseEnd = (): void => console.log('关闭完成')
</script>

<template>
  <button @click="show = true">打开</button>

  <f-dialog
    v-model:visible="show"
    title="标题文字"
    :open="onOpen"
    :open-end="onOpenEnd"
    :close="onClose"
    :close-end="onCloseEnd"
  >
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>
    <p>这是一段文字</p>

    <template #footer>
      <f-button type="danger">危险按钮</f-button>
      <f-button type="warning">警告按钮</f-button>
    </template>
  </f-dialog>

  <!-- <f-mask v-model:visible="show">
    <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
    <div>title</div>
    <div>title</div>
    <div>title</div>
  </f-mask> -->
</template>

<style lang="scss" scoped></style>
