<script lang="ts" setup>
  import { ref } from 'vue'

  const tags = ref([1, 2, 3, 4, 5, 6, 7, 8])

  const close = (i: number): void => {
    tags.value.splice(i, 1)
  }
</script>

<template>
  <f-space>
    <f-tag
      v-for="(t, i) in tags"
      :key="i"
      round
      type="primary"
      simple
      close
      :on-close="() => close(i)"
    >
      {{ t }}
    </f-tag>
  </f-space>
</template>
