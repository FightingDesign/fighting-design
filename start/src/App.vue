<template>
  <f-tag type="primary">上边的</f-tag>
  <div id="box">
    <f-tooltip bright bold content="上边的提示信息" position="top"> </f-tooltip>
    <br />
    <br />
    <br />
    <f-tooltip
      no-arrow
      state="always"
      content="下边的提示信息"
      position="bottom"
    >
      <f-button type="success">信息</f-button>
    </f-tooltip>
    <br />
    <br />
    <br />
    <f-tooltip no-arrow state="always" content="左边的提示信息" position="left">
      <f-button type="success">信息</f-button>
    </f-tooltip>
    <br />
    <br />
    <br />
    <f-tooltip
      no-arrow
      state="always"
      content="右边的提示信息"
      position="right"
    >
      <f-button type="success">信息</f-button>
    </f-tooltip>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  #box {
    position: fixed;
    top: 50px;
    left: 200px;
    width: 500px;
    height: 500px;
  }
</style>
