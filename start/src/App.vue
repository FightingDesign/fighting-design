<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>

  <f-divider position="left" margin="200px" background="orange"></f-divider>
  <f-divider position="left" vertical>的回家啊快点回家安康</f-divider
  >打扫打扫打扫
  <f-divider position="center" color="red">的回家啊快点回家安康</f-divider>
  <f-divider position="right" color="skyblue" fontColor="black">
    <f-icon icon="f-icon-camera-fill" />
  </f-divider>
</template>

<script lang="ts" setup>
  function add() {
    console.log('123')
  }
</script>

<style scoped></style>
