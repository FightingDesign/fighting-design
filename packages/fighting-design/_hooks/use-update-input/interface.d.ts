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
