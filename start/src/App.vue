<script lang="ts" setup>
  import { mdPlugin } from './utils/index'
  import { md } from './utils/md'

  // console.log(md)
  const mdRes = mdPlugin.render(md)
  // console.log(mdRes)

  // const res = mdPlugin(md)
  // console.log(res)
</script>

<template>
  <div v-html="mdRes"></div>
</template>

<style scoped></style>
