import { computed, ref, reactive } from 'vue'
import {
  convertFormat,
  isNumber,
  sizeChange,
  isBoolean,
  isArray,
  isString
} from '../../_utils'
import { useProps } from '..'
import type { CSSProperties, ComputedRef } from 'vue'
import type { ClassList } from '../../_interface'
import type { FilterParams } from '..'

/**
 * useList 返回值类型接口
 *
 * @param { Function } classes 类名列表
 * @param { Function } styles 样式列表
 */
export interface UseListReturn {
  classes: (list: FilterParams, className?: string) => ComputedRef<ClassList>
  styles: (
    list: FilterParams,
    pixel?: boolean | string | string[]
  ) => ComputedRef<CSSProperties>
}

/**
 * 自动计算组件所需要的类名列表和样式列表
 *
 * 类名和样式首先通过传入属性列表数组，使用过滤 hook 进行过滤
 *
 * 过滤后的 prop 对象再进行样式或者类名处理
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop prop 列表
 * @param { string } name 组件名
 * @returns { Object } 类名列表和样式列表方法，可解构出 classes styles
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
   * @param { Array  } list 类名所需要的 prop 参数
   * @param { string } [className] 其它所需要的类名
   * @returns { Object } 类名列表
   */
  const classes = (list: FilterParams, className?: string): ComputedRef<ClassList> => {
    return computed((): ClassList => {
      /** 类名列表 */
      const classList = ref<ClassList>([])
      /** 过滤得到 prop 集合 */
      const propList: Record<string, unknown> = filter(list)

      // 是否存在其它需要直接加入的类名
      className && classList.value.push(className)

      for (const key in propList) {
        if (propList[key]) {
          /**
           * 如果 prop[key] 是 boolean 类型，则使用键拼接
           *
           * 否则使用值拼接
           */
          classList.value.push(
            `f-${name}__${isBoolean(propList[key]) ? convertFormat(key) : propList[key]}`
          )
        }
      }
      return classList.value
    })
  }

  /**
   * 设置样式列表的值
   *
   * @param { string | number } val 值
   * @param { string } key 键
   * @returns { string | number } 处理后的值
   */
  const setListValue = (
    val: string | number,
    key: string,
    pixel: boolean | string | string[] = true
  ): string | number => {
    // 如果需要添加单位，则所有的数字都添加单位
    if (isBoolean(pixel)) {
      return (isNumber(val) ? (pixel ? sizeChange(val) : val) : val) as string | number
    } else if (isString(pixel)) {
      // 如果为字符串类型，则代表仅仅有一个不需要添加单位
      if (pixel === key) return val
    } else if (isArray(pixel)) {
      // 如果为数组类型，则代表有些值不需要添加单位，循环遍历处理
      for (const item of pixel) {
        if (item === key) return val
      }
    }

    // 没有进入判断则默认添加
    return sizeChange(val)
  }

  /**
   * 样式列表
   *
   * @param { Array } list 样式所需要的 prop 参数
   * @param { boolean | string | string[] } [pixel] 是否带有单位
   * @returns { Object } 样式列表
   */
  const styles = (
    list: FilterParams,
    pixel: boolean | string | string[] = true
  ): ComputedRef<CSSProperties> => {
    return computed((): CSSProperties => {
      /** 样式列表 */
      const styleList: CSSProperties = reactive({})
      /** 过滤得到 prop 集合 */
      const propList: Record<string, unknown> = filter(list)

      for (const key in propList) {
        if (propList[key]) {
          styleList[`--${name}-${convertFormat(key)}`] = setListValue(
            propList[key] as string | number,
            key,
            pixel
          )
        }
      }

      return styleList
    })
  }

  return { classes, styles }
}
