<script lang="ts" setup name="FTabs">
  import { Props, TabsProvideKey } from './props'
  import { onMounted, ref, provide, computed, getCurrentInstance, watch, nextTick, useSlots } from 'vue'
  import { TabsNav } from './components'
  import { debugWarn } from '../../_utils'
  import { getChildrenComponent } from './utils'
  import type { TabsNavInstance, TabsProvide, TabsPaneName } from './interface'
  import type { ComponentInternalInstance } from 'vue'

  const prop = defineProps(Props)
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
   * 触发用户的emit
   */
  const edit = (action: 'remove' | 'add', name?: TabsPaneName, i?: number): void => {
    emit('edit', action, name, i)
  }

  /**
   * 更新 pane 列表
   */
  const updatePaneList = (): void => {
    nextTick(() => {
      if (!instance) return
      panes.value = getChildrenComponent(instance, 'FTabsPane').map(e => e.component as ComponentInternalInstance)
    })
  }
  /**
   * nav 列表
   */
  const navs = computed((): TabsNavInstance[] => {
    return panes.value.map((e, i) => {
      return {
        name: (e.props.name || (e.props.name = i)) as TabsPaneName, // name如果没填，用下标代替
        label: e.slots['label'] || e.props.label
      }
    })
  })

  /**
   * prop.modelValue 同步到 currentName 中
   */
  watch(
    () => prop.modelValue,
    (val): void => {
      currentName.value = val as TabsPaneName

      if (navs.value.length && navs.value.every(e => e.name !== val)) {
        debugWarn('FTabs', `未找到名为 ${val} 的标签`)
      }
    },
    {
      immediate: true
    }
  )

  onMounted(async () => {
    await nextTick()
    currentName.value = prop.modelValue || (navs.value[0] && navs.value[0].name) // 如果没有传 value，默认选中第一个
  })

  const _position = computed(() => {
    const { position, type } = prop

    let _position = position
    if (type === 'segment' && (position === 'right' || position === 'left')) {
      _position = 'top'
      debugWarn('FTabs', 'segment 风格只支持 top、bottom 两种方向')
    }
    return _position
  })

  const styleList = computed(() => {
    return [`f-tabs__position_${_position.value}`]
  })

  /**
   * 通过refs 抛出当前选中的值
   */
  defineExpose({
    currentName
  })

  /**
   * 将信息传递给子组件
   */
  provide<TabsProvide>(TabsProvideKey, {
    currentName,
    updatePaneList
  })

  const slots = useSlots()
</script>

<template>
  <div class="f-tabs" :class="styleList">
    <tabs-nav
      v-if="navs.length"
      :navs="navs"
      :type="type"
      :current-name="currentName"
      :position="_position"
      :edit-status="editStatus"
      :justify-content="justifyContent"
      :before-enter="beforeEnter"
      :trigger="trigger"
      @set-current-name="setCurrentName"
      @edit="edit"
    >
      <template v-if="slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="slots.suffix" #suffix>
        <slot name="suffix" />
      </template>
    </tabs-nav>

    <!-- 主要展示的内容 -->
    <div class="f-tabs__content">
      <slot />
    </div>
  </div>
</template>
