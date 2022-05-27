<template>
  <f-image
    width="400px"
    fit="fill"
    select
    :draggable="false"
    lazy
    referrer-policy="no-referrer"
    :preview-list="listImg"
    round="50px"
    :previewShowOption="false"
    src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
    err-src="https://img0.baidu.com/it/u=3237486956,3407748105&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=267"
    @load="onLoad"
    @error="onError"
  />
</template>

<script lang="ts" setup>
  const listImg = [
    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  ]
  function onLoad() {
    console.log('加载完成-----')
  }
  function onError() {
    console.log('加载失败-----')
  }
</script>

<style scoped></style>
