import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type {
  HandleCurrentChange,
  HandlePrevClick,
  HandleNextClick,
  HandlePageChange
} from './interface'

export const Props = {
  /**
   * 当前选中页码
   */
  current: {
    type: Number,
    default: (): Number => 1
  },
  /**
   * 每页条数
   */
  pageSize: {
    type: Number,
    default: (): Number => 10
  },
  /**
   * 每页多少条
   */
  pageSizes: {
    type: Array<number>,
    default: (): number[] => [10, 20, 30, 40, 50]
  },
  /**
   * 是否需要背景色
   */
  background: {
    type: Boolean,
    default: (): Boolean => false
  },
  /**
   * 是否需要圆角
   */
  round: {
    type: Boolean,
    default: (): Boolean => false
  },
  /**
   * 总数
   */
  total: {
    type: Number,
    default: 0,
    require: true
  },
  /**
   * 自定义的上一页图标
   */
  prevIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 自定义的下一页图标
   */
  nextIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: (): Boolean => false
  },
  /**
   * 改变页码回调函数
   */
  change: {
    type: Function as PropType<HandleCurrentChange>,
    default: (): null => null
  },
  /**
   * 是否展示快速跳转搜索框
   */
  jumpSearch: {
    type: Boolean,
    default: (): Boolean => false
  },
  /**
   * 点击上一页触发的回调
   */
  prevClick: {
    type: Function as PropType<HandlePrevClick>,
    default: (): null => null
  },
  /**
   * 点击下一页触发的回调
   */
  nextClick: {
    type: Function as PropType<HandleNextClick>,
    default: (): null => null
  },
  /**
   * 每页条数发生变化时触发的回调
   */
  pageSizeChange: {
    type: Function as PropType<HandlePageChange>,
    default: (): null => null
  }
} as const

export const Emits = {
  'update:current': (current: number): boolean => typeof current === 'number',
  'update:pageSize': (pageSize: number): boolean => typeof pageSize === 'number'
} as const

export type PaginationPropsType = ExtractPropTypes<typeof Props>
