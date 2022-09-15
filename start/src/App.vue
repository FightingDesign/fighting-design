<script lang="ts" setup>
  const url = new URL('./1.jpg', import.meta.url).href
</script>

<template>
  <f-image :src="url" />
</template>

<style scoped></style>
