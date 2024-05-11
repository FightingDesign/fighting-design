<template>
  {{ value }}
  <f-select v-model="value" placeholder="请选择……"  :width="300">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
    <f-option :value="5">樱桃2</f-option>
    <f-option :value="6">樱桃3</f-option>
    <f-option :value="7">樱桃4</f-option>
    <f-option :value="8">黄瓜</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  // const a = 1

  const value = ref(5)
</script>
