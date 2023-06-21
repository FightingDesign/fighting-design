<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)

  const pagesize = ref(10)

  const pageSelect = ref([10, 20, 30, 40, 50])
</script>

<template>
  <f-pagination
    v-model:current="current"
    v-model:page-size="pagesize"
    :total="total"
    :page-select="pageSelect"
  />
</template>
