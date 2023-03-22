<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref(99)

  // setInterval(() => {
  //   value.value += 1
  // }, 20)

  function add () {
    value.value += 10
  }
</script>

<template>
  <button @click="add">++</button>
  <f-progress :percentage="value" circle />
</template>

<style lang="scss" scoped>
  .osvg {
    position: absolute;
    inset: 0;
    margin: auto;

    .oround {
      stroke-dasharray: 628;
      stroke-dashoffset: 600;
    }
  }
</style>
