/**
 * 注册组件
 * @param main 组件的实例
 * @param name 组件的名称
 */
export const install = <mainType extends { install }>(main: mainType, name?: string): void => {
  main.install = app => {
    app.component(name, main)
  }
}
