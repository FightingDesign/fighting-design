<script lang="ts" setup name="FTree">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronRightVue } from '../../_svg'
  import { treeToFlat, isArray, Add } from '../../_utils'
  import type { TreeData, TreeDataItem } from './interface'

  const prop = defineProps(Props)

  const treeIdData = computed((): TreeData => Add(prop.data))

  /**
   * 树形数据
   */
  const treeData = computed((): TreeData => treeToFlat(treeIdData.value))

  const hidden = (tree: TreeData): void => {
    isArray(tree) &&
      tree.forEach(item => {
        item.show = !item.show
      })
  }

  const getItem = (data: TreeData, id): void => {
    data.forEach(item => {
      if (item.id === id) {
        item.open = !item.open
        item.children && hidden(item.children)
      } else if (item.children && item.children.length) {
        getItem(item.children, id)
      }
    })
  }

  /**
   * 点击展开或关闭
   *
   * @param item 每一项
   */
  const handleClick = (item: TreeDataItem): void => {
    getItem(treeIdData.value, item.id)
  }
</script>

<template>
  <div class="f-tree">
    <div v-for="(item, index) in treeData" :key="index" class="f-tree__data">
      <div
        v-show="item.show"
        class="f-tree__label"
        :style="{ paddingLeft: 30 * (item.level - 1) + 5 + 'px' }"
        @click="handleClick(item)"
      >
        <f-svg-icon
          v-if="item.isChild"
          :class="{ 'f-tree__icon-animation': item.open }"
          :size="17"
          :icon="FIconChevronRightVue"
        />

        {{ item.label }}
      </div>
    </div>
  </div>
</template>
