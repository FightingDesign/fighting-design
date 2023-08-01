<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>

<template>
  <f-select v-model="value" placeholder="请选择……" disabled>
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>

  <f-select v-model="value" placeholder="请选择……" style="margin-left: 30px">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2" disabled>苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>
