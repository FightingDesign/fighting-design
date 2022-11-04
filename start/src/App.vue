<script lang="ts" setup>
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const files: Ref<File[] | null> = ref<File[]>(null as unknown as File[])

  const change = () => {
    console.log(123)
  }
</script>

<template>
  <f-up-load drag multiple v-model:files="files" :change="change" />
</template>
