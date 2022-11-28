<script lang="ts" setup name="FFooter">
  import { Props } from './props'
  import { useList } from '../../_hooks'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { FooterPropsType } from './props'

  const prop: FooterPropsType = defineProps(Props)

  const { styles } = useList(prop, 'footer')

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(['height', 'padding'])
</script>

<template>
  <footer class="f-footer" :style="styleList">
    <slot />
  </footer>
</template>
