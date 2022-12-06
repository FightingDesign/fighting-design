export type { MessageProps } from './props'

export type { MessageInstance } from '../../_interface'

/**
 * 不同类型
 */
export type MessageType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'

/**
 * 不同弹出位置类型
 */
export type MessagePlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
