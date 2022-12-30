<script lang="ts" setup>
  import { FIconApps } from '@fighting-design/fighting-icon'

  const alertList = [
    '床前明月光床前明月光床前明月光',
    '疑是地上霜疑是地上霜疑是地上霜',
    '举头望明月举头望明月举头望明月举头望明月',
    '低头思故乡低头思故乡低头思故乡'
  ]
</script>

<template>
  <f-close-btn hover-color="orange" />

  <!-- <f-alert close type="default">默认提示信息</f-alert>
  <f-alert close type="primary">主要提示信息</f-alert>
  <f-alert close type="success">成功提示信息</f-alert>
  <f-alert close type="danger">危险提示信息</f-alert>
  <f-alert close type="warning">警告提示信息</f-alert>

  <f-alert :before-icon="FIconApps" :alert-list="alertList" title="这是一个提示" type="primary">主要提示信息</f-alert>
  <f-alert :before-icon="FIconApps" title="这是一个提示">主要提示信息</f-alert> -->
</template>

<style lang="scss" scoped></style>
