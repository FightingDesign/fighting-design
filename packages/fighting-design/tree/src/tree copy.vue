<script lang="ts" setup name="FTree">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconPlusVue, FIconMinus } from '../../_svg'
  import { treeAddLevel } from '../../_utils'
  import type { TreeData, TreeDataItem } from './interface'

  const prop = defineProps(Props)

  /**
   * 树形数据
   */
  const treeData = computed((): TreeData => {
    return treeAddLevel(prop.data)
  })

  /**
   * 点击展开或关闭
   *
   * @param item 每一项
   */
  const handleClick = (item: TreeDataItem): void => {
    // 如果有孩子，则将孩子全部隐藏
    if (item.children && item.children.length) {
      item.children.forEach((chi: TreeDataItem): void => {
        chi.show = !chi.show
      })
    }
  }
</script>

<template>
  <div class="f-tree">
    <transition-group name="f-tree-animation">
      <div v-for="(item, index) in treeData" v-show="item.show" :key="index" class="f-tree__data">
        <div class="f-tree__label" @click="handleClick(item)">
          <f-svg-icon
            v-if="item.children && item.children.length"
            :size="14"
            :icon="item.children[0].show ? FIconMinus : FIconPlusVue"
          />

          <div class="f-tree-Label-text">{{ item.label }} ---- {{ item.level }}</div>
        </div>

        <!-- 如果有孩子，则递归组件 -->
        <template v-if="item.children && item.children.length">
          <f-tree :data="item.children" />
        </template>
      </div>
    </transition-group>
  </div>
</template>
