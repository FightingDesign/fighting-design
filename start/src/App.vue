<template></template>

<script lang="ts" setup>
  import { ChangeColor } from '@fighting-design/fighting-utils'

  const changeColor = new ChangeColor('#2d5af1')

  console.log(changeColor)

  // changeColor.getDarkColor(0.1)
  // console.log(hexToRgb('#2d5af1'))
  // console.log(rgbToHex(45, 90, 241))
</script>

<style scoped></style>
