<script lang="ts" setup>
  import { Props, TREE_PROPS_KEY } from './props'
  import { provide } from 'vue'
  import { FTreeItem } from '../components'
  import type { TreeData } from './interface'
  import type { TreeItemModel } from '../components/tree-item/interface'

  defineOptions({ name: 'FTree' })

  const prop = defineProps(Props)

  provide(TREE_PROPS_KEY, prop)

  /**
   * 给树组件添加层级
   *
   * @param { Object } tree 树形数据
   * @param { number } __level 层级
   */
  const markTreeLevels = (tree: TreeData, __level = 0): TreeItemModel[] => {
    const markedTree: TreeItemModel[] = []

    for (const node of tree) {
      const newNode = { ...node, __level } as TreeItemModel

      if (node.children) {
        newNode.children = markTreeLevels(node.children, __level + 1)
      }

      markedTree.push(newNode)
    }

    return markedTree
  }

  const tree = markTreeLevels(prop.data)
</script>

<template>
  <div v-if="tree && tree.length" role="tree" class="f-tree">
    <f-tree-item v-for="(item, index) in tree" :key="index" :model="item">
      <template #options>
        <slot name="options" />
      </template>
    </f-tree-item>
  </div>
</template>
