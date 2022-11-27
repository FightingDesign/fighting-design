import { useList, useProps } from '../../_hooks'
import { isNumber, isString } from '../../_utils'
import type { AvatarPropsType } from '../../avatar'
import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListInterface } from '../../_interface'
import type { UseAvatarReturnInterface } from './interface'

export const useAvatar = (prop: AvatarPropsType): UseAvatarReturnInterface => {
  const { filter } = useProps(prop)
  const { styles, classes } = useList('avatar')

  /**
   * img 元素的类名列表
   */
  const nodeClassList: ComputedRef<ClassListInterface> = classes(
    filter([
      'round',
      'fit',
      {
        key: 'size',
        callback: (): boolean => isString(prop.size)
      }
    ]),
    'f-avatar__img'
  )

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = classes(
    filter([
      'round',
      {
        key: 'size',
        callback: (): boolean => isString(prop.size)
      }
    ]),
    'f-avatar'
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(
    filter([
      'background',
      'fontColor',
      'fontSize',
      /**
       * size 配置项需要进行检查是否需要过滤
       *
       * 只有是数字的时候才需要过滤，是数字代表是自定义的尺寸
       *
       * 字符串代表内部尺寸，用于类名拼接
       */
      {
        key: 'size',
        callback: (): boolean => isNumber(prop.size)
      }
    ])
  )

  return {
    nodeClassList,
    classList,
    styleList
  }
}
