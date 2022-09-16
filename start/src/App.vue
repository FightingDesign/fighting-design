<script lang="ts" setup>
  const change = ({ key }) => {
    console.log(key)
  }
</script>

<template>
  <f-button @click="change">123</f-button>
  <f-toolbar @click="change">
    <f-toolbar-item data-key="1">
      <f-icon size="30px" icon="f-icon-default-template" />
    </f-toolbar-item>
    <f-toolbar-item data-key="2">
      <f-icon size="30px" icon="f-icon-Customermanagement" />
    </f-toolbar-item>
    <f-toolbar-item data-key="3">
      <f-icon size="30px" icon="f-icon-email" />
    </f-toolbar-item>
    <f-toolbar-item data-key="4">
      <f-icon size="30px" icon="f-icon-editor" />
    </f-toolbar-item>
  </f-toolbar>
</template>
