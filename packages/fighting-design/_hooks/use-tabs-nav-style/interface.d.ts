import type { Ref, CSSProperties, ComputedRef } from 'vue'

/**
 * useTabsNaStyle 返回值类型接口
 *
 * @param { Object } activeIndex 选中的索引
 * @param { Object } activeLineStyle 针对 line 模式下的，活动线条的样式
 * @param { Function } setActiveLineStyle 置 type = line 模式的样式
 */
export interface UseTabsNavStyleReturn {
  activeIndex: ComputedRef<number>
  activeLineStyle: Ref<CSSProperties>
  setActiveLineStyle: () => Promise<void>
}
