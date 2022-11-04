<script lang="ts" setup>
  import { ref } from 'vue'

  const files1 = ref([])
</script>

<template>
  <f-up-load v-model:files="files1" />
</template>
