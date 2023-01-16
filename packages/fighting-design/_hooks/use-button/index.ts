import { reactive, toRefs, inject, useSlots, computed } from 'vue'
import { useGlobal, useList, useCalculiColor } from '..'
import { BUTTON_GROUP_PROPS_KEY } from '../../button-group/src/props'
import type { ButtonProps } from '../../button'
import type { FightingSize } from '../../_interface'
import type { UseButtonReturn } from './interface'

export const useButton = (prop: ButtonProps): UseButtonReturn => {
  /** 获取插槽 */
  const slot = useSlots()

  const { getType, getSize } = useGlobal(prop)

  /** 自定义颜色 */
  const customColor = computed((): object | null => {
    if (prop.color) {
      const { getLightColor, getDarkColor } = useCalculiColor(prop.color)

      return {
        defaultColor: prop.color,
        hoverColor: getLightColor(0.4),
        activeColor: getDarkColor(0.2)
      }
    }

    return null
  })

  /** 获取父组件注入的依赖项 */
  const parentInject = inject<FightingSize | null>(BUTTON_GROUP_PROPS_KEY, null)

  /** 
   * 检测是否带有默认插槽
   *
   * 如果没有则返回真
   *
   * 用于限制前后 icon 的意外边距
   */
  const isShowIcon = computed((): boolean => !(slot.default && slot.default()))

  /** 处理结构后的 prop 集合 */
  const params = reactive({
    ...toRefs(prop),
    ...customColor.value,
    size: getSize('middle', parentInject),
    type: !prop.color && getType(),
    disabled: prop.disabled || prop.loading,
    simple: prop.simple && !prop.color,
    text: prop.text && !prop.color,
    color: !!prop.color,
    icon: isShowIcon
  })

  const { classes, styles } = useList(params, 'button')

  /** 类名列表 */
  const classList = classes(
    ['type', 'icon', 'round', 'simple', 'block', 'disabled', 'bold', 'text', 'size', 'circle', 'spread', 'color'],
    'f-button'
  )

  /** 样式列表 */
  const styleList = styles(
    prop.color
      ? ['fontColor', 'shadow', 'fontSize', 'hoverColor', 'activeColor', 'defaultColor']
      : ['fontColor', 'shadow', 'fontSize']
  )

  return {
    classList,
    styleList
  }
}
