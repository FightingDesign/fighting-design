import { computed } from 'vue'
import { Add, treeToFlat, isArray } from '../../_utils'
import type { TreeData } from '../../tree'
import type { UseTreeDataReturn } from './interface'

export * from './interface.d'

/**
 * 针对 tree 组件的树形结构的处理
 * 
 * @param data 树形结构
 * @returns 
 */
export const useTreeData = (data: TreeData): UseTreeDataReturn => {

  /**
   * 处理后的树形结构
   */
  const treeData = computed((): TreeData => Add(data))

  /**
   * 扁平是树形结构
   */
  const flatTreeData = computed((): TreeData => treeToFlat(treeData.value))

  /**
   * 隐藏节点方法
   * 
   * @param tree 树形结构
   */
  const hidden = (tree: TreeData): void => {
    isArray(tree) &&
      tree.forEach(item => {
        item.show = false
        item.open = false

        item.children && hidden(item.children)
      })
  }

  /**
   * 获取到指定的元素进行操作
   * 
   * @param data 树形结构
   * @param id id
   */
  const getItem = (data: TreeData, id: number): void => {
    data.forEach(item => {
      if (item.id === id) {
        if (item.open) {
          item.children && hidden(item.children)
        } else {
          // 子节点为关闭状态
          item.children &&
            item.children.forEach(child => {
              child.show = !child.show
            })
        }

        item.open = !item.open
      } else if (item.children && item.children.length) {
        getItem(item.children, id)
      }
    })
  }

  return {
    treeData,
    flatTreeData,
    getItem
  }
}
