<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)

  const pagesize = ref(10)

  const pagesizes = ref([10, 20, 30, 40, 50])
</script>

<template>
  <f-pagination
    v-model:current="current"
    :total="total"
    :page-size="pagesize"
    :page-sizes="pagesizes"
  />
</template>
