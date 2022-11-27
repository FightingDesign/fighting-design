import type { CSSProperties, ComputedRef } from 'vue'
import type { ClassListInterface } from '../../_interface'

/**
 * useList 返回值类型接口
 *
 * @param classes 类名列表
 * @param styles 样式列表
 * @param className 其它需要直接加入的类名
 */
export interface UseListReturnInterface {
  classes<T>(prop: T, className?: string): ComputedRef<ClassListInterface>
  styles<T>(prop: T): ComputedRef<CSSProperties>
}

/**
 * useList 类型接口
 *
 * @param name 组件名
 * @returns { UseListReturnInterface }
 */
export interface UseListInterface {
  (name: string): UseListReturnInterface
}
