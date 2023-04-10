export type { MessageProps } from './props'

/** 关闭之后的回调 */
export type MessageClose = (evt?: MouseEvent) => void

/** 不同弹出位置类型 */
export type MessagePlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
