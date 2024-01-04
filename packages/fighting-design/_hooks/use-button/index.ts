import { inject, useSlots, computed } from 'vue'
import { useGlobal, useColor } from '..'
import { sizeChange } from '../../_utils'
import { BUTTON_GROUP_PROPS_KEY } from '../../button-group/src/props'
import type { ButtonProps } from '../../button'
import type { CSSProperties, Slots, ComputedRef } from 'vue'
import type { FightingSize } from '../../_interface'
import type { ClassList } from '../../_interface'

/**
 * useButton 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } style 样式列表
 */
export interface UseButtonReturn {
  classList: ComputedRef<ClassList>
  style: ComputedRef<CSSProperties>
}

/**
 * button 组件方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop prop 列表
 * @returns { Object }
 */
export const useButton = (prop: ButtonProps): UseButtonReturn => {
  /** 获取插槽 */
  const slot: Slots = useSlots()

  const { getType, getSize } = useGlobal(prop)

  /** 获取父组件注入的依赖项 */
  const parentInject: FightingSize | null = inject(BUTTON_GROUP_PROPS_KEY, null)

  /**
   * 检测是否带有默认插槽
   *
   * 如果没有则返回真
   *
   * 用于限制前后 icon 的意外边距
   */
  const isShowIcon = computed(
    (): boolean => !(slot.default && slot.default() && slot.default()[0].children)
  )

  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      'f-button',
      `f-button__${getSize('middle', parentInject).value}`,
      {
        [`f-button__${getType().value}`]: !prop.color && getType().value,
        'f-button__icon': isShowIcon,
        'f-button__round': prop.round,
        'f-button__simple': prop.simple && !prop.color,
        'f-button__block': prop.block,
        'f-button__bold': prop.bold,
        'f-button__text': prop.text && !prop.color,
        'f-button__circle': prop.circle,
        'f-button__spread': prop.spread
      }
    ]
  })

  /** 样式列表 */
  const style = computed((): CSSProperties => {
    const { color, fontColor, shadow, fontSize } = prop

    if (prop.color) {
      const { getLight, getDark } = useColor(prop.color)

      return {
        '--button-background': color || null,
        '--button-hover': color ? getLight(0.4) : null,
        '--button-active': color ? getDark(0.2) : null,
        '--button-color': fontColor,
        '--button-shadow': shadow,
        '--button-font-size': sizeChange(fontSize)
      } as CSSProperties
    }

    return {
      '--button-color': fontColor,
      '--button-shadow': shadow,
      '--button-font-size': sizeChange(fontSize)
    } as CSSProperties
  })

  return {
    classList,
    style
  }
}
