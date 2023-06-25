<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')

  const show = ref(true)

  // setTimeout(() => {
  //   show.value = false
  // }, 2000)
</script>

<template>
  <f-textarea v-if="show" v-model="value1" placeholder="请输入...." auto-height />
</template>
