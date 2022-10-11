import type {
  TreeAddLevelReturnInterface as a,
  TreeDataInterface as b
} from '../_interface'

/**
 * 扁平化树形结构
 * @param data 
 * @returns 
 */
export const treeToFlat = (data: b[]): a[] => {
  const result: a[] = []

  data.forEach((item: b): void => {
    const obj = {
      label: item.label,
      level: item.level,
      index: item.index,
      show: item.show
    } as a

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
export const treeAddLevel = (tree: b[]): b[] => {
  if (!Array.isArray(tree)) {
    return []
  }

  const recursive = (array: b[], level = 0): b[] => {
    level++

    return array.map((item: b, index): b => {
      item.level = level
      item.index = index
      // item.show = level === 1 ? true : false
      item.show = false

      const child: b[] = item.children as b[]

      if (child && child.length) {
        recursive(child, level)
      }

      return item
    })
  }

  return recursive(tree)
}
