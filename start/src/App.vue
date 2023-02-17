<script lang="ts" setup>
  import {
    FIconSun,
    FIconMoon,
    FIconFaceSmile,
    FIconFaceFrown,
    FIconEye,
    FIconEyeSlash
  } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value5 = ref(true)
  const value6 = ref(true)
  const value7 = ref(true)
</script>

<template>
  <f-link href="https://baidu.com" type="primary">默认链接</f-link>
  <f-link state="background" disabled no-copy type="primary">主要链接</f-link>
  <f-link state="background" disabled no-copy type="success">成功链接</f-link>
  <f-link state="background" disabled no-copy type="danger">危险链接</f-link>
  <f-link state="background" disabled no-copy type="warning">警告链接</f-link>
  <f-link state="background" disabled no-copy type="info">信息链接</f-link>

  <f-link disabled href="" type="primary">不许点我</f-link>
  <f-link disabled href="" state="line" type="success">不许点我</f-link>
  <f-link disabled href="" state="background" type="warning">不许点我</f-link>

  <!-- <f-link href="" state="line" type="primary">带有下划线</f-link>
  <f-link href="" state="background" type="danger">hover 一下试试</f-link>

  <f-link disabled href="" type="primary">不许点我</f-link>
  <f-link disabled href="" state="line" type="success">不许点我</f-link>
  <f-link disabled href="" state="background" type="warning">不许点我</f-link> -->
</template>
