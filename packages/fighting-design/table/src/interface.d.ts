export type { TableProps } from './table'

/**
 * 表格居中方式类型
 */
export type TableAlign = 'left' | 'center' | 'right'

/**
 * 表格数据类型
 */
export type TableDate = Record<string, unknown>[]

/**
 * 表格表头每一项配置类型
 */
export interface TableColumns {
  title: string
  key: string
  render?: Function
  width?: number | string | undefined
}
