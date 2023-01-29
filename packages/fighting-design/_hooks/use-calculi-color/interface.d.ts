/**
 * useCalculiColor 返回值类型接口
 *
 * @param { Function } getDarkColor 加深方法
 * @param { Function } getLightColor 减淡方法
 */
export interface UseCalculiColorReturn {
  getDarkColor: (level: number) => string
  getLightColor: (level: number) => string
}
