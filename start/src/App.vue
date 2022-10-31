<template>
  <!-- <f-button type="primary" @click="openNotification">show</f-button> -->

  <!-- <input type="file" name="" id="" /> -->
  <f-up-load />

  <f-alert type="primary" close :close-end="end">主要提示信息</f-alert>
  <f-alert type="success" close>成功提示信息</f-alert>
  <f-alert type="danger" close>危险提示信息</f-alert>

  <f-page-header title="标题" :back="goBack" />
</template>

<script lang="ts" setup>
  import { FMessage } from '../../packages/fighting-design/index'

  function goBack(e) {
    console.log(e)
  }

  const openNotification = () => {
    FMessage({
      message: '这是一条消息提示',
      type: 'success',
      placement: 'top'
    })
  }
</script>
