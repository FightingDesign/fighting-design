export type { BreadcrumbItemProps } from './props'

/**
 * 跳转路径类型接口
 *
 * @param name 路由名称
 * @param query 路由参数
 */
export interface BreadcrumbItemToInterface {
  name: string
  query?: Object
}
