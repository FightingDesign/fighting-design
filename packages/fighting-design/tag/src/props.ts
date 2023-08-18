import {
  setBooleanProp,
  setStringProp,
  setObjectProp,
  setFunctionProp
} from '../../_utils'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { ExtractPropTypes } from 'vue'
import type {
  HandleMouse,
  FightingType,
  FightingSize,
  FightingIcon
} from '../../_interface'

export const Props = {
  /**
   * 标签类型
   *
   * @values default primary success danger warning info
   */
  type: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /** 是否可关闭 */
  close: setBooleanProp(),
  /** 是否为圆角 */
  round: setBooleanProp(),
  /** 自定义背景色 */
  background: setStringProp(),
  /** 自定义文字颜色 */
  color: setStringProp(),
  /** 左侧 icon */
  beforeIcon: setObjectProp<FightingIcon>(),
  /** 右侧 icon */
  afterIcon: setObjectProp<FightingIcon>(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   */
  size: setStringProp<FightingSize>(undefined, (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 是否为简约模式 */
  simple: setBooleanProp(),
  /** 是否为块级元素 */
  block: setBooleanProp(),
  /** 线性的 */
  line: setBooleanProp(),
  /** 点击关闭按钮触发 */
  onClose: setFunctionProp<HandleMouse>(),
  /** 点击按钮触发 */
  onClick: setFunctionProp<HandleMouse>()
} as const

/** tag 组件 props 类型 */
export type TagProps = ExtractPropTypes<typeof Props>
