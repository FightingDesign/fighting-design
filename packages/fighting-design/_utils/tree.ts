import type { treeAddLevelReturnInterface as a } from '../_interface'

/**
 * 扁平化树形结构
 * @param data 
 * @returns 
 */
export const treeToFlat = <T>(data: T[]): a[] => {
  const result: a[] = []
  data.forEach((item: T): void => {
    const obj = {
      label: item.label,
      level: item.level
    } as const
    result.push(obj)
    if (item.children) {
      result.push(...treeToFlat(item.children))
    }
  })
  return result
}

/**
 * 
 * @param tree 
 * @returns 
 */
export const treeAddLevel = <T>(tree: T[]): T[] => {
  if (!Array.isArray(tree)) {
    return []
  }
  const recursive = (array: T[], level = 0): T[] => {
    level++
    return array.map((item: T) => {
      item.level = level
      const child: T[] = item.children
      if (child && child.length) recursive(child, level)
      return item
    })
  }
  return recursive(tree)
}
