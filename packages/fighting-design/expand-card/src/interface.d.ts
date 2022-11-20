export type { ExpandCardPropsType } from './props'

/**
 * 需要展示的 imageList 类型接口
 *
 * 可以是 ExpandCardImageListItemInterface[] | string[]
 */
export interface ExpandCardImageListItemInterface {
  url: string
  text?: string
}

export type ExpandCardImageListType =
  | ExpandCardImageListItemInterface[]
  | string[]

/**
 * 切换卡片
 *
 * index 根据索引来切换指定的卡片
 */
export interface ExpandCardSwitchExpandCardInterface {
  (index: number): void
}

/**
 * 展开的类名
 *
 * index 根据索引来返回不同的类名
 */
export interface ExpandCardActiveClassInterface {
  (index: number): string | void
}
