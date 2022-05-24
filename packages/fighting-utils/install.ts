import type { App } from 'vue'
import type { installInterface } from './typescript'

/**
 * 注册组件
 * @param main 组件实例
 * @param name 组件名
 */
export const install: installInterface = (main: any, name: string): void => {
  main.install = (app: App): void => {
    app.component(name, main)
  }
}
