import type { Component, Slot, Slots, VNode } from 'vue'

export type { TableProps } from './props'

/** 表格居中方式类型 */
export type TableAlign = 'left' | 'center' | 'right'

/** 表格数据类型 */
export type TableData = Record<string, unknown>[]

/**
 * @see h() https://cn.vuejs.org/api/render-function.html
 */
type Children = string | number | boolean | VNode | null | Children[]

export type TableRenderH = (
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots | Record<string, () => unknown>
) => VNode

export type TableRender = (h: TableRenderH, dataItem: Record<string, unknown>, index: number, headerItem: TableColumns) => VNode

export type TableHeaderRender = (h: TableRenderH, headerItem: TableColumns, index: number) => VNode

/** 表格表头每一项配置类型 */
export interface TableColumns {
  title: string | TableHeaderRender
  key?: string
  width?: number | string | undefined
  render?: TableRender
}
