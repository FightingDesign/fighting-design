<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    FIconApps,
    FIconBlock,
    FIconCameraVideoSlash,
    FIconClock
  } from '@fighting-design/fighting-icon'

  const show1 = ref(false)

  const listImg = [
    'https://tianyuhao.cn/images/auto/1.jpg',
    'https://tianyuhao.cn/images/auto/2.jpg',
    'https://tianyuhao.cn/images/auto/3.jpg',
    'https://tianyuhao.cn/images/auto/4.jpg'
  ]

  // const value = ref(17)

  const num = ref(123)
  // const loading = ref(true)

  // setTimeout(() => {
  //   loading.value = false
  // }, 2000)

  const change = (e: Event): void => console.log(e, 'change')
  const input = (e: Event): void => console.log(e, 'input')
  const blur = (e: Event): void => console.log(e, 'blur')
  const focus = (e: Event): void => console.log(e, 'focus')

  const click = (e) => console.log(e)
</script>

<template>
  <f-button type="primary" @click="show1 = true">打开</f-button>
  <f-image-preview v-model:visible="show1" :img-list="listImg" />

  <f-toolbar :on-click="click">
    <f-toolbar-item :index="1" :icon="FIconApps" />
    <f-toolbar-item :index="2" :icon="FIconBlock" />
    <f-toolbar-item :index="3" :icon="FIconCameraVideoSlash" />
    <f-toolbar-item :index="4" :icon="FIconClock" />
  </f-toolbar>

  <f-alert close type="default">默认</f-alert>
  <f-alert close type="primary">普通</f-alert>
  <f-alert close type="warning">警告</f-alert>
  <f-tag close type="success">成功</f-tag>
  <f-tag close type="danger">失败</f-tag>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <h1>1</h1>
  <f-input-number
    v-model="num"
    clear
    model="button"
    :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
  />
  <f-back-top>返回顶部</f-back-top>

  <!-- <input
    id="number"
    v-model="value"
    type="number"
    :max="20"
    @change="change"
    @input="input"
  /> -->
  <!-- <f-input v-model="value" />

  <f-input-number
    v-model="num"
    clear
    model="switch"
    :min="0"
    :max="50"
    :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
  />

  <f-input-number
    v-model="num"
    clear
    :min="0"
    :max="50"
    :on-change="change"
    :on-input="input"
    :on-blur="blur"
    :on-focus="focus"
  /> -->

  <!-- <btn-vue></btn-vue> -->
  <!-- <f-button type="primary">主要按钮</f-button> -->

  <!-- <f-close-btn color="red"></f-close-btn>
  <f-close-btn round></f-close-btn>
  <f-close-btn round disabled></f-close-btn>

  <f-tooltip content="上边的提示信息" position="top">
    <f-tag type="primary">信息</f-tag>
  </f-tooltip>

  <f-tooltip content="下边的提示信息" position="bottom">
    <f-tag type="success">信息</f-tag>
  </f-tooltip>

  <f-tooltip content="左边的提示信息" position="left">
    <f-tag type="danger">信息</f-tag>
  </f-tooltip>

  <f-tooltip content="右边的提示信息" position="right">
    <f-tag type="warning">信息</f-tag>
  </f-tooltip> -->

  <!--
  <f-tag close type="default">默认</f-tag>
  <f-tag close type="primary">普通</f-tag>
  <f-tag close type="warning">警告</f-tag>
  <f-tag close type="success">成功</f-tag>
  <f-tag close type="danger">失败</f-tag>

  <br />

  <f-tag simple close type="default">默认</f-tag>
  <f-tag simple close type="primary">普通</f-tag>
  <f-tag simple close type="warning">警告</f-tag>
  <f-tag simple close type="success">成功</f-tag>
  <f-tag simple close type="danger">失败</f-tag>

  <br />
  <f-tag line close type="default">默认</f-tag>
  <f-tag line close type="primary">普通</f-tag>
  <f-tag line close type="warning">警告</f-tag>
  <f-tag line close type="success">成功</f-tag>
  <f-tag line close type="danger">失败</f-tag>

  <f-input-number v-model="value1" />
  <f-input-number v-model="value1" model="switch" />
  <f-input-number v-model="value1" model="button" />
 -->
</template>
