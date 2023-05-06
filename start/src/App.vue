<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('这是一段文字')
</script>

<template>
  <f-textarea v-model="value1" placeholder="请输入...." font-size="16px" />
  <f-input v-model="value1" placeholder="请输入...." font-size="18px" />
</template>
