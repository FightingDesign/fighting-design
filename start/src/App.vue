<script lang="ts" setup>
  import { ref } from 'vue'

  const option2 = ref(['汉堡'])
  const columns = [
    {
      title: '日期',
      key: 'date',
      width: '100px'
    },
    {
      title: '姓名',
      key: 'name',
      width: '300px'
    },
    {
      title: '地址',
      key: 'address'
    }
  ]
  const data = [
    {
      date: '2021-11-02',
      name: '张三',
      address: '浙江省杭州市上城区 231 号'
    },
    {
      date: '2021-12-04',
      name: '李四',
      address: '浙江省杭州市西湖区 12 号'
    },
    {
      date: '2021-10-01',
      name: '王英',
      address: '浙江省杭州市临平区 2 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-12-04',
      name: '李四',
      address: '浙江省杭州市西湖区 12 号'
    },
    {
      date: '2021-10-01',
      name: '王英',
      address: '浙江省杭州市临平区 2 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-12-04',
      name: '李四',
      address: '浙江省杭州市西湖区 12 号'
    },
    {
      date: '2021-10-01',
      name: '王英',
      address: '浙江省杭州市临平区 2 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    },
    {
      date: '2021-11-03',
      name: '李逵',
      address: '浙江省杭州市拱墅区 199 号'
    }
  ]
</script>

<template>
  <f-checkbox v-model="option2" :show-label="false" label="鸡肉卷" />
  <f-checkbox v-model="option2" :show-label="false" label="鸡排" />
  <f-checkbox v-model="option2" :show-label="false" label="汉堡" />

  <h1>{{ option2 }}</h1>

  <f-table :data="data" optional :columns="columns" height="500px" />
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
