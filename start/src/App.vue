<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
</script>

<template>
  <!-- <f-select v-model="value1" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option>樱桃</f-option>
  </f-select> -->

  <f-button class="start-btn" type="primary" size="large" href="/docs/install">
    开始使用
  </f-button>
</template>
