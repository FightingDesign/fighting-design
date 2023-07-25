<script lang="ts" setup>
  import { Props } from './props'
  import { TABS_PROPS_KEY } from '../../tabs/src/props'
  import { inject, computed } from 'vue'

  defineOptions({ name: 'FTabsItem' })

  const prop = defineProps(Props)

  /** 获取父组件注入的依赖项 */
  const parentInject = inject(TABS_PROPS_KEY, null)

  /** 该组件是否显示 */
  const isShow = computed(
    (): boolean | null => parentInject && parentInject.activeName.value === prop.name
  )
</script>

<template>
  <div v-show="isShow" class="f-tabs-item" role="tabpanel">
    <slot />
  </div>
</template>
