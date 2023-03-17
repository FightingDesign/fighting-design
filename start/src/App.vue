<script lang="ts" setup>
  import { ref } from 'vue'

  const value3 = ref(true)
</script>

<template>
  <f-fighting-global type="default" :size="value3 ? 'large' : 'mini'">
    <f-link href="">默认链接</f-link>
    <f-alert>默认提示信息</f-alert>

    <f-tag type="default">默认</f-tag>
    <f-tag type="primary">普通</f-tag>
    <f-tag>普通</f-tag>
    <f-tag>普通</f-tag>
    <f-tag type="primary">普通</f-tag>
    <f-tag type="warning">警告</f-tag>
    <f-tag type="success">成功</f-tag>
    <f-tag type="danger">失败</f-tag>

    <f-switch v-model="value3" />
    <f-switch v-model="value3" />
    <f-switch v-model="value3" />
    <f-switch v-model="value3" />
    <f-switch v-model="value3" />
    <f-switch v-model="value3" />
    <f-switch v-model="value3" size="large" />
    <f-switch v-model="value3" size="middle" />
    <f-switch v-model="value3" size="small" />
    <f-switch v-model="value3" size="mini" />
  </f-fighting-global>
  <f-alert type="primary">主要提示信息</f-alert>
  <f-alert type="success">成功提示信息</f-alert>
  <f-alert type="danger">危险提示信息</f-alert>
  <f-alert type="warning">警告提示信息</f-alert>
  <f-alert type="info">信息提示信息</f-alert>
</template>

<style lang="scss" scoped></style>
