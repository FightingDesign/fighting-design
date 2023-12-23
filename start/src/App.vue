<template>
  <h1>{{ value || '1' }}</h1>
  <f-select v-model="value" placeholder="请选择……" filter>
    <f-option>香蕉</f-option>
    <f-option>苹果</f-option>
    <f-option>哈密瓜</f-option>
    <f-option>樱桃</f-option>
    <f-option>西瓜</f-option>
  </f-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
</script>
