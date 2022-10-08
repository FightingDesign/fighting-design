<script lang="ts" setup>
  import { ref } from 'vue'

  const option1 = ref(false)
</script>

<template>
  <f-checkbox v-model="option1" label="酸辣土豆丝" />
</template>
