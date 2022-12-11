import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingSize, FightingType } from '../../_interface'

export const Props = {
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue null
   */
  size: {
    type: String as PropType<FightingSize>,
    default: (): null => null,
    validator: (val: FightingSize): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 按钮的类型（非自定义按钮颜色时有效）
   *
   * @values default primary success danger warning
   * @defaultValue null
   */
  type: {
    type: String as PropType<FightingType>,
    default: (): null => null,
    validator: (val: FightingType): boolean => {
      return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
    }
  }
} as const

export type FightingGlobalProps = ExtractPropTypes<typeof Props>

export const FIGHTING_GLOBAL_PROPS_KEY: InjectionKey<FightingGlobalProps> = Symbol('fighting-global-props-key')
