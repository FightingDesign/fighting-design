<script lang="ts" setup name="FTabsPane">
  import { Props } from './props'
  import { TabsProvideKey } from '../../tabs/src/props'
  import { computed, inject, onBeforeUnmount } from 'vue'
  import type { TabsProvide } from '../../tabs/src/interface'

  const prop = defineProps(Props)

  const parentInject = inject<TabsProvide | null>(TabsProvideKey, null)

  /**
   * 该组件是否加载
   */
  const isLoad = computed(() => {
    if (!parentInject) return false
    if (parentInject.currentName.value === prop.name) {
      return true
    } else {
      return !prop.lazy
    }
  })

  /**
   * 该组件是否显示
   */
  const isShow = computed(() => parentInject && parentInject.currentName.value === prop.name)

  /**
   * 在组件插入及卸载时都要更新父级的pane列表
   */
  parentInject && parentInject.updatePaneList()

  onBeforeUnmount(() => {
    parentInject && parentInject.updatePaneList()
  })
</script>

<template>
  <div v-if="isLoad" v-show="isShow" class="f-tabs-pane">
    <slot />
  </div>
</template>
