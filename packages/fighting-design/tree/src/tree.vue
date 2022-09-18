<script lang="ts" setup name="FTree">
  import { Props } from './tree'
  import { computed } from 'vue'
  import { treeToFlat, treeAddLevel } from '../../_utils'
  import type { dataInterface as a } from './interface'

  const prop = defineProps(Props)

  const treeDate = computed(() => {
    console.log(treeAddLevel<a>(prop.data))
    return treeToFlat<a>(treeAddLevel<a>(prop.data))
  })
</script>

<template>
  <div class="f-tree">
    <div v-for="(item, index) in treeDate" :key="index" class="f-tree-data">
      <div
        class="f-tree-label"
        :style="{ paddingLeft: 20 * (item.level - 1) + 'px' }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
