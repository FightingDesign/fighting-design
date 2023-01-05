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

/** 掺入的图片列表类型接口 */
export type ExpandCardImageList = ExpandCardImageListItem[] | string[]
