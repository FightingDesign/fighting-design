<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('')
  const value = ref('')
</script>

<template>
  <f-trigger trigger="click" style="margin-left: 120px">
    <f-button type="primary">click 触发</f-button>

    <template #content>
      <f-empty content="在这里，后续提供更多服务" />
    </template>
  </f-trigger>

  {{ value }}
  <f-date-picker v-model:date="value1" />

  <f-select v-model="value" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>
</template>
