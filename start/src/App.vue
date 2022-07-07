<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip
    content="这是一段提示这是一段提示这是一段提示这是一段提示这是一段提示这是一段提示"
    position="top"
  >
    <button>top</button>
  </f-tooltip>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip content="这是" position="bottom">
    <button>bottom</button>
  </f-tooltip>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip content="这是一段提示这是一段提示" position="right">
    <button style="height: 200px">right</button>
  </f-tooltip>
  <button style="height: 200px">right</button>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <f-tooltip content="这是一段提示" position="left">
    <button>left</button>
  </f-tooltip>
</template>

<script setup></script>

<style scoped>
  .f-tooltip {
    margin-left: 120px;
  }
</style>
