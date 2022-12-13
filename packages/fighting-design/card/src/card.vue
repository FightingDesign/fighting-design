<script lang="ts" setup name="FCard">
  import { Props } from './props'
  import { useList } from '../../_hooks'

  const prop = defineProps(Props)

  const { classes, styles } = useList(prop, 'card')

  /**
   * 类名列表
   */
  const classList = classes(['round', 'shadow'], 'f-card')

  /**
   * 样式列表
   */
  const styleList = styles(['padding'])
</script>

<template>
  <div :class="classList">
    <!-- 头部 -->
    <div v-if="$slots.header || title" class="f-card__header">
      <slot name="header">{{ title }}</slot>
    </div>

    <!-- 主内容 -->
    <div class="f-card__body" :style="styleList">
      <slot />
    </div>
  </div>
</template>
