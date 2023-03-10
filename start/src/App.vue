<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>

<template>
  <f-textarea v-model="value1" placeholder="请输入...." />
  <f-textarea v-model="value1" disabled placeholder="请输入...." />
</template>
