export type { ToolbarProps } from './props'

/**
 * 点击的参数类型接口
 *
 * @param { Object } evt 事件对象
 * @param { string | undefined } index 当前的索引
 */
export interface ToolbarClickParams {
  evt: MouseEvent
  index: string | undefined
}

/**
 * 点击触发的回调
 *
 * @param { Object } params 返回的参数
 */
export type ToolbarClick = (params: ToolbarClickParams) => void
