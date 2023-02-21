export type { SwapProps } from './props'

/** 不同切换类型 */
export type SwapType = 'sound' | 'swap'

/**
 * 点击切换执行的回调类型
 *
 * @param { Object } evt 事件对象
 * @param { boolean } value 最新值
 */
export type SwapChange = (evt: MouseEvent, value: boolean) => void
