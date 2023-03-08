<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref('不同尺寸的')
</script>

<template>
  <f-fighting-global lang="zh-CN">
    <f-empty />
  </f-fighting-global>

  <f-fighting-global lang="en-US">
    <f-empty />

    <f-input v-model="value2" clear search disabled type="text" size="large" />
    <f-input v-model="value2" clear search disabled type="text" size="middle" />
    <f-input v-model="value2" clear search disabled type="text" size="small" />
    <f-input v-model="value2" clear search disabled type="text" size="mini" />
  </f-fighting-global>
</template>
