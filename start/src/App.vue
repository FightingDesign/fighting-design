<template>
  <f-button icon="f-icon-all-fill1" loading type="primary">默认按钮</f-button>
</template>

<script lang="ts" setup>
interface funInterface {
  (a: number, b: number): number
}

const fun: funInterface = (a: number, b: number): number => {
  return a + b
}
</script>

<style scoped></style>
