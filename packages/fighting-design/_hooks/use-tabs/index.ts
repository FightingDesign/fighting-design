import {
  getCurrentInstance,
  ref,
  nextTick,
  onMounted,
  watch,
  computed,
  provide
} from 'vue'
import { useChildren } from '../../_utils'
import { useRun } from '../../_hooks'
import { EMIT_UPDATE } from '../../_tokens'
import { TABS_PROPS_KEY } from '../../tabs/src/props'
import type { ComponentInternalInstance, ComputedRef, Ref } from 'vue'
import type { TabsModelValue, TabsProps, TabsNavInstance, TabsEdit } from '../../tabs'
import type { TabsPane } from '../../tabs-pane'
import type { UseChildrenReturn } from '../../_utils/tabs'

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
} & UseChildrenReturn<TabsPane>

/**
 * setActiveName 回调类型
 *
 * @param { string } event 回调事件名
 * @param { string | number } val 回调参数
 */
export type SetActiveNameEmit = (event: 'update:modelValue', val: string | number) => void

/**
 * 设置绑定值回调类型
 *
 * @param { string | number } name 选中的 name
 */
export type SetActiveName = (name: TabsModelValue) => void

/**
 * tabs 标签
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @param { Function } emit 回调函数
 * @returns { Object }
 */
export const useTabs = (prop: TabsProps, emit: SetActiveNameEmit): UseTabsReturn => {
  const { run } = useRun()
  /** 获取当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance
  /** 子组件集合 */
  const usePanes = useChildren(instance, 'FTabsPane')
  /** 当前选中的子组件 */
  const activeName = ref<TabsModelValue>(0)

  /**
   * 设置子组件绑定的 name
   *
   * @param { string | number } name 子组件的 name
   */
  const setActiveName = (name: TabsModelValue): void => {
    activeName.value = name
    /** 回调更新绑定值 */
    emit(EMIT_UPDATE, name)
  }

  /**
   * 编辑状态
   *
   * @param { 'remove' | 'add' } action 添加还是删除
   * @param { string | number } [name] 当前子组件的 name
   * @param { number } [index] 索引值
   */
  const setEdit = (
    action: 'remove' | 'add',
    name?: TabsModelValue,
    index?: number
  ): void => {
    run(prop.onEdit, action, name, index)
  }

  /** nav 列表 */
  const navs = computed((): TabsNavInstance[] => {
    return (usePanes.children.value &&
      usePanes.children.value.map((item: TabsPane, index: number) => {
        item.paneName = item.paneName || index

        return {
          /** name 如果没有传递 则用索引代替 */
          name: item.paneName,
          label: item.slots['label'] || item.prop.label
        } as const
      })) as TabsNavInstance[]
  })

  /** prop.modelValue 同步到 currentName 中 */
  watch(
    (): TabsModelValue => prop.modelValue,
    (val: TabsModelValue): void => {
      activeName.value = val as TabsModelValue

      // if (navs.value.length && navs.value.every(e => e.name !== val)) {
      // debugWarn('FTabs', `未找到名为 ${val} 的标签`)
      // }
    },
    { immediate: true }
  )

  /** 初始化设置绑定的标签页 name */
  onMounted(async (): Promise<void> => {
    await nextTick()
    /** 如果没有传 value 默认选中第一个 */
    setActiveName(
      (prop.modelValue || (navs.value[0] && navs.value[0].name)) as TabsModelValue
    )
  })

  /** 将信息传递给子组件 */
  provide<TabsProvide>(TABS_PROPS_KEY, {
    activeName,
    ...usePanes
  })

  return {
    navs,
    activeName,
    setEdit,
    setActiveName
  }
}
