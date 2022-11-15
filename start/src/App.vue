<script lang="ts" setup>
  import { ref } from 'vue'
  import { FIconSnowflake } from '@fighting-design/fighting-icon'

  const value3 = ref(true)
  const value1 = ref('')
</script>

<template>
  <f-switch v-model="value3" :icon="FIconSnowflake" size="large" />
  <f-switch v-model="value3" :icon="FIconSnowflake" size="middle" />
  <f-switch v-model="value3" :icon="FIconSnowflake" size="small" />
  <f-switch v-model="value3" :icon="FIconSnowflake" size="mini" />

  <f-select v-model="value1" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>

  <f-alert type="default">默认提示信息</f-alert>
  <f-alert type="primary">主要提示信息</f-alert>
  <f-alert type="success">成功提示信息</f-alert>
  <f-alert type="danger">危险提示信息</f-alert>
  <f-alert type="warning">警告提示信息</f-alert>
</template>
