<script lang="ts" setup name="FSvgIcon">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { HandleMouseEventInterface } from '../../_interface'
  import type { SvgIconPropsType } from './props'

  const prop: SvgIconPropsType = defineProps(Props)

  /**
   * 点击触发
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    prop.click && prop.click(evt)
  }

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    return {
      fontSize: sizeChange(prop.size),
      color: prop.color
    } as const
  })
</script>

<template>
  <i
    class="f-svg-icon"
    text-indent="middle"
    :style="styleList"
    @click="handleClick"
  >
    <component :is="icon" v-if="icon" />
    <slot v-else />
  </i>
</template>
