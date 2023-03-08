<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>

<template>
  <f-input v-model="value1" type="text" :width="200" :height="100" placeholder="请输入...." />
</template>
