import type { ExtractPropTypes, PropType } from 'vue'
import type {
  HandleCurrentChange,
  HandlePrevClick,
  HandleNextClick,
  HandlePageChange
} from './interface'
import type { FightingIcon } from '../../_interface'

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
   * 是否启用选择器选择最大页数
   */
  pageSizes: {
    type: Array as PropType<number[]>,
    default: (): null => null
  },
  /**
   * 当页码超过多少时开始展开省略符号,默认为 7
   */
  pagerCount: {
    type: Number,
    default: (): number => 7
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
    type: Object as PropType<FightingIcon>,
    default: (): null => null
  },
  /**
   * 自定义的下一页图标
   */
  nextIcon: {
    type: Object as PropType<FightingIcon>,
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
   * 是否展示快速跳转搜索框
   */
  jumpSearch: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 点击上一页触发的回调
   */
  onPrev: {
    type: Function as PropType<HandlePrevClick>,
    default: (): null => null
  },
  /**
   * 点击下一页触发的回调
   */
  onNext: {
    type: Function as PropType<HandleNextClick>,
    default: (): null => null
  },
  /**
   * 每页条数发生变化时触发的回调
   */
  pageSizeChange: {
    type: Function as PropType<HandlePageChange>,
    default: (): null => null
  },
  /**
   * 改变页码回调函数
   */
  onChange: {
    type: Function as PropType<HandleCurrentChange>,
    default: (): null => null
  }
} as const

export type PaginationProps = ExtractPropTypes<typeof Props>
