<script lang="ts" setup name="FTree">
  import { Props } from './tree'
  import { computed } from 'vue'
  import { treeToFlat, treeAddLevel } from '../../_utils'
  import type { ComputedRef } from 'vue'
  import type { treeAddLevelReturnInterface as a } from '../../_interface'

  const prop = defineProps(Props)

  const treeDate: ComputedRef<a[]> = computed((): a[] => {
    return treeToFlat(treeAddLevel(prop.data))
  })
</script>

<template>
  <div class="f-tree">
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
