<script lang="ts" setup></script>

<template>
  <f-ripple ripples-color="orange">
    <div class="list">
      <f-text color="orange">自定义涟漪颜色</f-text>
    </div>
  </f-ripple>

  <f-ripple ripples-color="blue">
    <div class="list">
      <f-text color="blue">自定义涟漪颜色</f-text>
    </div>
  </f-ripple>

  <f-ripple ripples-color="purple">
    <div class="list">
      <f-text color="purple">自定义涟漪颜色</f-text>
    </div>
  </f-ripple>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
