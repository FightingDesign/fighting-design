<script lang="ts" setup class="FMain">
  import { Props } from './props'
  import { useList } from '../../_hooks'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { MainPropsType } from './props'

  const prop: MainPropsType = defineProps(Props)

  const { styles } = useList(prop, 'main')

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(['padding'])
</script>

<template>
  <main role="main" class="f-main" :style="styleList">
    <slot />
  </main>
</template>
