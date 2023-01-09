<script lang="ts" setup name="FTabsPane">
  import { Props } from './props'
  import { TABS_PROPS_KEY } from '../../tabs/src/props'
  import { computed, inject, onBeforeUnmount } from 'vue'
  import type { TabsProvide } from '../../_hooks'

  const prop = defineProps(Props)

  /** 获取父组件注入的依赖项 */
  const parentInject = inject<TabsProvide | null>(TABS_PROPS_KEY, null)

  /** 该组件是否加载 */
  const isLoad = computed((): boolean => {
    if (!parentInject) return false
    if (parentInject.currentName.value === prop.name) {
      return true
    } else {
      return !prop.lazy
    }
  })

  /** 该组件是否显示 */
  const isShow = computed((): boolean | null => parentInject && parentInject.currentName.value === prop.name)

  /** 在组件插入及卸载时都要更新父级的 pane 列表 */
  parentInject && parentInject.updatePaneList()

  onBeforeUnmount((): void => {
    parentInject && parentInject.updatePaneList()
  })
</script>

<template>
  <div v-if="isLoad" v-show="isShow" class="f-tabs-pane">
    <slot />
  </div>
</template>
