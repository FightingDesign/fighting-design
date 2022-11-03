import type { App } from 'vue'

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
export type ClassListInterface = readonly (string | Record<string, unknown>)[]

/**
 * 点击相关的类型
 */
export interface HandleEventInterface {
  (evt: MouseEvent): void
}

/**
 * Web Components 返回值
 */
export interface FightingDesignWebComponentsReturn {
  version: string
  register(): void
}
