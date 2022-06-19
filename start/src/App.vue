<template>
  <f-button type="default">主要按钮</f-button>
  <br />
  <f-button :style="{ background: '#456df3' }" type="default"
    >主要按钮</f-button
  >
  <br />
  <f-button
    type="default"
    :style="{ background: changeColor.getLightColor(.54) }"
  >
    主要按钮
  </f-button>
</template>

<script lang="ts" setup>
  import { ChangeColor } from '@fighting-design/fighting-utils'

  const changeColor = new ChangeColor('#f0f0f0')

  console.log(changeColor.getLightColor(.18))
</script>

<style scoped>
  div {
    width: 50px;
    height: 50px;
    border: 2px solid black;
  }
</style>
