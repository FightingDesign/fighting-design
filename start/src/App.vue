<script lang="ts" setup>
  import { ref } from 'vue'

  const url = ref(
    'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
  )

  const change = (): void => {
    url.value =
      'https://img2.baidu.com/it/u=3618236253,1028428296&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1683392400&t=f243a7fe228993127dbd7ac56bfbef3f'
  }
</script>

<template>
  <f-image width="200px" :src="url" />
  <img width="200" :src="url" />

  <f-button :on-click="change">切换</f-button>
</template>
