<template>
  <div :class="spaceClassObject" :style="realStyle">
    <slot />
  </div>
</template>
<script lang="ts" setup name="FSpace">
  import { computed, ref } from 'vue'
  import { Props, SpacingType } from './space'
  import { spaceSize } from './interface'
  const prefixClass = 'f-space'
  const props = defineProps(Props)
  function isString(s: any) {
    return typeof s === 'string'
  }
  function isNumber(s: any) {
    return typeof s === 'number'
  }

  function isArray(s: any) {
    return Array.isArray(s)
  }

  let realStyle = ref({
    ...props.style
  })

  const spaceClassObject = computed(() => {
    const { position, className, wrap, vertical, spacing, style } = props
    const isWrap = wrap

    realStyle.value = { ...style }
    let spacingHorizontalType: spaceSize = SpacingType.SPACING_SMALL
    let spacingVerticalType: spaceSize = SpacingType.SPACING_SMALL
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
    return {
      [className]: !!className,
      [prefixClass]: true,
      [`${prefixClass}-align-${position}`]: position,
      [`${prefixClass}-vertical`]: vertical,
      [`${prefixClass}-horizontal`]: !vertical,
      [`${prefixClass}-wrap`]: isWrap,
      [`${prefixClass}-large-horizontal`]:
        spacingHorizontalType === SpacingType.SPACING_LARGE,
      [`${prefixClass}-large-vertical`]:
        spacingVerticalType === SpacingType.SPACING_LARGE,
      [`${prefixClass}-middle-horizontal`]:
        spacingHorizontalType === SpacingType.SPACING_MIDDLE,
      [`${prefixClass}-middle-vertical`]:
        spacingVerticalType === SpacingType.SPACING_MIDDLE,
      [`${prefixClass}-small-horizontal`]:
        spacingHorizontalType === SpacingType.SPACING_SMALL,
      [`${prefixClass}-small-vertical`]:
        spacingVerticalType === SpacingType.SPACING_SMALL
    }
  })
</script>
