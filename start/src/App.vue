<script lang="ts" setup>
  // import { useLoadingBar } from '../../packages/fighting-design/loading-bar/src/method'
  import { useLoadingBar } from '../../packages/fighting-design/index'

  const bar = useLoadingBar()
  const start = () => {
    bar.start()

    // setTimeout(() => {
    // bar.finish()
    // }, 1000)
  }

  const finish = () => {
    bar.finish()
  }

  const error = () => {
    bar.error()
  }
</script>

<template>
  <f-button @click="start">开始</f-button>
  <f-button @click="finish">结束</f-button>
  <f-button @click="error">报错</f-button>
</template>

<style scoped></style>
