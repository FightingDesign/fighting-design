import { computed, ref, reactive } from 'vue'
import { convertFormat, isNumber, sizeChange, isBoolean } from '../../_utils'
import type { CSSProperties, ComputedRef, Ref } from 'vue'
import type { ClassListInterface } from '../../_interface'
import type { UseListReturnInterface, UseListInterface } from './interface'

/**
 * 自动计算组件所需要的类名列表和样式列表
 *
 * @param name 组件名
 * @returns { UseListReturnInterface }
 */
export const useList: UseListInterface = (
  name: string
): UseListReturnInterface => {
  /**
   * 类名列表
   *
   * @param prop 类名所需要的 prop
   */
  const classes = <T>(
    prop: T,
    myName?: boolean
  ): ComputedRef<ClassListInterface> => {
    return computed((): ClassListInterface => {
      /**
       * 类名列表
       */
      const classList: Ref<string[]> = ref<string[]>([])

      // 是否添加自己的专属类名
      if (myName) {
        classList.value.push(`f-${name}`)
      }

      for (const key in prop) {
        if (prop[key]) {
          /**
           * 如果 prop[key] 是 boolean 类型，则使用键拼接
           *
           * 否则使用值拼接
           */
          classList.value.push(
            `f-${name}__${isBoolean(prop[key]) ? key : prop[key]}`
          )
        }
      }
      return classList.value as unknown as ClassListInterface
    })
  }

  /**
   * 样式列表
   *
   * @param prop 样式所需要的 prop
   */
  const styles = <T>(prop: T): ComputedRef<CSSProperties> => {
    return computed((): CSSProperties => {
      /**
       * 样式列表
       */
      const styleList: Record<string, unknown> = reactive({})

      for (const key in prop) {
        if (prop[key]) {
          styleList[`--f-${name}-${convertFormat(key)}`] = isNumber(prop[key])
            ? sizeChange(prop[key] as number)
            : prop[key]
        }
      }

      return styleList as unknown as CSSProperties
    })
  }

  return {
    classes,
    styles
  } as UseListReturnInterface
}
