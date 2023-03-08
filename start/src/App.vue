<script lang="ts" setup>
  import { ref } from 'vue'

  const value2 = ref('不同尺寸的')
</script>

<template>
  <f-input v-model="value2" clear disabled type="text" size="large" />
  <f-input v-model="value2" clear disabled type="text" size="middle" />
  <f-input v-model="value2" clear disabled type="text" size="small" />
  <f-input v-model="value2" clear disabled type="text" size="mini" />
</template>
