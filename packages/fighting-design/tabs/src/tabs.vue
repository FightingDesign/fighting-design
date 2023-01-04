<script lang="ts" setup name="FTabs">
  import { Props, TABS_PROPS_KEY } from './props'
  import { onMounted, ref, provide, computed, getCurrentInstance, watch, nextTick } from 'vue'
  import { TabsNav } from './components'
  import { debugWarn } from '../../_utils'
  import { getChildrenComponent } from './utils'
  import type { ClassList } from '../../_interface'
  import type { TabsNavInstance, TabsProvide, TabsPaneName, TabsPosition } from './interface'
  import type { ComponentInternalInstance, VNode } from 'vue'

  const prop = defineProps(Props)
  // const slot = useSlots()
  const emit = defineEmits<{
    (e: 'update:modelValue', name: TabsPaneName): void
    (e: 'edit', action: 'remove' | 'add', name?: TabsPaneName, i?: number): void
  }>()

  /**
   * 获取当前组件实例
   */
  const instance: ComponentInternalInstance | null = getCurrentInstance()
  /**
   * panes 集合
   */
  const panes = ref<ComponentInternalInstance[]>([])
  /**
   * 当前选中的 pane
   */
  const currentName = ref<TabsPaneName>(0)

  const setCurrentName = (name: TabsPaneName): void => {
    // 如果用户没有设置 v-model, 这里可以直接在内部修改
    currentName.value = name
    emit('update:modelValue', name)
  }

  /**
   * 触发用户的 emit
   */
  const edit = (action: 'remove' | 'add', name?: TabsPaneName, index?: number): void => {
    emit('edit', action, name, index)
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
    return panes.value.map((item: ComponentInternalInstance, index: number): TabsNavInstance => {
      return {
        name: (item.props.name || (item.props.name = index)) as TabsPaneName, // name如果没填，用下标代替
        label: item.slots['label'] || item.props.label
      } as const
    })
  })

  /**
   * prop.modelValue 同步到 currentName 中
   */
  watch(
    (): TabsPaneName => prop.modelValue,
    (val: TabsPaneName): void => {
      currentName.value = val as TabsPaneName

      if (navs.value.length && navs.value.every(e => e.name !== val)) {
        debugWarn('FTabs', `未找到名为 ${val} 的标签`)
      }
    },
    {
      immediate: true
    }
  )

  onMounted(async (): Promise<void> => {
    await nextTick()
    currentName.value = prop.modelValue || (navs.value[0] && navs.value[0].name) // 如果没有传 value，默认选中第一个
  })

  /**
   * 选项卡标签位置
   */
  const _position = computed((): TabsPosition => {
    const { position, type } = prop
    let _position = position

    if (type === 'segment' && (position === 'right' || position === 'left')) {
      _position = 'top'
      debugWarn('FTabs', 'segment 风格只支持 top、bottom 两种方向')
    }

    return _position
  })

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
    return ['f-tabs', `f-tabs__position_${_position.value}`] as const
  })

  /**
   * 将信息传递给子组件
   */
  provide<TabsProvide>(TABS_PROPS_KEY, {
    currentName,
    updatePaneList
  })

  /**
   * 通过 refs 抛出当前选中的值
   */
  defineExpose({ currentName })
</script>

<template>
  <div :class="classList">
    <tabs-nav
      v-if="navs.length"
      :navs="navs"
      :type="type"
      :current-name="currentName"
      :position="_position"
      :edit-status="editStatus"
      :justify-content="justifyContent"
      :on-before-enter="onBeforeEnter"
      :trigger="trigger"
      @set-current-name="setCurrentName"
      @edit="edit"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>

      <template v-if="$slots.suffix" #suffix>
        <slot name="suffix" />
      </template>
    </tabs-nav>

    <!-- 主要展示的内容 -->
    <div class="f-tabs__content">
      <slot />
    </div>
  </div>
</template>
