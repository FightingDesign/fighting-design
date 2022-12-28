/**
 * 扁平的树形结构类型接口
 * 
 * @param label label
 * @param level 标识
 * @param show 是否展示
 */
export interface TreeAddLevelReturn {
  label: string
  level: number
  show: boolean
}

export interface TreeDataItem {
  label: string
  level?: number
  show?: boolean
  children?: TreeDataItem[]
}
