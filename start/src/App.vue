<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref('不同尺寸的')

  const is = ref(true)

  setTimeout(() => {
    is.value = false
  }, 2000)
</script>

<template>
  <!-- <f-fighting-global lang="zh-CN"> -->

  <f-fighting-global lang="en-US" :size="is ? 'large' : 'mini'">
    <f-input v-model="value2" clear search type="text" />
    <f-input v-model="value2" clear search type="text" />
    <f-input v-model="value2" clear search type="text" />
    <f-input v-model="value2" clear search type="text" />
  </f-fighting-global>
</template>
