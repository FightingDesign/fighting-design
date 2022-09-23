<script lang="ts" setup name="FTree">
  import { Props } from './tree'
  import { ref } from 'vue'
  import { treeToFlat, treeAddLevel } from '../../_utils'
  import type { Ref } from 'vue'
  import type {
    treeAddLevelReturnInterface as a,
    dataInterface
  } from '../../_interface'

  const prop = defineProps(Props)

  // 扁平的树
  const treeData: Ref<a[]> = ref<a[]>(treeToFlat(treeAddLevel(prop.data)))

  // console.log(treeAddLevel(prop.data))

  const openedTree = (tree: dataInterface[]) => {
    console.log(tree)

    return tree.reduce((prev: a[], item: dataInterface): a[] => {
      // console.log(prev)
      // console.log(item)

      // 第一次循环，prev的值，默认为数组的第一项，
      // 而cur的值为数组的第二项，也就是第一次循环，
      // 第一次循环返回的结果回传给下一次循环中方法的第一个参数，
      // 也就是说、第二次循环方法中prev的值，是第一次循环方法返回的结果

      // console.log('上个元素', prev)
      // console.log('当前元素', item)

      return item.show
        ? prev.concat(item, openedTree(item.children))
        : prev.concat({ ...item, children: null })
    }, [])
  }

  console.log(openedTree(treeAddLevel(prop.data)))

  const handleClick = (item, index): void => {
    console.log(item, index)
  }
</script>

<template>
  <div class="f-tree">
    <div
      v-for="(item, index) in treeData"
      :key="index"
      class="f-tree-data"
      @click="handleClick(item, index)"
    >
      <div
        class="f-tree-label"
        :style="{ paddingLeft: 25 * (item.level - 1) + 'px' }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
