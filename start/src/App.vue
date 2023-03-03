<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)
  const value = ref('')

  const pagesize = ref(10)

  const pageSizes = ref([10, 20, 30, 40, 50])

  const change = (e, v): void => {
    console.log(e, v)
  }

  const value1 = ref('22222')

  setTimeout(() => {
    value1.value = '哈哈哈哈'
  }, 1000)
</script>

<template>
  <input v-model="value1" type="text" @input="change" />

  <p>当前页码{{ current }}，每页尺寸{{ pagesize }}</p>
  <f-pagination
    v-model:current="current"
    v-model:page-size="pagesize"
    jump-search
    :total="total"
    :page-sizes="pageSizes"
  />

  <h3>{{ value }}</h3>

  <f-select v-model="value" placeholder="请选择……" :on-change="change">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>

  <h3>{{ value1 }}</h3>
  <f-input v-model="value1" type="text" placeholder="请输入...." :on-enter="change" search />
  <f-input v-model="value1" type="text" placeholder="请输入...." />
</template>
