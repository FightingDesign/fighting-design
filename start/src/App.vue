<script lang="ts" setup>
  import { FButton } from '../../packages/fighting-design/index'

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
    },
    {
      title: '操作',
      render: (h: Function): Function => {
        return h('div', { class: 'box' }, [
          h(
            FButton,
            {
              type: 'primary',
              round: true,
              click: () => {
                console.log('查看详情')
              }
            },
            {
              default: () => '查看详情'
            }
          ),
          h(
            FButton,
            {
              type: 'primary',
              round: true,
              click: () => {
                console.log('查看详情')
              }
            },
            {
              default: () => '查看详情'
            }
          )
        ])
      }
    }
  ]
  const data = [
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
  <f-table :data="data" optional :columns="columns" />
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
