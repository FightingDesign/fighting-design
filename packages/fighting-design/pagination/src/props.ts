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
    default: (): number => 1,
    require: true
  },
  /**
   * 总页数
   */
  total: {
    type: Number,
    default: (): number => 0,
    require: true
  },
  /**
   * 每页条数
   */
  pageSize: {
    type: Number,
    default: (): number => 10
  },
  /**
   * 每页多少条
   */
  pageSizes: {
    type: Array as PropType<number[]>,
    default: (): null => null
  },
  /**
   * 是否带有背景色
   */
  background: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否带有圆角
   */
  round: {
    type: Boolean,
    default: (): boolean => false
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
    default: (): boolean => false
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
    default: (): boolean => false
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

export type PaginationPropsType = ExtractPropTypes<typeof Props>
