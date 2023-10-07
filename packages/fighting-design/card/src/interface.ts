export type { CardProps } from './props'

/** 不同的阴影展示时机类型 */
export type CardShadow = 'hover' | 'always'

/**
 * 卡片关闭之后的回调方法类型
 *
 * @param target 当前卡片的展示状态
 */
export type CardClose = (target: boolean) => void
