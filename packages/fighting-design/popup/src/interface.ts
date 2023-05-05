export type { PopupProps } from './props'

/** 不同弹出位置类型 */
export type PopupDirection = 'left' | 'right' | 'top' | 'bottom' | 'center'

/**
 * 回调方法类型
 * 
 * @param { Object } node 元素节点
 */
export type PopupCallback = (node: Element) => void
