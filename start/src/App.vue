<script lang="ts" setup>
  import { FIconCross } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-alert type="default" close>
    <template #prefixIcon>
      <f-icon-cross />
    </template>
    默认提示信息
  </f-alert>
  <f-alert type="primary" close>
    <template #prefixIcon>
      <f-icon-cross />
    </template>
    主要提示信息
  </f-alert>
  <f-alert type="success" close>成功提示信息</f-alert>
  <f-alert type="danger" close>危险提示信息</f-alert>
  <f-alert type="warning" close>警告提示信息</f-alert>
</template>
