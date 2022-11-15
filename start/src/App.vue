<script lang="ts" setup>
  import { ref } from 'vue'
  // import { FIconSnowflake } from '@fighting-design/fighting-icon'

  // const value3 = ref(true)
  // const value1 = ref('')

  const current = ref(10)
  const total = ref(100)
  const pageSizes = ref([10, 20, 30, 40])
</script>

<template>
  <!-- <f-pagination
    v-model:current="current"
    :total="total"
    background
    jump-search
  /> -->

  <f-button round type="primary">左边的</f-button>
  <f-button-group>
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group>
  <!-- 
  <f-button-group size="small">
    <f-button round type="primary">左边的</f-button>
    <f-button round type="primary">中间的</f-button>
    <f-button round type="primary">右边的</f-button>
  </f-button-group> -->
  <!-- <f-select v-model="value1" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>

  <f-alert type="default">默认提示信息</f-alert>
  <f-alert type="primary">主要提示信息</f-alert>
  <f-alert type="success">成功提示信息</f-alert>
  <f-alert type="danger">危险提示信息</f-alert>
  <f-alert type="warning">警告提示信息</f-alert> -->
</template>
