<template>
  <!-- <f-button text border type="default">默认按钮</f-button>
  <f-button text border type="primary">主要按钮</f-button>
  <f-button text border type="success">成功按钮</f-button>
  <f-button text border type="danger">危险按钮</f-button>
  <f-button text border type="warning">警告按钮</f-button>
  <f-button text border type="info">信息按钮</f-button> -->
  <f-button-group size="large" vertical>
    <f-button type="primary">左边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">右边的</f-button>
  </f-button-group>
  <f-button-group vertical>
    <f-button type="primary">左边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">右边的</f-button>
  </f-button-group>
  <f-button-group size="small" vertical>
    <f-button type="primary">左边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">右边的</f-button>
  </f-button-group>
  <f-button-group size="mini" vertical>
    <f-button type="primary">左边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">右边的</f-button>
  </f-button-group>
  <f-button-group size="" vertical>
    <f-button type="primary">左边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">右边的</f-button>
  </f-button-group>
  <!-- <f-button-group size="large" vertical>
    <f-button type="primary">左边的</f-button>
    <f-button type="primary">中间的</f-button>
    <f-button type="primary">右边的</f-button>
  </f-button-group>

  <f-button-group size="" vertical>
    <f-button loading type="primary" round @click="change">主要按钮</f-button>
    <f-button loading type="primary" round size="" @click="change">
      主要按钮
    </f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
    <f-button loading type="primary" round size="" @click="change"
      >主要按钮</f-button
    >
  </f-button-group>

  <f-button-group size="small">
    <f-button type="primary" round @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
  </f-button-group>

  <f-button-group size="mini">
    <f-button type="primary" round @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
  </f-button-group> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isLoading = ref(false)
function change(e: Event) {
  console.log(e)
}
</script>

<style scoped>
div {
  color: skyblue;
}
</style>
