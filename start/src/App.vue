<script lang="ts" setup>
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const files: Ref<File[] | null> = ref<File[]>(null as unknown as File[])

  const load = () => {
    console.log(files.value)
  }
</script>

<template>
  <f-up-load multiple v-model:files="files" :load="load" :max-size="1000" />
</template>

<style lang="scss" scoped></style>
