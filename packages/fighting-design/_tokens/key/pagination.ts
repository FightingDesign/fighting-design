/**
 * 针对 pagination 组件的一些变量抽离
 */

/** 基础类名 f-pagination */
export const PAGINATION = 'f-pagination' as const

/** 每一项的类名 f-pagination__item */
export const PAGINATION_ITEM = `${PAGINATION}__item` as const

/** 上一页切换类名 f-pagination__prev */
export const PAGINATION_PREV = `${PAGINATION}__prev` as const

/** 下一页切换类名 f-pagination__next */
export const PAGINATION_NEXT = `${PAGINATION}__next` as const
