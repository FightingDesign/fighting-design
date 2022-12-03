<script lang="ts" setup name="FSvgIcon">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange, runCallback } from '../../_utils'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    runCallback(prop.onClick, evt)
  }

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { size, color } = prop

    return {
      fontSize: sizeChange(size),
      color
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
