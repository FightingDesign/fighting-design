<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>

<template>
  {{ value1 }}
  <f-input v-model="value1" type="text" placeholder="请输入...." clear />
  <f-input v-model="value1" type="text" placeholder="请输入...." clear />
</template>
