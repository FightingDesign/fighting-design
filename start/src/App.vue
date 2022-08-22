<script lang="ts" setup>
  import { loadImage } from '../../packages/fighting-design/_utils'
  import { ref, onMounted } from 'vue'

  const myImg = ref(null as unknown as HTMLImageElement)

  const props = {
    src: 'https://tianyuha2o.cn/images/auto/my.jpg',
    errSrc: 'https://tianyuhao.cn/images/auto/4.jpg',
    lazy: true
  }

  onMounted(() => {
    loadImage(myImg.value, props)
  })
</script>

<template>
  <img ref="myImg" src="" alt="" />
</template>

<style scoped></style>
