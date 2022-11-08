<script lang="ts" setup>
  import { ref } from 'vue'
  const columns = ref([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '介绍',
      key: 'introduce'
    }
  ])
  const data = ref([
    {
      name: '卡莉斯塔',
      age: '22',
      introduce: '她的被动可以在发动攻击后进行小距离的跳跃'
    },
    {
      name: '艾希',
      age: '16',
      introduce: '拥有强大减速和控制能力的远程射手'
    },
    {
      name: '李青',
      age: '34',
      introduce: '非常优秀的打野英雄'
    },
    {
      name: '贾克斯',
      age: '109',
      introduce: '取得优势的武器可以输出成吨的伤害'
    }
  ])
</script>

<template>
  <div>
    <f-table :data="data" :columns="columns" />
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  div {
    width: 900px;
    margin: auto;
  }
</style>
