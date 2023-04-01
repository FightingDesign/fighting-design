export type { ExpandCardProps } from './props'

/**
 * 需要展示的 imageList 类型接口
 *
 * @param { string } url 图片地址
 * @param { string } [text] 描述内容文案
 */
export interface ExpandCardImageListItem {
  url: string
  text?: string
}

/** 掺入的图片列表类型接口 */
export type ExpandCardImageList = ExpandCardImageListItem[] | string[]

/**
 * 点击切换执行的回调
 *
 * @param { Object } evt 事件对象
 * @param { number } index 索引
 * @param { Object } item 每一项信息
 */
export type ExpandCardChange = (
  evt: MouseEvent,
  index: number,
  item: ExpandCardImageListItem
) => void
