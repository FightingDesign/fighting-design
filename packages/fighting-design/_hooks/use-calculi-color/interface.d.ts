/**
 * useCalculiColor 返回值类型接口
 *
 * @param getDarkColor 加深方法
 * @param getLightColor 减淡方法
 */
export interface UseCalculiColorReturn {
  getDarkColor(level: number): string
  getLightColor(level: number): string
}
