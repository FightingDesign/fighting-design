import type { InstallType } from '../_interface'
import type { App } from 'vue'

/**
 * 注册组件
 * @param main 组件实例
 */
export const install = <T>(main: T): T => {
  (main as InstallType<T>).install = (app: App): void => {
    const { name } = main as { name: string }
    app.component(name, main as InstallType<T>)
  }
  return main
}

/**
 * 注册内置组件
 * @param main 组件实例
 * @param name 组件名
 */
export const installFn = <T>(
  main: T,
  name: string
): void => {
  (main as InstallType<T>).install = (app: App): void => {
    app.config.globalProperties[name] = main
  }
}
