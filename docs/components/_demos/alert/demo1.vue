<script lang="ts" setup>
  import {  FIconFaceSmile } from '@fighting-design/fighting-icon'
</script>

<template>
  <f-alert type="default" :before-icon="FIconFaceSmile">默认提示信息</f-alert>
  <div style="height: 5px"></div>
  <f-alert type="primary" :before-icon="FIconFaceSmile">主要提示信息</f-alert>
  <div style="height: 5px"></div>
  <f-alert type="success" :before-icon="FIconFaceSmile">成功提示信息</f-alert>
  <div style="height: 5px"></div>
  <f-alert type="danger" center :before-icon="FIconFaceSmile">危险提示信息</f-alert>
  <div style="height: 5px"></div>
  <f-alert type="warning" center title="标题" :before-icon="FIconFaceSmile" close>警告提示信息</f-alert>
</template>
