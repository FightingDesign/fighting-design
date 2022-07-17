<template>
  <f-alert type="primary" close @close-end="con">主要提示信息</f-alert>
  <f-alert type="success" close>成功提示信息</f-alert>
  <f-alert type="danger" close>危险提示信息</f-alert>
</template>

<script lang="ts" setup>
  function con() {
    console.log(123)
  }
</script>

<style lang="scss" scoped>
  #box {
    position: fixed;
    top: 50px;
    left: 200px;
    width: 500px;
    height: 500px;
  }
</style>
