import type { App, Directive, Component } from 'vue'

export type Install<T> = T & {
  install(app: App): void
}

/**
 * 注册组件
 *
 * @param { Object } main 组件实例
 * @returns { Object } 组件实例
 */
export const install = <T extends Component>(main: T): Install<T> => {
  (main as Record<string, unknown>).install = (app: App): void => {
    const { name } = main
    name && app.component(name, main)
  }
  return main as Install<T>
}

/**
 * 注册内置组件
 *
 * @param { Object } main 组件实例
 * @param { string } name 组件名
 * @returns { Object } 组件实例
 */
export const installFn = <T>(main: T, name: string): Install<T> => {
  (main as Install<T>).install = (app: App): void => {
    app.config.globalProperties[name] = main as Install<T>
  }
  return main as Install<T>
}

/**
 * 注册自定义指令组件
 *
 * @param { Object } main 组件实例
 * @param { string } name 组件名
 * @returns { Object } 组件实例
 */
export const installDirective = <T extends Directive>(
  main: T,
  name: string
): Install<T> => {
  (main as Install<T>).install = (app: App): void => {
    app.directive(name, main as Install<T>)
  }
  return main as Install<T>
}
