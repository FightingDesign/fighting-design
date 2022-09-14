<script lang="ts" setup>
  function add ({ key }) {
    console.log(key)
  }
</script>

<template>
  <f-toolbar @click="add">
    <f-toolbar-item :data-key="1">
      <f-button>12</f-button>
    </f-toolbar-item>
    <f-toolbar-item data-key="2">选项2</f-toolbar-item>
    <f-toolbar-item data-key="3">选项3</f-toolbar-item>
  </f-toolbar>
</template>

<style lang="scss" scoped></style>
