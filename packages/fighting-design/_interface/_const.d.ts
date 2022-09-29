import type { App } from 'vue'

/**
 * 这里是一些基础的接口
 *
 * 用于组件内部
 *
 * 一些频繁使用的在这里进行了抽离，公共使用
 */

/**
 * 普通函数接口
 * 无参数，无返回值
 */
export interface OrdinaryFunctionInterface {
  (): void
}

/**
 * 注册组件函数
 */
export interface AppInstallInterface {
  (app: App): App
}

/**
 * class 类名集合类型
 */
export type ClassListInterface = readonly (string | Record<readonly string, unknown>)[]

/**
 * 点击相关的类型
 */
export interface HandleEventInterface {
  (evt: MouseEvent): void
}
