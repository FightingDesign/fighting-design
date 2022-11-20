<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)

  const pagesize = ref(10)

  const current2 = ref(1)
  const total2 = ref(100)

  const pagesize2 = ref(10)
</script>

<template>
  <f-pagination
    v-model:current="current"
    :total="total"
    :page-size="pagesize"
    background
  />

  <div style="margin: 15px 0"></div>

  <f-pagination
    v-model:current="current2"
    :total="total2"
    :page-size="pagesize2"
    round
  />
</template>
