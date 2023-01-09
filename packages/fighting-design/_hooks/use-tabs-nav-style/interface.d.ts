import type { Ref, CSSProperties, ComputedRef } from 'vue'

/**
 * useTabsNaStyle 返回值类型接口
 * 
 * @param activeIndex 选中的索引
 * @param activeLineStyle 针对 line 模式下的，活动线条的样式
 * @param setActiveLineStyle 置 type = line 模式的样式
 */
export interface UseTabsNavStyleReturn {
  activeIndex: ComputedRef<number>
  activeLineStyle: Ref<CSSProperties>
  setActiveLineStyle: () => Promise<void>
}
