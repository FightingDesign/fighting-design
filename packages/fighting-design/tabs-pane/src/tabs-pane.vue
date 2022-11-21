<script lang="ts" setup name="FTabsPane">
  import { Props } from './props'
  import { TabsProvideKey } from '../../tabs/src/props'
  import { computed, inject, onBeforeUnmount } from 'vue'
  import type { TabsPanePropsType } from './interface'
  import type { TabsProvide } from '../../tabs/src/interface'

  const prop: TabsPanePropsType = defineProps(Props)

  const INJECT_DEPEND: TabsProvide | undefined =
    inject<TabsProvide>(TabsProvideKey)

  /**
   * 该组件是否加载
   */
  const isLoad = computed(() => {
    if (!INJECT_DEPEND) return false
    if (INJECT_DEPEND.currentName.value === prop.name) {
      return true
    } else {
      return !prop.lazy
    }
  })

  /**
   * 该组件是否显示
   */
  const isShow = computed(
    () => INJECT_DEPEND && INJECT_DEPEND.currentName.value === prop.name
  )

  /**
   * 在组件插入及卸载时都要更新父级的pane列表
   */
  INJECT_DEPEND && INJECT_DEPEND.updatePaneList()

  onBeforeUnmount(() => {
    INJECT_DEPEND && INJECT_DEPEND.updatePaneList()
  })
</script>

<template>
  <div v-if="isLoad" v-show="isShow" class="f-tabs-pane">
    <slot />
  </div>
</template>
