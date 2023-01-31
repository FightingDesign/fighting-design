<script lang="ts" setup></script>

<template>
  <f-alert round type="default">默认提示信息</f-alert>
  <f-alert type="primary">主要提示信息</f-alert>
  <f-alert type="success">成功提示信息</f-alert>
  <f-alert type="danger">危险提示信息</f-alert>
  <f-alert type="warning">警告提示信息</f-alert>

  <f-alert :font-size="12" type="default">默认提示信息</f-alert>
  <f-alert :font-size="14" type="primary">主要提示信息</f-alert>
  <f-alert :font-size="16" type="success">成功提示信息</f-alert>
  <f-alert font-size="20px" type="danger">危险提示信息</f-alert>
  <f-alert font-size="24px" type="warning">警告提示信息</f-alert>
</template>

<style lang="scss" scoped></style>
