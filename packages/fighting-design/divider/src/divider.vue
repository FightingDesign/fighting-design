<script lang="ts" setup name="FDivider">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'divider')

  /** 类名列表 */
  const classList = classes(['vertical', 'position'], 'f-divider')

  /** 类名列表 */
  const styleList = styles([
    'color',
    'margin',
    'background',
    'fontColor',
    'height',
    'type'
  ])
</script>

<template>
  <div role="separator" :class="classList" :style="styleList">
    <span v-if="!vertical || !$slots.default" class="f-divider__text">
      <slot />
    </span>
  </div>
</template>
