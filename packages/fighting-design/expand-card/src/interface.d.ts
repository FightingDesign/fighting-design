export type { ExpandCardProps } from './props'

/**
 * 需要展示的 imageList 类型接口
 *
 * @param url 图片地址
 * @param text 描述内容文案
 */
export interface ExpandCardImageListItem {
  url: string
  text?: string
}

export type ExpandCardImageList = | ExpandCardImageListItem[] | string[]
