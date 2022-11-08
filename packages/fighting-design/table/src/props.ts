import type { ExtractPropTypes, PropType } from 'vue'
import type { TableAlignType, TableDateType, TableColumnsInterface } from './interface'

export const Props = {
  /**
   * 数据列表
   */
  data: {
    type: Array as PropType<TableDateType>,
    default: (): null => null
  },
  /**
   * 标题数据
   */
  columns: {
    type: Array as PropType<TableColumnsInterface[]>,
    default: (): null => null
  },
  /**
   * 内容对齐方式
   */
  align: {
    type: String as PropType<TableAlignType>,
    default: (): TableAlignType => 'left',
    validator: (val: TableAlignType): boolean => {
      return (['left', 'center', 'right'] as const).includes(val)
    }
  },
  /**
   * 是否显示边框
   */
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否显示序号
   */
  num: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否显示斑马纹
   */
  zebra: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义斑马纹颜色
   */
  zebraColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义表格高度
   */
  height: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 是否支持多选
   */
  optional: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义背景颜色
   */
  bgColor: {
    type: String,
    default: (): null => null
  },
  /**
   * 自定义头部背景颜色
   */
  headBgColor: {
    type: String,
    default: (): null => null
  }
} as const

export type TablePropsType = ExtractPropTypes<typeof Props>
