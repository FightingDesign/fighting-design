<script lang="ts" setup>
  import { ref } from 'vue'

  const show = ref(false)
</script>

<template>
  <button @click="show = true">打开</button>

  <f-dialog v-model:visible="show" title="标题文字">
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
