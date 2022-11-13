<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconCamera } from '@fighting-design/fighting-icon'

  const total = ref(100)

  const current = ref(3)

  const toPrev = (page: number) => {
    current.value = page
  }

  const toNext = (page: number) => {
    current.value = page
  }
</script>

<template>
  <p>页码:{{ current }}</p>
  <f-pagination
    :total="total"
    v-model:current="current"
    :prev-click="toPrev"
    :next-click="toNext"
    :round="true"
    jumpSearch
    :prev-icon="FIconCamera"
  />
</template>
