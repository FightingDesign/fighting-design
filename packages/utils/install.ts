/**
 * 注册组件
 * @param example 组件的实例
 * @param name 组件的名称
 */
export const install = (example, name) => {
  example.install = app => {
    app.component(name, example)
  }
}
