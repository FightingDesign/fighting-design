import {
  getCurrentInstance,
  ref,
  nextTick,
  onMounted,
  watch,
  computed,
  provide
} from 'vue'
import { getChildrenComponent } from '../../_utils'
import { TABS_PROPS_KEY } from '../../tabs/src/props'
import type { ComponentInternalInstance, VNode } from 'vue'
import type { UseTabsReturn, TabsProvide } from './interface'
import type { TabsPaneName, TabsProps, TabsNavInstance } from '../../tabs'

export * from './interface.d'

/**
 * tabs 标签
 * 
 * @param prop props 参数
 */
export const useTabs = (prop: TabsProps): UseTabsReturn => {

  /**
   * 获取当前组件实例
   */
  const instance: ComponentInternalInstance | null = getCurrentInstance()
  /**
   * 子组件集合
   */
  const panes = ref<ComponentInternalInstance[]>([])
  /**
   * 当前选中的子组件
   */
  const currentName = ref<TabsPaneName>(0)

  /**
   * 设置子组件绑定的 name
   *
   * @param name 子组件的 name
   */
  const setCurrentName = (name: TabsPaneName): void => {
    currentName.value = name
  }

  /**
   * 编辑状态
   *
   * @param action 添加还是删除
   * @param name 当前子组件的 name
   * @param index 索引值
   */
  const edit = (action: 'remove' | 'add', name?: TabsPaneName, index?: number): void => {
    prop.onEdit && prop.onEdit(action, name, index)
  }

  /**
   * 更新子组件列表
   */
  const updatePaneList = (): void => {
    nextTick((): void => {
      if (!instance) return
      panes.value = getChildrenComponent(instance, 'FTabsPane').map(
        (e: VNode) => e.component as ComponentInternalInstance
      )
    })
  }

  /**
   * nav 列表
   */
  const navs = computed((): TabsNavInstance[] => {
    return (
      panes.value &&
      panes.value.map((item: ComponentInternalInstance, index: number): TabsNavInstance => {
        return {
          // name 如果没有传递 则用索引代替
          name: (item.props.name || (item.props.name = index)) as TabsPaneName,
          label: item.slots['label'] || item.props.label
        } as const
      })
    )
  })

  /**
   * prop.modelValue 同步到 currentName 中
   */
  watch(
    (): TabsPaneName => prop.modelValue,
    (val: TabsPaneName): void => {
      currentName.value = val as TabsPaneName

      if (navs.value.length && navs.value.every(e => e.name !== val)) {
        // debugWarn('FTabs', `未找到名为 ${val} 的标签`)
      }
    },
    { immediate: true }
  )

  // 初始化设置绑定的标签页 name
  onMounted(async (): Promise<void> => {
    await nextTick()
    // 如果没有传 value 默认选中第一个
    setCurrentName(prop.modelValue || (navs.value[0] && navs.value[0].name))
  })

  /**
  * 将信息传递给子组件
  */
  provide<TabsProvide>(TABS_PROPS_KEY, {
    currentName,
    updatePaneList
  })

  return {
    navs,
    currentName,
    edit,
    setCurrentName
  }
}
