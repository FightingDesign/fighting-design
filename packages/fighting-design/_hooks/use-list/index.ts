import { computed, ref, reactive } from 'vue'
import { convertFormat, isNumber, sizeChange, isBoolean } from '../../_utils'
import { useProps } from '../use-props'
import type { CSSProperties, ComputedRef, Ref } from 'vue'
import type { ClassList } from '../../_interface'
import type { FilterParams } from '../use-props'
import type { UseListReturn } from './interface'

export * from './interface.d'

/**
 * 自动计算组件所需要的类名列表和样式列表
 *
 * 类名和样式首先通过传入属性列表数组，使用过滤 hook 进行过滤
 *
 * 过滤后的 prop 对象再进行样式或者类名处理
 *
 * @param prop prop 列表
 * @param name 组件名
 * @returns 类名列表和样式列表方法，可解构出 classes styles
 */
export const useList = <T extends object>(prop: T, name: string): UseListReturn => {
  /**
   * 过滤 props
   *
   * 虽然说 classes 和 styles 都接受一个数组参数可以直接遍历
   *
   * 但是有些参数需要传入特殊的回调进行判断，只能是先过滤后再遍历
   */
  const { filter } = useProps(prop)

  /**
   * 类名列表
   *
   * @param list 类名所需要的 prop 参数
   * @param className 其它所需要的类名
   */
  const classes = (list: FilterParams, className?: string): ComputedRef<ClassList> => {
    return computed((): ClassList => {
      /** 类名列表 */
      const classList: Ref<string[]> = ref<string[]>([])
      /** 过滤得到 prop 集合 */
      const propList: Record<string, unknown> = filter(list)

      /** 是否存在其它需要直接加入的类名 */
      className && classList.value.push(className)

      for (const key in propList) {
        if (propList[key]) {
          /**
           * 如果 prop[key] 是 boolean 类型，则使用键拼接
           *
           * 否则使用值拼接
           */
          classList.value.push(`f-${name}__${isBoolean(propList[key]) ? convertFormat(key) : propList[key]}`)
        }
      }
      return classList.value as unknown as ClassList
    })
  }

  /**
   * 样式列表
   *
   * @param list 样式所需要的 prop 参数
   * @param pixel 是否带有单位
   */
  const styles = (list: FilterParams, pixel = true): ComputedRef<CSSProperties> => {
    return computed((): CSSProperties => {
      /** 样式列表 */
      const styleList: Record<string, unknown> = reactive({})
      /** 过滤得到 prop 集合 */
      const propList: Record<string, unknown> = filter(list)

      for (const key in propList) {
        if (propList[key]) {
          /**
           * @description 为什么要进行 isNumber 判断？
           *
           * 因为很多属性是同时支持 number 和 staring 类型的参数
           *
           * 所以这里要进行判断，如果是数字类型，则需要使用 sizeChange 方法进行转换标注单位
           *
           * @description convertFormat 方法描述
           *
           * 因为 prop 参数的键都是驼峰命名法，所以这里要转换为短横线连接命名
           */
          styleList[`--f-${name}-${convertFormat(key)}`] = pixel
            ? isNumber(propList[key])
              ? sizeChange(propList[key] as number)
              : propList[key]
            : propList[key]
        }
      }

      return styleList as unknown as CSSProperties
    })
  }

  return {
    classes,
    styles
  }
}
