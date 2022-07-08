<template>
  <div class="tooltip-box">
    <f-tooltip
      content="上面的提示信息"
      position="top"
      state="hover"
      no-arrow
      bold
    >
      <f-tag type="primary">信息</f-tag>
    </f-tooltip>

    <f-tooltip
      content="下面的提示信息"
      position="bottom"
      state="active"
      no-arrow
      bold
    >
      <f-tag type="primary">信息</f-tag>
    </f-tooltip>

    <f-tooltip content="左面的提示信息" position="left">
      <f-tag type="primary">信息</f-tag>
    </f-tooltip>

    <f-tooltip content="右面的提示信息" position="right">
      <f-tag type="primary">信息</f-tag>
    </f-tooltip>
  </div>
</template>

<script setup></script>

<style scoped>
  .tooltip-box {
    margin-top: 300px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
</style>
