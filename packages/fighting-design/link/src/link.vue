<script lang="ts" setup name="FLink">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { runCallback } from '../../_utils'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'link')

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled || prop.noLink) {
      evt.preventDefault()
      return
    }
    runCallback(prop.onClick, evt)
  }

  /**
   * 类名列表
   */
  const classList = classes(['type', 'state', 'disabled', 'noCopy'], 'f-link')

  /**
   * 样式列表
   */
  const styleList = styles(['size', 'color'])
</script>

<template>
  <a
    role="link"
    :class="classList"
    :style="styleList"
    :href="href"
    :disabled="disabled"
    :target="target"
    @click="handleClick"
  >
    <f-svg-icon
      v-if="$slots.beforeIcon || beforeIcon"
      :icon="beforeIcon"
      :size="size || 16"
    >
      <slot name="beforeIcon" />
    </f-svg-icon>

    <slot />

    <f-svg-icon
      v-if="$slots.afterIcon || afterIcon"
      :icon="afterIcon"
      :size="size"
    >
      <slot name="afterIcon" />
    </f-svg-icon>
  </a>
</template>
