import { useList } from '../../_hooks'
import { isNumber, isString } from '../../_utils'
import type { AvatarPropsType } from '../../avatar'
import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListInterface } from '../../_interface'
import type { UseAvatarReturnInterface } from './interface'

/**
 * useAvatar 内部样式
 *
 * @param prop props 列表
 * @returns { UseAvatarReturnInterface }
 */
export const useAvatar = (prop: AvatarPropsType): UseAvatarReturnInterface => {
  const { styles, classes } = useList(prop, 'avatar')

  /**
   * img 元素的类名列表
   */
  const nodeClassList: ComputedRef<ClassListInterface> = classes(
    [
      'round',
      'fit',
      {
        key: 'size',
        callback: (): boolean => isString(prop.size)
      }
    ],
    'f-avatar__img'
  )

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = classes(
    [
      'round',
      {
        key: 'size',
        callback: (): boolean => isString(prop.size)
      }
    ],
    'f-avatar'
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles([
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

  return {
    nodeClassList,
    classList,
    styleList
  }
}
