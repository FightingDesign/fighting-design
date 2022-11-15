<script lang="ts" setup name="FTabsPane">
  import { Props, Emits } from './props'
  import { TabsProvideKey } from '../../tabs/src/props'
  import { computed, inject, onBeforeUnmount } from 'vue'
  import type { TabsPanePropsType } from './interface'
  import type { TabsProvide } from '../../tabs/src/interface'

  const prop: TabsPanePropsType = defineProps(Props)
  defineEmits(Emits)

  const tabsProvide = inject<TabsProvide>(TabsProvideKey)

  /**
   * 该组件是否加载
   */
  const isLoad = computed(() => {
    if (tabsProvide.currentName.value === prop.name) {
      return true
    } else {
      return !prop.lazy
    }
  })

  /**
   * 该组件是否显示
   */
  const isShow = computed(() => tabsProvide.currentName.value === prop.name)

  /**
   * 在组件插入及卸载时都要更新父级的pane列表
   */
  tabsProvide.updatePaneList()

  onBeforeUnmount(() => {
    tabsProvide.updatePaneList()
  })
</script>

<template>
  <div v-if="isLoad" v-show="isShow" class="f-tabs-pane">
    <slot></slot>
  </div>
</template>
