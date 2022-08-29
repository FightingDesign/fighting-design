<script lang="ts" setup>
  import { useLoadingBar } from '../../packages/fighting-design/loading-bar/src/method'

  const loading = () => {
    // console.dir(useLoadingBar)
    const bar = useLoadingBar()
    // console.dir(bar)
    bar.start()
    bar.start()
    bar.start()

    setTimeout(() => {
      bar.finish()
    }, 1000)
  }
</script>

<template>
  <f-button @click="loading">按钮</f-button>
</template>

<style scoped></style>
