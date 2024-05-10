<template>
  {{ value }}
  <f-select v-model="value" placeholder="请选择……" filter>
    <f-option>香蕉</f-option>
    <f-option>苹果</f-option>
    <f-option>哈密瓜</f-option>
    <f-option>樱桃</f-option>
    <f-option>樱桃2</f-option>
    <f-option>樱桃3</f-option>
    <f-option>樱桃4</f-option>
    <f-option>黄瓜</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>
