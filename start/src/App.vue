<script lang="ts" setup></script>

<style>
  .f-list {
    margin: 30px;
  }
</style>

<template>
  <br />
  <br />
  <br />
  <f-list>
    <template v-slot:header> 这是表头信息 </template>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>
</template>
