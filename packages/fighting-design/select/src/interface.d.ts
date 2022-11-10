export type { SelectPropsType } from './select'

/**
 * 设置新的选中值方法类型接口
 * 
 * 需要传入一个新的值 newVal，无返回值
 */
export interface SelectSetValueInterface {
  (newVal: string): void
}

/**
 * 提供给自组件注入的依赖项类型接口
 * 
 * setValue 设置新的选中值
 */
export interface SelectProvideInterface {
  setValue: SelectSetValueInterface
}
