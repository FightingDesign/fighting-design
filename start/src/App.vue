<template>
  <f-progress type="danger" :percentage="num" />
  <f-progress type="warning" :percentage="num" />
  <f-progress type="primary" :percentage="num" />
  <f-progress type="success" :percentage="num" />

  <f-progress stripe type="danger" :percentage="num" />
  <f-progress stripe type="warning" :percentage="num" />
  <f-progress stripe type="primary" :percentage="num" />
  <f-progress stripe type="success" :percentage="num" />

  <f-progress
    type="warning"
    :percentage="40"
    color="#e1d327"
    background="yellowgreen"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const num = ref(0)

  setInterval(() => {
    if (num.value < 100) {
      num.value++
    }
  }, 50)

  // function over() {
  //   console.log('123')
  // }
</script>

<style scoped></style>
