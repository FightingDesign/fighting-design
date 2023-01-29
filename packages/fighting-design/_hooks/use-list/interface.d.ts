/**
 * useList 返回值类型接口
 *
 * @param { Function } classes 类名列表
 * @param { Function } styles 样式列表
 */
export interface UseListReturn {
  classes: (list: FilterParams, className?: string) => ComputedRef<ClassList>
  styles: (list: FilterParams, pixel?: boolean | string | string[]) => ComputedRef<CSSProperties>
}
