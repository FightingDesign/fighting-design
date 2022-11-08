<script lang="ts" setup>
  import { ref } from 'vue'

  const show = ref(false)
</script>

<template>
  <f-button @click="show = !show">切换</f-button>
  <div v-loading="show">
    哈哈哈
    哈哈哈
    哈哈哈
  </div>
  <!-- <f-up-load v-model:files="files1" /> -->
</template>
