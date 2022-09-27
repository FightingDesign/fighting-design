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
  <f-image width="200px" height="400px" :round="50" caption="哈哈哈哈哈哈哈" src="https://tianyuhao.cn/images/auto/1.jpg" />

  <!-- <div v-html="mdRes"></div> -->
</template>

<style scoped></style>
