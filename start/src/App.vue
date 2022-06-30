<template>
  <div class="affix-container">
    <FAffix :offset="120">
      <FButton>点我</FButton>
    </FAffix>
  </div>
  <div id="box">
    <h1 v-for="(item, index) in 100" :key="index">
      {{ index }}
    </h1>
  </div>
  <f-back-top> 返回顶部 </f-back-top>
  <h1 v-for="(item, index) in 20" :key="index">
    {{ index }}
  </h1>
</template>

<script lang="ts" setup></script>

<style>
  .affix-container {
    margin-top: 400px;
  }
  #box {
    width: 500px;
    height: 700px;
    background: skyblue;
    overflow: auto;
  }
</style>
