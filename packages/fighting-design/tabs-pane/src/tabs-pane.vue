<script lang="ts" setup name="FTabsPane">
  import { Props, Emits } from './props'
  import type { TabsPanePropsType } from './interface'
  import { TabsProvideKey } from '../../tabs/src/props'
import { computed, inject, ref } from 'vue';
import { TabsProvide } from '../../tabs/src/interface';

  const prop: TabsPanePropsType = defineProps(Props)
  defineEmits(Emits)

  const tabsProvide = inject<TabsProvide>(TabsProvideKey)

  /**
   * 该组件是否加载
   */
  const isLoad = ref(!prop.lazy)
  /**
   * 该组件是否显示
   */
  const isShow = computed(() => tabsProvide.currentName.value === prop.name)
</script>

<template>
  <div class="f-tabs-pane" v-if="isLoad" v-show="isShow">
    <slot></slot>
  </div>
</template>
