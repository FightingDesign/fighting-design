<script lang="ts" setup name="FAlert">
  import { Props, Emits } from './alert'
  import { computed, ref } from 'vue'
  import { FCloseBtn } from '../../close-btn'
  import { FSvgIcon } from '../../svg-icon'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties, Ref } from 'vue'
  import type {
    HandleEventInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isShow: Ref<boolean> = ref<boolean>(true)

  const classList: ComputedRef<b> = computed((): b => {
    const { type, bold, simple, center, round, fixed } = prop

    return [
      'f-alert',
      {
        [`f-alert__${type}`]: type,
        'f-alert__bold': bold,
        'f-alert__simple': simple,
        'f-alert__center': center,
        'f-alert__round': round,
        'f-alert__fixed': fixed
      }
    ] as const
  })

  const contentClassList: ComputedRef<b> = computed((): b => {
    const { overflow } = prop

    return [
      'f-alert__content',
      {
        [`f-alert__content-${overflow}`]: overflow
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { fontSize, color, background, titleSize, titleColor } = prop

    return {
      '--f-alert-color': color,
      '--f-alert-title-color': titleColor,
      '--f-alert-background': background,
      '--f-alert-font-size': sizeChange(fontSize),
      '--f-alert-title-size': sizeChange(titleSize)
    }
  })

  const handleClose: a = (evt: MouseEvent): void => {
    isShow.value = false
    emit('close-end', evt)
  }
</script>

<template>
  <div v-if="isShow" role="alert" :class="classList" :style="styleList">
    <f-svg-icon v-if="$slots.beforeIcon || beforeIcon" :icon="beforeIcon">
      <slot name="beforeIcon" />
    </f-svg-icon>

    <div :class="contentClassList">
      <div v-if="title" class="f-alert__title">
        <slot name="title">{{ title }}</slot>
      </div>

      <div v-if="$slots.default" class="f-alert__sub-title">
        <slot />
      </div>
    </div>

    <f-close-btn v-if="close" :icon="closeIcon" @click.stop="handleClose">
      <slot name="closeIcon" />
    </f-close-btn>
  </div>
</template>
