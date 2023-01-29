import type { ComputedRef, Ref } from 'vue'
import type { TabsModelValue, TabsNavInstance, TabsEdit } from '../../tabs'
import type { useChildrenReturn } from '../../_utils/tabs'

/**
 * useTabs 返回值类型接口
 *
 * @param { Object } navs nav 列表
 * @param { Object } currentName 当前选中的子组件
 * @param { Function } edit 编辑状态
 * @param { Function } setActiveName 设置子组件绑定的 name
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
 * @param { Object } currentName 当前选中的 pane
 */
export type TabsProvide = {
  activeName: Ref<TabsModelValue>
} & useChildrenReturn<TabsPaneInstance>

/** 
 * setActiveName 回调类型 
 * 
 * @param { String } event 回调事件名
 * @param { Boolean } val 回调参数
 */
export type SetActiveNameEmit = (event: 'update:modelValue', val: string | number) => void

/**
 * 设置绑定值回调类型
 *
 * @param { String | Number } name 选中的 name
 */
export type SetActiveName = (name: TabsModelValue) => void
