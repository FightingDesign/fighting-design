<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconCamera } from '@fighting-design/fighting-icon'

  const total = ref(100)

  const current = ref(3)

  const toPrev = (page: number): void => {
    current.value = page
  }

  const toNext = (page: number): void => {
    current.value = page
  }
</script>

<template>
  <p>页码:{{ current }}</p>
  <f-pagination
    v-model:current="current"
    :total="total"
    :prev-click="toPrev"
    :next-click="toNext"
    round
    jump-search
    :prev-icon="FIconCamera"
  />
</template>

<style lang="scss" scoped></style>
