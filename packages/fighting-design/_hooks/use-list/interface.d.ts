import type { CSSProperties, ComputedRef } from 'vue'
import type { ClassListInterface } from '../../_interface'

/**
 * useList 返回值类型接口
 *
 * @param classes 类名列表
 * @param styles 样式列表
 */
export interface UseListReturnInterface {
  classes<T>(prop: T, myName?: boolean): ComputedRef<ClassListInterface>
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
