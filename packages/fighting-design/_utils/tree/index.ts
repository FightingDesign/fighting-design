import { isArray } from '..'
import type { FormatTreeData } from '../../_hooks'

/**
 * 扁平化树形结构
 *
 * @param { Array } data 树形数据
 * @returns { Array }
 */
export const treeToFlat = (data: FormatTreeData[]): FormatTreeData[] => {
  const result: FormatTreeData[] = []

  data.forEach((item: FormatTreeData): void => {
    result.push(item)

    if (item.children) {
      result.push(...treeToFlat(item.children))
    }
  })

  return result
}

/**
 * 给树形结构添加一些配置键
 *
 * @param { Object } tree 树形结构
 * @returns { Array } 添加一些配置键的树形结构
 */
export const treeAddKey = (tree: FormatTreeData): FormatTreeData[] => {
  if (!isArray(tree)) return []

  /**
   * 给一棵树添加各种所需的配置键
   *
   * @param { Array } array 树形结构数组
   * @param { number } [level = 0] 层级
   * @returns { Array } 添加了各种键的树形结构
   */
  const addKey = (array: FormatTreeData[], level = 0): FormatTreeData[] => {
    level++

    return array.map((item: FormatTreeData): FormatTreeData => {
      item.level = level
      item.show = item.level === 1 ? true : false
      item.open = false
      item.isChild = !!item.children

      /** 尝试获取到孩子节点 */
      const child: FormatTreeData[] | undefined = item.children

      if (child && child.length) {
        addKey(child, level)
      }

      return item
    })
  }

  /**
   * 给树形结构添加 id
   *
   * @param { Array } arr 树形数组
   * @param { string } [parentId] 父级 id
   * @returns { Array } 带有 id 的树形结构
   */
  const addId = (arr: FormatTreeData[], parentId = ''): FormatTreeData[] => {
    arr.forEach((item, i: number): void => {
      if (item.children && item.children.length) {
        item.id = Number(`${parentId}${i + 1}`)
        addId(item.children, `${parentId}${i + 1}`)
      } else {
        item.id = Number(`${parentId}${i + 1}`)
      }
    })

    return arr
  }

  return addId(addKey(tree))
}
