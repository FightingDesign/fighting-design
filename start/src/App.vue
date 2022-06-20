<template>
  <f-button type="default">默认按钮</f-button>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success">成功按钮</f-button>
  <f-button type="danger">危险按钮</f-button>
  <f-button type="warning">警告按钮</f-button>

  <f-button simple type="default">默认按钮</f-button>
  <f-button simple type="primary">主要按钮</f-button>
  <f-button simple type="success">成功按钮</f-button>
  <f-button simple type="danger">危险按钮</f-button>
  <f-button simple type="warning">警告按钮</f-button>
</template>

<script lang="ts" setup>
  import { ChangeColor } from '@fighting-design/fighting-utils'

  const changeColor = new ChangeColor('#f0f0f0')

  console.log(changeColor.getDarkColor(0.07))
</script>

<style scoped>
  div {
    width: 50px;
    height: 50px;
    border: 2px solid black;
  }
</style>
