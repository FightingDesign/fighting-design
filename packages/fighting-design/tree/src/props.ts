import { setFunctionProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { TreeData, TreeProvide, TreeClickLabel, TreeDataItem } from './interface'

export const Props = {
  /** 
   * 树形数据
   *
   * 可以是对象或者数组两种状态
   */
  data: {
    type: [Object, Array] as PropType<TreeDataItem | TreeData>,
    default: (): TreeData => []
  },
  /** 点击标签执行的回调 */
  onClickLabel: setFunctionProp<TreeClickLabel>()
} as const

/** tree 组件 props 类型 */
export type TreeProps = ExtractPropTypes<typeof Props>

/** tree 组件注入的依赖项 */
export const TREE_PROPS_KEY: InjectionKey<TreeProvide> = Symbol('tree-props-key')
