import type { Component, Slot, Slots, VNode, RendererNode, RendererElement } from 'vue'

export type { TableProps } from './props'

/** 表格居中方式类型 */
export type TableAlign = 'left' | 'center' | 'right'

/** 表格数据类型 */
export type TableData = Record<string, any>[]

/**
 * @see h() https://cn.vuejs.org/api/render-function.html
 */
type Children = string | number | boolean | VNode | null | Children[]

/** 自定义模板函数渲染返回值类型 */
export type TableRenderReturn = VNode<RendererNode, RendererElement, Record<string, any>>

/**
 * 自定义模板函数渲染类型
 *
 * 详情参考
 *
 * @see h() https://cn.vuejs.org/api/render-function.html
 *
 * @param { string | Object } type 类型
 * @param { Object } props props 传参数
 * @param { Object } children 子节点
 */
export type TableRender = (
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots | Record<string, () => unknown>
) => TableRenderReturn | VNode

/**
 * 渲染内容自定义模板方法类型
 *
 * @param { Function } h 渲染函数
 * @param { Object } row 行的每一项
 * @param { Object } column 列的每一项
 * @param { number } index 当前行的索引
 */
export type TableRenderData = (
  h: TableRender,
  row: Record<string, any>,
  column: TableColumns,
  index: number
) => TableRenderReturn

/**
 * 渲染标题自定义模板方法类型
 *
 * @param { Function } h 渲染函数
 * @param { Object } item 每一项
 * @param { number } index 当前行的索引
 */
export type TableRenderTitle = (
  h: TableRender,
  item: TableColumns,
  index: number
) => TableRenderReturn

/**
 * 表格表头配置类型
 *
 * @param { string | Function } 标题
 * @param { string } [key] 唯一值
 * @param { number | string } [width] 宽度
 * @param { Function } [render] 自定义渲染方法
 */
export interface TableColumns {
  title: string | TableRenderTitle
  key?: string
  width?: number | string | undefined
  render?: TableRenderData
}

/**
 * 选择器改变触发的回调类型
 *
 * @param { Array } values 选中的数据集合
 */
export type TableSelect = (value: TableData) => void
