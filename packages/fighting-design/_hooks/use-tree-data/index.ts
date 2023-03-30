import { computed } from 'vue'
import { treeAddKey, treeToFlat, isArray } from '../../_utils'
import type { ComputedRef } from 'vue'

/**
 * 处理数据结果之前的类型接口
 *
 * @param { string } label label
 * @param { number } [level] 标识
 * @param { boolean } [open] 是否打开
 * @param { boolean } [isChild] 是否带有子节点
 * @param { boolean } [show] 是否展示
 * @param { number } [id] id
 * @param { Array } [children] 子节点
 */
export interface FormatTreeData {
  label: string
  level?: number
  open?: boolean
  isChild?: boolean
  show?: boolean
  id?: number
  children?: FormatTreeData[]
}

/**
 * 处理数据结果之后的类型接口
 *
 * @param { string } label label
 * @param { number } level 标识
 * @param { boolean } open 是否打开
 * @param { boolean } isChild 是否带有子节点
 * @param { boolean } show 是否展示
 * @param { number } id id
 * @param { Array } children 子节点
 */
export interface FlatTreeData {
  label: string
  level: number
  open: boolean
  isChild: boolean
  show: boolean
  id: number
  children?: FlatTreeData[]
}

/**
 * useTreeData 返回值类型接口
 *
 * @param { Object } treeData 处理后的树形结构
 * @param { Object } flatTreeData 扁平是树形结构
 * @param { Function } getItem 获取到指定的元素进行操作
 */
export interface UseTreeDataReturn {
  treeData: ComputedRef<FlatTreeData[]>
  flatTreeData: ComputedRef<FlatTreeData[]>
  getItem: (data: FormatTreeData[], id: number) => void
}

/**
 * 针对 tree 组件的树形结构的处理
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } data 树形结构
 * @returns { Object }
 */
export const useTreeData = (data: FormatTreeData): UseTreeDataReturn => {
  /** 处理后的树形结构 */
  const treeData = computed((): FlatTreeData[] => treeAddKey(data) as FlatTreeData[])

  /** 扁平是树形结构 */
  const flatTreeData = computed(
    (): FlatTreeData[] => treeToFlat(treeData.value) as FlatTreeData[]
  )

  /**
   * 隐藏节点方法
   *
   * @param { Array } tree 树形结构
   */
  const hidden = (tree: FormatTreeData[]): void => {
    isArray(tree) &&
      tree.forEach((item: FormatTreeData): void => {
        item.show = false
        item.open = false

        item.children && hidden(item.children)
      })
  }

  /**
   * 获取到指定的元素进行操作
   *
   * @param { Array } data 树形结构
   * @param { number } id id
   */
  const getItem = (data: FormatTreeData[], id: number): void => {
    data.forEach((item: FormatTreeData): void => {
      if (item.id === id) {
        if (item.open) {
          item.children && hidden(item.children)
        } else {
          /** 子节点为关闭状态 */
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
