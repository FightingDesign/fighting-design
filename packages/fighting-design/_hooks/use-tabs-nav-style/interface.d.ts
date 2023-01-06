import type { Ref, CSSProperties, ComputedRef } from 'vue'

/**
 * useTabsNaStyle 返回值类型接口
 * 
 * @param setCardStyle
 * @param setActiveLineStyle
 * @param wrapperStyle
 * @param currentIndex
 * @param activeLineStyle
 */
export interface UseTabsNaStyleReturn {
  setCardStyle: () => Promise<void>
  setActiveLineStyle: () => Promise<void>
  wrapperStyle: Ref<CSSProperties>
  currentIndex: ComputedRef<number>
  activeLineStyle: Ref<CSSProperties>
}
