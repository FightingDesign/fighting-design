<script lang="ts" setup>
  // import { mdPlugin } from './utils/index'
  // import { md } from './utils/md'

  // console.log(md)
  // const mdRes = mdPlugin.render(md)
  // console.log(mdRes)

  // const res = mdPlugin(md)
  // console.log(res)
</script>

<template>
  <f-alert overflow="hidden">
    认提示信息默认提示信息默认提示信息默认提示信息

    <template #close>
      <f-button type="primary">关闭</f-button>
    </template>
  </f-alert>

  <!-- <div v-html="mdRes"></div> -->
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
