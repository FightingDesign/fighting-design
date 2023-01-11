import { setBooleanProp, setStringProp, setStringNumberProp } from '../../_utils'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingSize } from '../../_interface'

export const Props = {
  /** 是否显示斑马纹 */
  zebra: setBooleanProp(),
  /** 是否居中 */
  center: setBooleanProp(),
  /** 自定义边框颜色 */
  borderColor: setStringProp(),
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: setStringProp<FightingSize>('middle', (val: FightingSize): boolean => {
    return (['large', 'middle', 'small', 'mini'] as const).includes(val)
  }),
  /** 最大高度 */
  maxHeight: setStringNumberProp(),
  /** 自定义斑马纹颜色 */
  zebraColor: setStringProp()
} as const

export type ListProps = ExtractPropTypes<typeof Props>

export const LIST_PROPS_KEY: InjectionKey<ListProps> = Symbol('list-props-key')
