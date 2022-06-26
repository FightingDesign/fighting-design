<template>
  <f-button type="primary" @click="onclick2"> 主要按钮 </f-button>
  <f-loading :show="loading2" text="玩命加载中……" icon="f-icon-loading6" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const loading2 = ref(false)

  function onclick2() {
    loading2.value = true
    setTimeout(() => {
      loading2.value = false
    }, 1500)
  }
</script>

<style>
  .a {
    height: 2000px;
  }
</style>
