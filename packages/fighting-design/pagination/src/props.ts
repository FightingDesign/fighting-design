import {
  setBooleanProp,
  setObjectProp,
  setNumberProp,
  setFunctionProp,
  setArrayProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { PaginationEvent } from './interface'
import type { FightingIcon } from '../../_interface'

export const Props = {
  /** 当前选中页码 */
  current: {
    ...setNumberProp(1),
    require: true
  },
  /** 总页数 */
  total: {
    ...setNumberProp(0),
    require: true
  },
  /** 每页条数 */
  pageSize: setNumberProp(10),
  /** 是否启用选择器选择最大页数 */
  pageSelect: setArrayProp<number[]>(),
  /** 当页码超过多少时开始展开省略符号 */
  pagerCount: setNumberProp(7),
  /** 是否带有背景色 */
  background: setBooleanProp(),
  /** 是否带有圆角 */
  round: setBooleanProp(),
  /** 自定义的上一页图标 */
  prevIcon: setObjectProp<FightingIcon>(),
  /** 自定义的下一页图标 */
  nextIcon: setObjectProp<FightingIcon>(),
  /** 是否禁用 */
  disabled: setBooleanProp(),
  /** 是否展示快速跳转搜索框 */
  jumpSearch: setBooleanProp(),
  /** 点击上一页触发的回调 */
  onPrev: setFunctionProp<PaginationEvent>(),
  /** 点击下一页触发的回调 */
  onNext: setFunctionProp<PaginationEvent>(),
  /** 每页条数发生变化时触发的回调 */
  pageSizeChange: setFunctionProp<PaginationEvent>(),
  /** 改变页码回调函数 */
  onChange: setFunctionProp<PaginationEvent>()
} as const

/** pagination 组件 props 类型 */
export type PaginationProps = ExtractPropTypes<typeof Props>
