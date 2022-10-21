<script lang="ts" setup name="FTree">
  import { Props } from './tree'
  import { computed } from 'vue'
  import { treeToFlat, treeAddLevel } from '../../_utils'
  import type { ComputedRef } from 'vue'
  import type { TreeAddLevelReturnInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  // 扁平的树
  const treeData: ComputedRef<a[]> = computed((): a[] => {
    return treeToFlat(treeAddLevel(prop.data))
  })

  const handleClick = (item: a, index: number): void => {
    console.log(item, index)
  }
</script>

<template>
  <div class="f-tree">
    <div
      v-for="(item, index) in treeData"
      :key="index"
      class="f-tree__data"
      @click="handleClick(item, index)"
    >
      <div
        class="f-tree__label"
        :style="{ paddingLeft: 25 * (item.level - 1) + 'px' }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
