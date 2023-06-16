<script lang="ts" setup>
  import { ref } from 'vue'

  const files1 = ref([])
</script>

<template>
  {{ files1 }}
  <f-up-load v-model:files="files1" multiple show-list />
</template>
