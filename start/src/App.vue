<script lang="ts" setup>
  import { h, ref } from 'vue'
  import CloseIconVue from '../../packages/fighting-design/_components/svg/f-icon-cross.vue'
  // console.log(CloseIconVue)
  // console.log(h(CloseIconVue))
  const value9 = ref(true)
</script>

<template>
  <f-switch v-model="value9" :icon="h(CloseIconVue)" />

  <f-toolbar>
    <f-toolbar-item :icon="h(CloseIconVue)" />
    <f-toolbar-item :icon="h(CloseIconVue)" />
    <f-toolbar-item :icon="h(CloseIconVue)" />
    <f-toolbar-item :icon="h(CloseIconVue)" />
  </f-toolbar>

  <f-tag close :after-icon="h(CloseIconVue)" type="default">默认</f-tag>
  <f-tag close :after-icon="h(CloseIconVue)" type="primary">普通</f-tag>
  <f-tag close :after-icon="h(CloseIconVue)" type="warning">警告</f-tag>
  <f-tag close :after-icon="h(CloseIconVue)" type="success">成功</f-tag>
  <f-tag close :after-icon="h(CloseIconVue)" type="danger">失败</f-tag>
</template>

<style lang="scss" scoped></style>
