<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref('')
  const current = ref(1)
  const total = ref(100)
  const pageSizes = ref([10, 20, 30])
</script>

<template>
  <f-pagination
    v-model:current="current"
    :total="total"
    :page-sizes="pageSizes"
  />

  <f-select v-model="value" placeholder="请选择……">
    <f-option
      v-for="item in [10, 20, 30]"
      :key="item"
      :value="item"
      :label="item + '/页'"
    />
    <f-option :value="1">香蕉</f-option>
    <f-option :value="2">苹果</f-option>
    <f-option :value="3">哈密瓜</f-option>
    <f-option :value="4">樱桃</f-option>
    <div>
      <f-option :value="45">樱桃1</f-option>
      <div>
        <div>
          <f-option :value="5222">樱桃1222</f-option>
        </div>
      </div>
    </div>
  </f-select>
</template>
