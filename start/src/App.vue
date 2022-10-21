<script lang="ts" setup>
  import { h, isVNode } from 'vue'
  import { FIconUmbrella } from '@fighting-design/fighting-icon'
  console.log(FIconUmbrella)

  console.log(isVNode(FIconUmbrella))
</script>

<template>
  <f-button type="default" loading>
    默认按钮
  </f-button>
</template>

<style lang="scss" scoped></style>
