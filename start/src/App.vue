<template>
  <f-button type="primary">主要按钮</f-button>
  <f-button type="success" ripples>涟漪效果</f-button>
  <f-button type="warning" ripples>点我试试</f-button>
  <f-button type="danger" ripples simple>看看我</f-button>
  <f-button type="success" text ripples ripples-color="green">
    自定义涟漪颜色
  </f-button>
</template>
<style scoped>
  .f-watermark {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .f-card {
    width: 240px;
  }
</style>
