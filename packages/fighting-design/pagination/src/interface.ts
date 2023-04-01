export type { PaginationProps } from './props'

/**
 * 回调方法类型
 *
 * @param { number } current 当前选中页码
 * @param { number } pageSize 每页条数
 * @param { Object } evt 事件对象
 */
export type PaginationEvent = (current: number, pageSize: number, evt: MouseEvent) => void
