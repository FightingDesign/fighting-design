<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('2')

  const change = (e, v) => {
    console.log('app', e, v)
  }
</script>

<template>
  <h3>{{ value }}</h3>
  <f-select v-model="value" placeholder="请选择……" :on-change="change">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>
