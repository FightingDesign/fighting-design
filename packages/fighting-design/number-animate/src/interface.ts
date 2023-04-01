export type { NumberAnimateProps } from './props'

/**
 * 动画结束执行的回调类型
 *
 * @param { number } elapsed 执行的动画时长
 */
export type AnimationEnd = (elapsed: number) => void
