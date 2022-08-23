import type { installInterface, mainVNodeInterface } from '../_interface'
import type { App } from 'vue'

/**
 * 注册组件
 * @param main 组件实例
 * @param name 组件名
 */
export const install: installInterface = (
  main: mainVNodeInterface,
  name: string
): void => {
  main.install = (app: App): void => {
    app.component(name, main)
  }
}

/**
 * 注册内置组件
 * @param main 组件实例
 * @param name 组件名
 */
export const installFn: installInterface = (
  main: mainVNodeInterface,
  name: string
): void => {
  main.install = (app: App): void => {
    app.config.globalProperties[name] = main
  }
}
