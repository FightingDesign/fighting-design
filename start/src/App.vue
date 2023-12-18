<template>
  <h1>{{ value }}</h1>
  <f-select v-model="value" placeholder="请选择……">
    <f-option :value="0">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>
