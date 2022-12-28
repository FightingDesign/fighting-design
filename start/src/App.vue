<script lang="ts" setup>
  import { ref } from 'vue'

  // const addId = (arr, parentId = '') => {
  //   arr.forEach((item, i) => {
  //     if (item.children && item.children.length) {
  //       item.id = Number(`${parentId}${i + 1}`)
  //       find(item.children, Number(`${parentId}${i + 1}`))
  //     } else {
  //       item.id = Number(`${parentId}${i + 1}`)
  //     }
  //   })

  //   return arr
  // }

  //   // const authDataCopy = deepClone(authData)
  //   const authDataCopy = JSON.parse(JSON.stringify(authData))
  //   find(authDataCopy)
  //   return authDataCopy
  // }

  const data = ref([
    {
      label: 'Node 1',
      children: [
        {
          label: 'Node 1-1',
          children: [{ label: 'Node 1-1-1' }, { label: 'Node 1-1-2' }, { label: 'Node 1-1-3' }]
        },
        { label: 'Node 1-2' },
        { label: 'Node 1-3' }
      ]
    },
    {
      label: 'Node 2',
      children: [
        { label: 'Node 2-1' },
        { label: 'Node 2-2' },
        { label: 'Node 2-3', children: [{ label: 'Node 2-3-1' }] }
      ]
    },
    {
      label: 'Node 3'
    }
  ])

  // const tree = find(data.value)

  // console.log(tree)
  // console.log(addParentId(tree))

  // function addParentId (arr) {
  //   arr.forEach(item => {
  //     let p = item.id

  //     if (item.children && item.children.length) {
  //       item.children.forEach(z => {
  //         z.parentId = p

  //         if (z.children && z.children.length) {
  //           addParentId(item.children)
  //         }
  //       })
  //     }
  //   })

  //   console.log(arr)
  // }
</script>

<template>
  <f-button type="primary" spread>没有涟漪</f-button>
  <f-button type="success" ripples>涟漪效果</f-button>
  <f-button type="warning" ripples>点我试试</f-button>
  <f-button type="danger" ripples simple>看看我</f-button>
  <f-button type="success" text ripples ripples-color="green"> 自定义涟漪颜色 </f-button>

  <!-- <f-tree :data="data" /> -->
</template>
