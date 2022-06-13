<template>
  <f-divider type="dashed">我是虚线</f-divider>
  <f-divider type="dotted">我是圆点</f-divider>
  <f-divider type="double" margin="140px">我双实线</f-divider>
  <f-divider type="solid">我是直线</f-divider>

  <!-- <div class="box solid"></div> -->
</template>

<script lang="ts" setup></script>

<style scoped>
  .box {
    width: 300px;
    height: 100px;
    border: 3px solid black;
  }
  .solid {
    border-style: dashed;
  }
</style>
