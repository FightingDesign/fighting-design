import type { CSSProperties, ComputedRef } from 'vue'
import type { ClassListInterface } from '../../_interface'
import type { FilterParamsInterface } from '../use-props/interface'

/**
 * useList 返回值类型接口
 *
 * @param classes 类名列表
 * @param styles 样式列表
 * @param className 其它需要直接加入的类名
 */
export interface UseListReturnInterface {
  classes: ClassesInterface
  styles: StylesInterface
}

/**
 * useList 类型接口
 *
 * @param prop prop 列表
 * @param name 组件名
 * @returns { UseListReturnInterface }
 */
export interface UseListInterface {
  <T>(prop: T, name: string): UseListReturnInterface
}

/**
 * 类名列表方法类型接口
 *
 * @param list 类名所需要的 prop 参数
 * @param className 其它所需要的类名
 */
export interface ClassesInterface {
  (
    list: FilterParamsInterface,
    className?: string
  ): ComputedRef<ClassListInterface>
}

/**
 * 样式列表方法类型接口
 *
 * @param list 样式所需要的 prop 参数
 */
export interface StylesInterface {
  (list: FilterParamsInterface): ComputedRef<CSSProperties>
}
