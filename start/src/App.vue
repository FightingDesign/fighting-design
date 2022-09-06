<script lang="ts" setup>
  const typeList = ['default', 'primary', 'success', 'danger', 'warning']
</script>

<template>
  <f-ripple v-for="(item, i) in typeList" :key="i" :type="item">
    <div class="list">
      <f-text :type="item">{{ item }} 涟漪</f-text>
    </div>
  </f-ripple>

  <hr>
  <f-button type="danger" ripples simple>看看我</f-button>
  <f-button type="success" text ripples ripples-color="green">
    自定义涟漪颜色
  </f-button>
</template>

<style scoped>
  .list {
    width: 500px;
    height: 60px;
    display: flex;
    font-size: 15px;
    color: #333;
    justify-content: center;
    align-items: center;
  }
</style>
