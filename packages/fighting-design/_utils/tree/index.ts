import type { TreeAddLevelReturn, TreeData } from './interface'

/**
 * 扁平化树形结构
 * @param data
 * @returns
 */
export const treeToFlat = (data: TreeData[]): TreeAddLevelReturn[] => {
  const result: TreeAddLevelReturn[] = []

  data.forEach((item: TreeData): void => {
    const obj: TreeAddLevelReturn = {
      label: item.label,
      level: item.level,
      index: item.index,
      show: item.show
    } as TreeAddLevelReturn

    result.push(obj)

    if (item.children) {
      result.push(...treeToFlat(item.children))
    }
  })

  return result
}

/**
 * 给 tree 添加 level 层级标注
 * @param tree
 * @returns
 */
export const treeAddLevel = (tree: TreeData[]): TreeData[] => {
  if (!Array.isArray(tree)) {
    return []
  }

  const recursive = (array: TreeData[], level = 0): TreeData[] => {
    level++

    return array.map((item: TreeData, index): TreeData => {
      item.level = level
      item.index = index
      item.show = false

      const child: TreeData[] = item.children as TreeData[]

      if (child && child.length) {
        recursive(child, level)
      }

      return item
    })
  }

  return recursive(tree)
}
