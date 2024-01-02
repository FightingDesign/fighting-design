<script lang="ts" setup>
  import { Props, TREE_PROPS_KEY } from './props'
  import { provide, toRef, reactive, ref } from 'vue'
  import { FTreeItem } from '../components'
  import { isArray, isObject } from '../../_utils'
  import { FCheckboxGroup } from '../../checkbox-group'
  import type { TreeData, TreeProvide, TreeDataItem } from './interface'
  import type { TreeItemModel } from '../components'
  import type { CheckboxGroupChange } from '../../checkbox-group'

  const prop = defineProps(Props)
  const modelValue = defineModel('check', { type: Array, default: [] })

  defineOptions({ name: 'FTree' })

  /**
   * 给树组件添加层级
   *
   * @param { Object } tree 树形数据
   * @param { number } __level 层级
   */
  const markTreeLevels = (
    tree: TreeDataItem | TreeData,
    __level = 0
  ): TreeItemModel[] => {
    // 先判断数据类型
    if (isObject(tree)) {
      tree = [tree] as TreeData
    }

    /** 存储格式化后的树 */
    const markedTree: TreeItemModel[] = []

    if (isArray(tree)) {
      for (const node of tree) {
        const newNode = { ...node, __level } as TreeItemModel

        if (node.children) {
          newNode.children = markTreeLevels(node.children, __level + 1)
        }

        markedTree.push(newNode)
      }
    }

    return markedTree
  }

  /** 处理后的树形结构 */
  const tree: TreeItemModel[] = markTreeLevels(prop.data)

  /** 多选列表 */
  const checkOption = ref([])

  const checkboxChange: CheckboxGroupChange = (val): void => {
    modelValue.value = val
  }

  // 注入依赖项
  provide<TreeProvide>(
    TREE_PROPS_KEY,
    reactive({
      onClickLabel: toRef(prop, 'onClickLabel'),
      isCheck: toRef(prop, 'isCheck'),
      offset: toRef(prop, 'offset'),
      tree
    })
  )
</script>

<template>
  <div role="tree" class="f-tree">
    <!-- 可多选的 -->
    <f-checkbox-group
      v-if="isCheck"
      v-model="checkOption"
      style="display: block"
      :on-change="checkboxChange"
    >
      <template v-for="(item, index) in tree" :key="index">
        <f-tree-item :model="item">
          <template #options>
            <slot name="options" />
          </template>
        </f-tree-item>
      </template>
    </f-checkbox-group>

    <!-- 标准的 -->
    <template v-else>
      <f-tree-item v-for="(item, index) in tree" :key="index" :model="item">
        <template #options>
          <slot name="options" />
        </template>
      </f-tree-item>
    </template>
  </div>
</template>
