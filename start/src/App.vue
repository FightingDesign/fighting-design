<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref(30)
</script>

<template>
  {{ value }}
  <f-select v-model="value" placeholder="请选择……">
    <f-option v-for="i in 5" :key="i" :value="i">选项 {{ i }}</f-option>
  </f-select>
</template>
