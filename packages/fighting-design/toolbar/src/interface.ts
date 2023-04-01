export type { ToolbarProps } from './props'

/**
 * 点击触发的回调
 *
 * @param { string | null } index 当前的索引
 * @param { Object } evt 事件对象
 */
export type ToolbarClick = (index: string | null, evt: MouseEvent) => void
