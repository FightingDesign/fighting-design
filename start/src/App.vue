<script lang="ts" setup>
  import { h, isVNode } from 'vue'
  import { FIconUmbrella } from '@fighting-design/fighting-icon'
  console.log(FIconUmbrella)

  console.log(isVNode(FIconUmbrella))
</script>

<template>
  <f-alert type="primary" close title="哈哈哈哈哈">主要提示信息</f-alert>
  <f-alert type="success" close>成功提示信息</f-alert>
  <f-alert type="danger" close>危险提示信息</f-alert>
</template>

<style lang="scss" scoped></style>
