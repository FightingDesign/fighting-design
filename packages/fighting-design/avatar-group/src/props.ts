import {
  isNumber,
  isString,
  setBooleanProp,
  setStringProp,
  setStringNumberProp
} from '../../_utils'
import { FIGHTING_SIZE, FIGHTING_FIT } from '../../_tokens'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { FightingSize, FightingFit } from '../../_interface'

export const Props = {
  /** 偏移距离 */
  positionSize: setStringNumberProp(),
  /** 是否为圆角 */
  round: setBooleanProp(true),
  /**
   * 头像大小
   *
   * 可传入字符串使用内置大小
   *
   * 也可以传入数字，数字将自动转换为 px 单位
   *
   * @values large middle small mini
   * @default middle
   */
  size: {
    type: [String, Number] as PropType<FightingSize | number>,
    default: (): FightingSize => 'middle',
    validator: (val: FightingSize | number): boolean => {
      if (isString(val)) {
        return FIGHTING_SIZE.includes(val)
      } else if (isNumber(val)) {
        return val >= 1
      }
      return false
    }
  },
  /** 是否懒加载头像 */
  lazy: setBooleanProp(),
  /**
   * 如何适应容器
   *
   * 原生样式属性
   *
   * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
   * @values fill contain cover none scale-down
   */
  fit: setStringProp<FightingFit>(undefined, (val: FightingFit): boolean => {
    return FIGHTING_FIT.includes(val)
  })
} as const

/** avatar-group 组件 prop 类型 */
export type AvatarGroupProps = ExtractPropTypes<typeof Props>

/** avatar-group 注入的依赖项 */
export const AVATAR_GROUP_PROPS_KEY: InjectionKey<AvatarGroupProps> = Symbol(
  'avatar-group-props-key'
)
