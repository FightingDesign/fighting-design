import type { App } from 'vue'

/**
 * 普通函数接口
 *
 * 无参数，无返回值
 */
export interface OrdinaryFunctionInterface {
  (): void
}

/**
 * 注册组件函数接口
 *
 * @param app 应用实例
 */
export interface AppInstallInterface {
  (app: App): App
}

/**
 * class 类名集合类型
 *
 * 多数情况下在 computed 中计算返回
 */
export type ClassList = readonly (string | Record<string, unknown>)[]
