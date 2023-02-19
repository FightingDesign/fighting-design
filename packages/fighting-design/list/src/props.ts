import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import { FIGHTING_SIZE } from '../../_tokens'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 是否显示斑马纹 */
  zebra: setBooleanProp(),
  /** 是否居中 */
  center: setBooleanProp(),
  /** 自定义文字颜色 */
  textColor: setStringProp(),
  /** 自定义边框颜色 */
  borderColor: setStringProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @default middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /** 最大高度 */
  maxHeight: setStringNumberProp(),
  /** 自定义斑马纹颜色 */
  zebraColor: setStringProp()
} as const

/** list 组件 props 类型 */
export type ListProps = ExtractPropTypes<typeof Props>

/** list 组件注入的依赖项 */
export const LIST_PROPS_KEY: InjectionKey<ListProps> = Symbol('list-props-key')
