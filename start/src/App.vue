<script lang="ts" setup>
  import { reactive, ref } from 'vue'

  const isloading = ref(false)
  const loadingObj = reactive({
    text: '加载中'
  })

  const change = (): void => {
    isloading.value = true

    setTimeout(() => {
      // loading.value = false
    }, 2000)
  }
</script>

<template>
  <f-button :click="change">开始</f-button>
  <div v-loading="loadingObj" class="box"></div>
</template>

<style lang="scss" scoped>
  .box {
    width: 300px;
    height: 200px;
    margin: auto;
    border: 1px solid red;
  }
</style>
