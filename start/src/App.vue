<template>
  <div class="f-box">
    <p v-for="i in 20">这是一段文字{{ i + 1 }}</p>
  </div>
  <f-back-top listen-el=".f-box">返回顶部</f-back-top>
</template>

<style scoped>
  .f-box {
    width: 100%;
    height: 100px;
    border: 4px solid skyblue;
    overflow: auto;
  }
</style>
