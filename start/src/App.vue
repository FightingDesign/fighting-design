<template>
  <f-button-group size="large">
    <f-button type="primary" round @click="change">主要按钮</f-button>
    <f-button type="primary" icon="f-icon-ashbin" round size="mini" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="mini" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="mini" @click="change">主要按钮</f-button>
  </f-button-group>

  <f-button-group size="">
    <f-button type="primary" round @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
    <f-button type="primary" round size="" @click="change">主要按钮</f-button>
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
  </f-button-group>
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
