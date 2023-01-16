<script lang="ts" setup name="FCard">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'card')

  /** 类名列表 */
  const classList = classes(['round', 'shadow'], 'f-card')

  /** 样式列表 */
  const styleList = styles(['padding'])
</script>

<template>
  <div :class="classList">
    <!-- 
      头部
      https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role
    -->
    <div v-if="$slots.header || title" role="heading" class="f-card__header">
      <slot name="header">{{ title }}</slot>
    </div>

    <!-- 主内容 -->
    <div role="none" class="f-card__body" :style="styleList">
      <slot />
    </div>
  </div>
</template>
