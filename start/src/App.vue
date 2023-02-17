<script lang="ts" setup></script>

<template>
  <f-divider type="dashed">我是虚线</f-divider>
  <f-divider type="dotted" color="red">我是圆点</f-divider>
  <f-divider type="double">我是双实线</f-divider>

  <f-divider color="red" margin="10px" font-color="green" vertical height="300px">12</f-divider>
  <!-- <f-divider vertical>我是分隔线</f-divider> -->

  <f-divider position="left">我是左边的文字</f-divider>
  <f-divider position="center">我是居中的文字</f-divider>
  <f-divider position="right">我是右边的文字</f-divider>

  <f-divider margin="40px">默认颜色</f-divider>
  <f-divider color="green" margin="40px" font-color="green" background="#eee">我是绿色</f-divider>
  <f-divider color="blue" margin="40px" font-color="#fff" background="blue">我是蓝色</f-divider>
</template>

<style lang="scss" scoped></style>
