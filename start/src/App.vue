<script lang="ts" setup>
  import { h, ref } from 'vue'
  import CloseIconVue from '../../packages/fighting-design/_components/svg/f-icon-cross.vue'
  const value9 = ref(true)

  const onChange = (target: boolean): void => {
    console.log(target)
  }
</script>

<template>
  <!-- <f-switch v-model="value9" :icon="h(CloseIconVue)" @change="onChange" /> -->

  <f-breadcrumb>
    <f-breadcrumb-item>首页</f-breadcrumb-item>
    <f-breadcrumb-item>文章</f-breadcrumb-item>
    <f-breadcrumb-item>列表</f-breadcrumb-item>
  </f-breadcrumb>
</template>

<style lang="scss" scoped></style>
