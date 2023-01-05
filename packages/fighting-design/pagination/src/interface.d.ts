export type { PaginationProps } from './pagination'

/** 
 * 回调方法类型
 * 
 * @param current 当前选中页码
 * @param pageSize 每页条数
 */
export type PaginationEvent = (current: number, pageSize: number) => void
