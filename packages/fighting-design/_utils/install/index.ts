import type { App, ComponentPublicInstance } from 'vue'
import type { InstallType } from './interface'

/**
 * 注册组件
 * @param main 组件实例
 * @return { InstallType<T> }
 */
export const install = <T>(main: T): InstallType<T> => {
  (main as InstallType<T>).install = (app: App): void => {
    const { name } = main as unknown as { name: string }
    app.component(name, main as InstallType<T>)
  }
  return main as InstallType<T>
}

/**
 * 注册内置组件
 * @param main 组件实例
 * @param name 组件名
 * @return { InstallType<T> }
 */
export const installFn = <T>(main: T, name: string): InstallType<T> => {
  (main as InstallType<T>).install = (app: App): void => {
    app.config.globalProperties[name] = main as InstallType<T>
  }
  return main as InstallType<T>
}

/**
 * 注册 Web Components 组件
 * @param main 组件实例
 * @param style 样式
 * @returns 
 */
export const installWebComponent = <T>(main: T, style: string): ComponentPublicInstance => {
  (main as T & { styles: string[] }).styles = [style]
  return main as unknown as ComponentPublicInstance
}
