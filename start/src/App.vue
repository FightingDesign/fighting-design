<template>
  <div id="box">
    <h1 v-for="(item, index) in 100">
      {{ index }}
    </h1>
  </div>
  <f-back-top :z-index="3000" behavior="auto" listenEl="#box">
    返回顶部
  </f-back-top>
  <h1 v-for="(item, index) in 20">
    {{ index }}
  </h1>
</template>

<script lang="ts" setup></script>

<style>
  #box {
    width: 500px;
    height: 700px;
    background: skyblue;
    overflow: auto;
  }
</style>
