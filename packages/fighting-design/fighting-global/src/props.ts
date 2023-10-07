import { setStringProp } from '../../_utils'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { FightingSize, FightingType, FightingLang } from '../../_interface'

export const Props = {
  /**
   * 尺寸
   *
   * @values large middle small mini
   */
  size: setStringProp<FightingSize>(undefined, (val: FightingSize): boolean => {
    return FIGHTING_SIZE.includes(val)
  }),
  /**
   * 按钮的类型（非自定义按钮颜色时有效）
   *
   * @values default primary success danger warning info
   */
  type: setStringProp<FightingType>(undefined, (val: FightingType): boolean => {
    return FIGHTING_TYPE.includes(val)
  }),
  /**
   * 不同语言
   *
   * @values en-US zh-CN
   * @default zh-CN
   */
  lang: setStringProp<FightingLang>('zh-CN', (val: FightingLang): boolean => {
    return (['en-US', 'zh-CN'] as const).includes(val)
  })
} as const

/** fighting-global 组件 props 类型 */
export type FightingGlobalProps = ExtractPropTypes<typeof Props>

/** fighting-global 组件注入的依赖项 */
export const FIGHTING_GLOBAL_PROPS_KEY: InjectionKey<FightingGlobalProps> = Symbol(
  'fighting-global-props-key'
)
