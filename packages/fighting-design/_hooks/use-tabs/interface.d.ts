import type { ComputedRef, Ref } from 'vue'
import type { TabsPaneName, TabsNavInstance } from '../../tabs'

/**
 * useTabs 返回值类型接口
 * 
 * @param navs nav 列表
 * @param currentName 当前选中的子组件
 * @param edit 编辑状态
 * @param setCurrentName 设置子组件绑定的 name
 */
export interface UseTabsReturn {
  navs: ComputedRef<TabsNavInstance[]>
  currentName: Ref<TabsPaneName>
  edit: (action: 'remove' | 'add', name?: TabsPaneName, index?: number) => void
  setCurrentName: (name: TabsPaneName) => void
}

/**
 * 注入的依赖项类型接口
 * 
 * @param currentName 当前选中的 pane
 * @param updatePaneList 更新子组件列表
 */
export interface TabsProvide {
  currentName: Ref<TabsPaneName>
  updatePaneList: () => void
}
