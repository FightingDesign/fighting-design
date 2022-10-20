<script lang="ts" setup>
  import { h } from 'vue'
  import CloseIconVue from '../../packages/fighting-design/_components/svg/f-icon-cross.vue'
  console.log(CloseIconVue)
  console.log(h(CloseIconVue))
</script>

<template>
  <f-toolbar>
    <f-toolbar-item :icon="h(CloseIconVue)" />
    <f-toolbar-item :icon="h(CloseIconVue)" />
    <f-toolbar-item :icon="h(CloseIconVue)" />
    <f-toolbar-item :icon="h(CloseIconVue)" />
  </f-toolbar>
</template>

<style lang="scss" scoped></style>
