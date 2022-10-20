<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')

  const onChange = (val: string): void => {
    console.log(val)
  }
</script>

<template>
  <f-input v-model="value" type="text" :max-length="3" @change="onChange" />
</template>

<style lang="scss" scoped></style>
