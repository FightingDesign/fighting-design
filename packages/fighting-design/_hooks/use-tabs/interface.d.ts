import type { ComputedRef, Ref } from 'vue'
import type { TabsModelValue, TabsNavInstance, TabsEdit } from '../../tabs'

/**
 * useTabs 返回值类型接口
 *
 * @param navs nav 列表
 * @param currentName 当前选中的子组件
 * @param edit 编辑状态
 * @param setActiveName 设置子组件绑定的 name
 */
export interface UseTabsReturn {
  navs: ComputedRef<TabsNavInstance[]>
  activeName: Ref<TabsModelValue>
  setEdit: TabsEdit
  setActiveName: SetActiveName
}

/**
 * 注入的依赖项类型接口
 *
 * @param currentName 当前选中的 pane
 * @param updatePaneList 更新子组件列表
 */
export interface TabsProvide {
  activeName: Ref<TabsModelValue>
  updatePaneList: () => void
}

/** setActiveName 回调类型 */
export type SetActiveNameEmit = (event: 'update:modelValue', val: string | number) => void

/**
 * 设置绑定值回调类型
 *
 * @param name 选中的 name
 */
export type SetActiveName = (name: TabsModelValue) => void
