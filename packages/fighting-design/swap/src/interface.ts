export type { SwapProps } from './props'

/** 不同切换类型 */
export type SwapType = 'sound' | 'swap'

/**
 * 点击切换执行的回调类型
 *
 * @param { boolean } value 最新值
 * @param { Object } evt 事件对象
 */
export type SwapChange = (value: boolean, evt: MouseEvent) => void
