import type { Ref, CSSProperties, ComputedRef } from 'vue'

/**
 * useTabsNaStyle 返回值类型接口
 * 
 * @param setActiveLineStyle
 * @param currentIndex
 * @param activeLineStyle
 */
export interface UseTabsNavStyleReturn {
  setActiveLineStyle: () => Promise<void>
  currentIndex: ComputedRef<number>
  activeLineStyle: Ref<CSSProperties>
}
