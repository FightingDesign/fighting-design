<script lang="ts" setup>
  import { Props } from './props'
  import { TABS_PROPS_KEY } from '../../tabs/src/props'
  import {
    computed,
    getCurrentInstance,
    inject,
    onBeforeUnmount,
    onMounted,
    ref,
    useSlots,
    reactive
  } from 'vue'
  import type { ComponentInternalInstance, Slots } from 'vue'
  import type { TabsProvide } from '../../_hooks'
  import type { TabsPane } from './interface'
  import type { TabsModelValue } from '../../tabs'

  defineOptions({ name: 'FTabsPane' })

  const prop = defineProps(Props)
  const slots: Slots = useSlots()

  /** 获取到当前组件实例 */
  const instance = getCurrentInstance() as ComponentInternalInstance

  /** 选中的 name */
  const paneName = ref<TabsModelValue>(prop.name)

  /** 获取父组件注入的依赖项 */
  const parentInject: TabsProvide | null = inject(TABS_PROPS_KEY, null)

  /** 该组件是否加载 */
  const isLoad = computed((): boolean => {
    if (!parentInject) return false
    if (parentInject.activeName.value === paneName.value) {
      return true
    }
    return !prop.lazy
  })

  /** 该组件是否显示 */
  const isShow = computed(
    (): boolean | null => parentInject && parentInject.activeName.value === paneName.value
  )

  const pane: TabsPane = reactive({
    paneName,
    label: prop.label,
    uid: instance.uid,
    slots,
    prop
  })

  /** 在组件插入及卸载时都要更新父级的 pane 列表 */
  onMounted((): void => {
    parentInject && parentInject.registerChild(pane)
  })

  onBeforeUnmount((): void => {
    parentInject && parentInject.unRegisterChild(pane)
  })
</script>

<template>
  <div v-if="isLoad" v-show="isShow" role="tabpanel" class="f-tabs-pane">
    <slot />
  </div>
</template>
