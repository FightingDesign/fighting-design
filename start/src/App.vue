<script lang="ts" setup>
  const handleClick = ({ key, evt }) => {
    console.log(key, evt)
  }
</script>

<template>
  <f-toolbar @click="handleClick">
    <f-toolbar-item data-key="1" icon="f-icon-default-template" />
    <f-toolbar-item data-key="2" icon="f-icon-Customermanagement" />
    <f-toolbar-item data-key="3" icon="f-icon-email" />
    <f-toolbar-item data-key="4" icon="f-icon-editor" />
  </f-toolbar>
</template>

<style lang="scss" scoped></style>
