/**
 * useColor 返回值类型接口
 *
 * @param { Function } getDark 加深方法
 * @param { Function } getLight 减淡方法
 */
export interface UseColorReturn {
  getDark: (level?: number) => string
  getLight: (level?: number) => string
}
