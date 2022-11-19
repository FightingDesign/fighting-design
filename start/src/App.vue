<script lang="ts" setup>
  import { ref } from 'vue'

  const value5 = ref('123456')
</script>

<template>
  <f-input v-model="value5" type="password" show-password />
</template>
