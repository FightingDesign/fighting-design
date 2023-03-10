/**
 * useRun 返回值类型接口
 *
 * @param { Function } run 执行方法
 */
export interface UseRunReturn {
  run: <T extends Function>(callback: T | null | undefined, ...params: unknown[]) => void
}
