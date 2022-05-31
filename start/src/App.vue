<template>
  <div style="height: 1000px"></div>
  <f-image
    root-margin="100px"
    src="https://tianyuhao.cn/images/auto/1.png2"
    err-src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg2"
    :draggable="false"
    lazy
    alt="ada"
    :preview-list="listImg"
    :select="true"
    :preview-z-index="10022"
    :modal-close="false"
    :show-close-btn="false"
    :preview-show-option="false"
    round="20px"
    preview-round="120px"
    caption="回到家啊回到家萨的好时机啊"
    :preview-show-index="32"
    @load="load"
    @error="err"
  >
    <template #error>
      <h1>加载失败</h1>
    </template>
  </f-image>
  <span>12</span>
</template>

<script lang="ts" setup>
  function err(e) {
    console.log(e)
    console.log('加载失败------')
  }
  function load(e) {
    console.log(e)
    console.log('加载成功------')
  }
  const listImg = [
    // 'https://tianyuhao.cn/images/auto/1.png',
    // 'https://tianyuhao.cn/images/auto/2.png',
    // 'https://tianyuhao.cn/images/auto/3.png',
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
    // 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    // 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    // 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    // 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    // 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  ]
</script>

<style>
  .list {
    width: 300px;
    height: 200px;
    background: skyblue;
  }
</style>
