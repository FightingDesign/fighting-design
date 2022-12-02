<script lang="ts" setup name="FTree">
  import { Props } from './props'
  import { computed } from 'vue'
  import { treeToFlat, treeAddLevel } from '../../_utils'
  import type { TreeAddLevelReturnInterface } from '../../_utils/tree/interface'

  const prop = defineProps(Props)

  // 扁平的树
  const treeData = computed((): TreeAddLevelReturnInterface[] => {
    return treeToFlat(treeAddLevel(prop.data))
  })

  const handleClick = (
    item: TreeAddLevelReturnInterface,
    index: number
  ): void => {
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
