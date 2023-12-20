import {
  setBooleanProp,
  setStringProp,
  setStringNumberProp,
  setArrayProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { TableAlign, TableData, TableColumns } from './interface'

export const Props = {
  /** 数据列表 */
  data: setArrayProp<TableData>(),
  /** 标题数据 */
  columns: setArrayProp<TableColumns[]>(),
  /**
   * 内容对齐方式
   *
   * @values left center right
   * @default left
   */
  align: setStringProp<TableAlign>('left', (val: TableAlign): boolean => {
    return (['left', 'center', 'right'] as const).includes(val)
  }),
  /** 是否显示边框 */
  border: setBooleanProp(),
  /** 是否可选择 */
  select: setBooleanProp(),
  /** 是否显示序号 */
  num: setBooleanProp(),
  /** 是否显示斑马纹 */
  zebra: setBooleanProp(),
  /** 自定义斑马纹颜色 */
  zebraColor: setStringProp(),
  /** 自定义表格高度 */
  height: setStringNumberProp(),
  /** 自定义表格宽度 */
  width: setStringNumberProp(),
  /** 自定义背景颜色 */
  bgColor: setStringProp(),
  /** 自定义头部背景颜色 */
  headBgColor: setStringProp(),
  /** 是否展示头部 */
  showHead: setBooleanProp(true),
  /** 切换选项触发的回调 */
  onSelect: setFunctionProp()
} as const

/** table 组件 props 类型 */
export type TableProps = ExtractPropTypes<typeof Props>
