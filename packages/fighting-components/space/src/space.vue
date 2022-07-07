<script lang="ts" setup name="FSpace">
  import { computed, ref } from 'vue'
  import { Props } from './space'
  import type { spaceSize } from './interface'

  enum spacingType {
    SPACING_LARGE = 'large',
    SPACING_MIDDLE = 'middle',
    SPACING_SMALL = 'small'
  }

  const prop = defineProps(Props)

  const isString = (s: unknown): boolean => {
    return typeof s === 'string'
  }

  const isNumber = (s: unknown): boolean => {
    return typeof s === 'number'
  }

  const isArray = (s: unknown): boolean => {
    return Array.isArray(s)
  }

  const realStyle = ref({
    ...prop.style
  })

  const spaceClassList = computed(() => {
    const { position, className, wrap, vertical, spacing, style } = prop

    // realStyle.value = { ...style }

    let spacingHorizontalType: spaceSize = spacingType.SPACING_SMALL
    let spacingVerticalType: spaceSize = spacingType.SPACING_SMALL

    if (isString(spacing)) {
      spacingHorizontalType = spacing
      spacingVerticalType = spacing
    } else if (isNumber(spacing)) {
      realStyle.value.rowGap = `${spacing}px`
      realStyle.value.columnGap = `${spacing}px`
    } else if (isArray(spacing)) {
      if (isString(spacing[0])) {
        spacingHorizontalType = spacing[0]
      } else if (isNumber(spacing[0])) {
        realStyle.value.columnGap = `${spacing[0]}px`
      }
      if (isString(spacing[1])) {
        spacingVerticalType = spacing[1]
      } else if (isNumber(spacing[1])) {
        realStyle.value.rowGap = `${spacing[1]}px`
      }
    }
    return [
      'f-space',
      className,
      {
        // [className]: !!className,
        [`f-space-align-${position}`]: position,
        'f-space-vertical': vertical,
        'f-space-horizontal': !vertical,
        'f-space-wrap': wrap,
        'f-space-large-horizontal':
          spacingHorizontalType === spacingType.SPACING_LARGE,
        'f-space-large-vertical':
          spacingVerticalType === spacingType.SPACING_LARGE,
        'f-space-middle-horizontal':
          spacingHorizontalType === spacingType.SPACING_MIDDLE,
        'f-space-middle-vertical':
          spacingVerticalType === spacingType.SPACING_MIDDLE,
        'f-space-small-horizontal':
          spacingHorizontalType === spacingType.SPACING_SMALL,
        'f-space-small-vertical':
          spacingVerticalType === spacingType.SPACING_SMALL
      }
    ]
  })
</script>

<template>
  <div :class="spaceClassList" :style="realStyle">
    <slot />
  </div>
</template>
