<template>
  <f-tooltip content="hello">
    <f-button type="primary">主要按钮</f-button>
  </f-tooltip>
  <f-button type="primary" @click="change">主要按钮</f-button>
  <f-dialog title="Title" append-to-body v-model:visible="isShow"
    >哈哈哈哈</f-dialog
  >
  <f-captcha
    verify-src="https://www.hualigs.cn/image/62bd95894189e.jpg"
    jigsaw-src="https://www.hualigs.cn/image/62bd9588612da.jpg"
    move-icon="f-icon-Rightarrow"
  />
  <f-progress showText percentage="70"></f-progress>
  <f-progress showText percentage="70" type="success"></f-progress>
  <f-progress showText percentage="70" type="warning"></f-progress>
  <f-progress showText percentage="70" type="danger"></f-progress>
  <f-progress
    background="#C3FFBD"
    color="#42CB12"
    showText
    percentage="70"
    type="danger"
  ></f-progress>
  <f-progress
    background="#F1F1F1"
    color="#D540ED"
    showText
    percentage="70"
    type="danger"
  ></f-progress>
  <f-progress linear percentage="70" type="danger"></f-progress>
  <f-progress square showText percentage="70"></f-progress>
  <f-progress width="313px" height="45px" showText percentage="70"></f-progress>
  <Progress />
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
  const change = () => {
    isShow.value = true
  }
</script>

<style></style>
