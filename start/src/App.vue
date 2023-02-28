<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)

</script>

<template>
  <f-pagination v-model:current="current" :page-size="9" background round :total="total" />
</template>
