<script lang="ts" setup name="FToolbarItem">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { useRun } from '../../_hooks'

  const prop = defineProps(Props)

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    useRun(prop.onClick, evt)
  }
</script>

<template>
  <span class="f-toolbar-item" :data-index="index" :style="{ color }" @click="handleClick">
    <f-svg-icon v-if="icon" :size="iconSize" :icon="icon" />
    <slot />
  </span>
</template>
