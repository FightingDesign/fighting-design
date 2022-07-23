<script lang="ts" setup>
  const onClick = () => {
    debugger
  }
</script>

<template>
  <f-button ripples type="primary" @click="onClick">普通按钮</f-button>
  <button @click="onClick">点击</button>
</template>

<style scoped></style>
