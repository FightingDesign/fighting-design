/**
 * 打印错误信息方法类型接口
 * @param scope 组件范围
 * @param message 错误信息
 */
export interface DebugWarnInterface {
  (scope: string, message: string): void
}
