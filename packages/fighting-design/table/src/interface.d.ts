export type { TablePropsType } from './table'

/**
 * 表格居中方式类型
 */
export type TableAlignType = 'left' | 'center' | 'right'

/**
 * 表格数据类型
 */
export type TableDateType = object[]

/**
 * 表格表头每一项配置类型
 */
export interface TableColumnsInterface {
  title: string
  key: string
  render?: Function
  width?: number | string | undefined
}
