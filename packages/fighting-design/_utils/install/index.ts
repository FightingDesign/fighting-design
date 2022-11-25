import type { App, Directive } from 'vue'
import type { InstallType } from './interface'

/**
 * 注册组件
 * @param main 组件实例
 * @return { InstallType<T> } 组件实例
 */
export const install = <T>(main: T): InstallType<T> => {
  ;(main as InstallType<T>).install = (app: App): void => {
    const { name } = main as unknown as { name: string }
    app.component(name, main as InstallType<T>)
  }
  return main as InstallType<T>
}

/**
 * 注册内置组件
 * @param main 组件实例
 * @param name 组件名
 * @return { InstallType<T> } 组件实例
 */
export const installFn = <T>(main: T, name: string): InstallType<T> => {
  ;(main as InstallType<T>).install = (app: App): void => {
    app.config.globalProperties[name] = main as InstallType<T>
  }
  return main as InstallType<T>
}

/**
 * 注册自定义指令组件
 * @param main 组件实例
 * @param name 组件名
 * @returns { T } 组件实例
 */
export const installDirective = <T extends Directive>(
  main: T,
  name: string
): InstallType<T> => {
  ;(main as InstallType<T>).install = (app: App): void => {
    app.directive(name, main as InstallType<T>)
  }
  return main as InstallType<T>
}
