<script lang="ts" setup></script>

<template>
  <f-ripple :start-opacity="1" :end-opacity="1" :duration="9000">
    <div class="list">
      <f-text color="purple">自定义涟漪颜色</f-text>
    </div>
  </f-ripple>
  <f-button type="success" ripples>涟漪效果</f-button>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
