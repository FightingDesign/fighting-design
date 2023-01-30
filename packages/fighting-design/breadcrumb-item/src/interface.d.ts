export type { BreadcrumbItemProps } from './props'

/**
 * 跳转路径类型接口
 *
 * @param { string } name 路由名称
 * @param { Object } [query] 路由参数
 */
export interface BreadcrumbItemTo {
  name: string
  query?: Object
}
