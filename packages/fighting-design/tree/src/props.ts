import { setArrayProp, setFunctionProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { TreeData, TreeProvide } from './interface'

export const Props = {
  /** 数据 */
  data: setArrayProp<TreeData>(),
  /** 点击标签执行的回调 */
  onClickLabel: setFunctionProp()
} as const

/** tree 组件 props 类型 */
export type TreeProps = ExtractPropTypes<typeof Props>

/** tree 组件注入的依赖项 */
export const TREE_PROPS_KEY: InjectionKey<TreeProvide> = Symbol('tree-props-key')
