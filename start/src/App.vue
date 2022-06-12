<template>
  <f-button :ripples="false" type="default">默认按钮</f-button>
  <f-button :ripples="false" type="primary">主要按钮</f-button>
  <f-button :ripples="false" type="success">成功按钮</f-button>
  <f-button :ripples="false" type="danger">危险按钮</f-button>
  <f-button :ripples="false" type="warning">警告按钮</f-button>
  <br />
  <f-button simple type="default">默认按钮</f-button>
  <f-button simple type="primary">主要按钮</f-button>
  <f-button simple type="success">成功按钮</f-button>
  <f-button simple type="danger">危险按钮</f-button>
  <f-button simple type="warning">警告按钮</f-button>
  <br />
  <f-button font-color="#fff" color="#ff0de5">自定义颜色</f-button>
  <f-button type="primary" simple :ripples="false">主要按钮</f-button>
</template>

<script lang="ts" setup>
  import { ChangeColor } from '@fighting-design/fighting-utils'

  const changeColor = new ChangeColor('#2d5af1')

  console.log(changeColor)

  // changeColor.getDarkColor(0.1)
  // console.log(hexToRgb('#2d5af1'))
  // console.log(rgbToHex(45, 90, 241))
</script>

<style scoped></style>
