import { reactive, toRefs, inject, useSlots, computed } from 'vue'
import { useGlobal, useList, useColor } from '..'
import { sizeChange } from '../../_utils'
import { BUTTON_GROUP_PROPS_KEY } from '../../button-group/src/props'
import type { ButtonProps } from '../../button'
import type { CSSProperties } from 'vue'
import type { FightingSize } from '../../_interface'
import type { UseButtonReturn } from './interface'

export * from './interface.d'

/**
 * button 组件方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop prop 列表
 * @returns { Object }
 */
export const useButton = (prop: ButtonProps): UseButtonReturn => {
  /** 获取插槽 */
  const slot = useSlots()

  const { getType, getSize } = useGlobal(prop)

  /** 获取父组件注入的依赖项 */
  const parentInject = inject<FightingSize | null>(BUTTON_GROUP_PROPS_KEY, null)

  /**
   * 检测是否带有默认插槽
   *
   * 如果没有则返回真
   *
   * 用于限制前后 icon 的意外边距
   */
  const isShowIcon = computed((): boolean => !(slot.default && slot.default() && slot.default()[0].children))

  /** 处理结构后的 prop 集合 */
  const params = reactive({
    ...toRefs(prop),
    size: getSize('middle', parentInject),
    type: !prop.color && getType(),
    simple: prop.simple && !prop.color,
    text: prop.text && !prop.color,
    icon: isShowIcon
  })

  const { classes } = useList(params, 'button')

  /** 类名列表 */
  const classList = classes(
    ['type', 'icon', 'round', 'simple', 'block', 'bold', 'text', 'size', 'circle', 'spread'],
    'f-button'
  )

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
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
    styleList
  }
}
