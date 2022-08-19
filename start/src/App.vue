<template>
  <f-button type="primary" @click="visible1 = true">show</f-button>
  <f-dialog title="Title" v-model:visible="visible1">
    fighting-design
  </f-dialog>

  <br />
  <br />
  <br />
  <br />
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success" ripples>涟漪效果</f-button>
  <f-button type="warning" ripples>点我试试</f-button>
  <f-button type="danger" ripples simple>看看我</f-button>
  <f-button type="success" text ripples ripples-color="green">
    自定义涟漪颜色
  </f-button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const visible1 = ref(false)
</script>
