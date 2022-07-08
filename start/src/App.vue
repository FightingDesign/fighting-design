<template>
  <f-tag type="info">信息</f-tag>
  <f-tag type="primary">普通</f-tag>
  <f-tag type="warning">警告</f-tag>
  <f-tag type="success">成功</f-tag>
  <f-tag type="danger">失败</f-tag>
  <br />
  <f-tag simple type="info">信息</f-tag>
  <f-tag simple type="primary">普通</f-tag>
  <f-tag simple type="warning">警告</f-tag>
  <f-tag simple type="success">成功</f-tag>
  <f-tag simple type="danger">失败</f-tag>
  <br />

  <f-tag
    round
    close
    simple
    background="red"
    color="black"
    left-icon="f-icon-default-template"
    right-icon="f-icon-default-template"
    type="info"
    @on-close="add"
  >
    信息
  </f-tag>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  function add() {
    console.log('12 3')
  }
</script>
