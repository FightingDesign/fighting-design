import * as components from './components'
import { version } from './package.json'
import { FLoading } from './loading'
import type { App } from 'vue'

/**
 * 注册组件
 *
 * @param { Object } app 应用实例
 */
const install = (app: App): App => {
  /**
   * 注册组件
   *
   * @see 组件注册 https://cn.vuejs.org/guide/components/registration.html
   */
  Object.entries(components).forEach(([key, value]): void => {
    app.component(key, value)
  })

  /**
   * 注册能够被应用内所有组件实例访问到的全局组件
   *
   * @see app.config.globalProperties https://cn.vuejs.org/api/application.html#app-config-globalproperties
   */
  app.config.globalProperties.FMessage = components.FMessage
  app.config.globalProperties.FNotification = components.FNotification

  /**
   * 注册自定义指令组件
   *
   * @see app.directive https://cn.vuejs.org/api/application.html#app-directive
   */
  app.directive('loading', FLoading.directive)

  return app
}

export default {
  version,
  install
}
