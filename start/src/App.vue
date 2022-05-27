<template>
  <div class="box"></div>
  <f-image
    width="400px"
    src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
    @load="onLoad"
    @error="onError"
  />
</template>

<script lang="ts" setup>
  // const listImg = [
  //   'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
  //   'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  // ]
  function onLoad() {
    console.log('加载完成-----')
  }
  function onError() {
    console.log('加载失败-----')
  }
</script>

<style scoped>
  .box {
    height: 2000px;
  }
</style>
