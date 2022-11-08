import type { ToolbarClickEmitInterface } from '../../toolbar/src/interface'

export type { ImagePreviewPropsType } from './props'

/**
 * 左右切换按钮切换图片
 * 
 * 根据传入的参数，执行映射对象中指定键值的方法
 */
export interface ImagePreviewSwitchImageInterface {
  (type: 'next' | 'prev'): void
}

/**
 * 点击操作栏执行指定对象映射的方法
 * 
 * target Toolbar 组件返回类型
 */
export interface ImagePreviewOptionClickInterface {
  (target: ToolbarClickEmitInterface): void
}

/**
 * 左右切换按钮切换的映射方法对象接口
 */
export interface ImagePreviewSwitchImageOptionMapInterface {
  next(): void
  prev(): void
}

/**
 * 点击操作栏实现指定方法的映射对象接口
 */
export interface ImagePreviewOptionClickOptionMapInterface {
  1(): void
  2(): void
  3(): void
  4(): void
  5(): void
}
