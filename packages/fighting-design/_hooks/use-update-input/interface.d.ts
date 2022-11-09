/**
 * input 方法类型接口
 * 
 * 传入事件对象，无返回值
 */
export interface InputInterface {
  (evt: Event): void
}

/**
 * useUpdateInput hook 返回值类型接口
 */
export interface UseUpdateInputReturnInterface {
  input: InputInterface
}

/**
 * useUpdateInput 类型接口
 */
export interface UseUpdateInputInterface {
  (emit: Function, change: Function | null): UseUpdateInputReturnInterface
}
