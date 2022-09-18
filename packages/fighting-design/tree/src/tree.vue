<script lang="ts" setup name="FTree">
  import { Props } from './tree'
  import { computed, ref } from 'vue'
  import { treeToFlat, treeAddLevel } from '../../_utils'
  import type { ComputedRef } from 'vue'
  import type { treeAddLevelReturnInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const treeDate: ComputedRef<a[]> = computed((): a[] => {
    return treeToFlat(treeAddLevel(prop.data))
    // return treeToFlat(treeAddLevel(prop.data)).filter((item) => {
    //   return item.show
    // })
  })

  // 没有扁平的
  // const treeDate = ref(treeAddLevel(prop.data))

  // const treeDateFilter = computed(() => {
  //   return treeToFlat(treeDate.value).filter((item) => {
  //     return item.show
  //   })
  // })

  // const treeDateFilter = (tree) => {
  //   return treeToFlat(tree).filter((item) => {
  //     return item.show
  //   })
  // }

  // // console.log(treeToFlat(treeDate.value))
  // // console.log(treeDateFilter.value)

  // const handleClick = (item, index): void => {
  //   console.log(item, index)

  //   // item.children.map((item) => {
  //   treeDate.value[index].children.map((item) => {
  //     return (item.show = true)
  //   })

  //   // console.log(treeDateFilter(treeDate.value))

  //   treeDate.value = treeDateFilter(treeDate.value)
  // }
</script>

<template>
  <div class="f-tree">
    <!-- <div
      v-for="(item, index) in treeDate"
      v-show="item.show"
      :key="index"
      class="f-tree-data"
      @click="handleClick(item, index)"
    > -->
    <div v-for="(item, index) in treeDate" :key="index" class="f-tree-data">
      <div
        class="f-tree-label"
        :style="{ paddingLeft: 25 * (item.level - 1) + 'px' }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
