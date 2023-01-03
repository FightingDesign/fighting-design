<script lang="ts" setup>
  import { ref } from 'vue'

  const length = ref(20)

  const onScrollEnd = (): void => {
    length.value += 10
  }

  const onAnimationEnd = e => {
    console.log(e)
  }
</script>

<template>
  <f-number-animate :number="15000" />
</template>

<style scoped>
  .item {
    width: 100%;
    height: 40px;
    background: #96acf8;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    line-height: 40px;
  }
</style>
