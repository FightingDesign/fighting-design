<template>
  <f-progress type="primary" linear :percentage="num" />
  <f-progress type="success" :percentage="num" />
  <f-progress type="danger" :percentage="60" />
  <f-progress type="warning" :percentage="100" />

  <f-progress type="primary" :percentage="10" square />
  <f-progress type="success" :percentage="40" linear />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const num = ref(0)

  // setInterval(() => {
  //   if (num.value < 100) {
  //     num.value++
  //   }
  // }, 50)
</script>

<style scoped></style>
