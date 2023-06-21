<script lang="ts" setup>
  import { ref } from 'vue'

  const current = ref(1)
  const total = ref(100)

  const pagesize = ref(10)

  const pageSizes = ref([10, 20, 30, 40, 50])

  const value = ref('')

  const ch = (e, v, n) => console.log(e, v)

  /** 下拉菜单绑定的默认值，每页条数 */
  const pagesLen = ref<number>(10)
</script>

<template>
  <f-select v-model="pagesLen" :width="120" :on-change="ch">
    <f-option v-for="item in pageSizes" :key="item" :value="item" :label="item + '/页'" />
  </f-select>

  <!-- :on-change="ch" -->
  <f-select v-model="value" placeholder="请选择……">
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
  </f-select>

  {{ pagesize }}
  <f-pagination
    v-model:current="current"
    v-model:page-size="pagesize"
    :total="total"
    background
    round
    :page-sizes="pageSizes"
  />
</template>
