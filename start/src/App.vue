<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
  const date = ref('')
</script>

<template>
  <f-fighting-global lang="zh-CN">
    <f-empty />
  </f-fighting-global>

  <f-fighting-global lang="en-US">
    <f-empty />
  </f-fighting-global>

  <h2>{{ value1 }}</h2>
  <f-time-picker v-model:time="value1" clear />
  <f-date-picker v-model:date="date" />
</template>
