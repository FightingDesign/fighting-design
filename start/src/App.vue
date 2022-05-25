<template>
  <f-image
    width="200px"
    height="200px"
    fit="fill"
    select
    :draggable="false"
    lazy
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
    @load="onLoad"
    @error="onError"
  />
</template>

<script lang="ts" setup>
function onLoad() {
  console.log('加载完成-----')
}
function onError() {
  console.log('加载失败-----')
}
</script>

<style scoped></style>
