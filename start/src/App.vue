<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)
</script>

<template>
  <f-pagination v-model:current="current" round :total="total" />
  <f-pagination v-model:current="current" round background :total="total" />
</template>
