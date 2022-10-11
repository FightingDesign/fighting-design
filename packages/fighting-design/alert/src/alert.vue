<script lang="ts" setup name="FAlert">
  import { Props, Emits } from './alert'
  import { computed, ref } from 'vue'
  import { FIcon } from '../../icon'
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
      `f-alert-${type}`,
      {
        'f-alert-bold': bold,
        'f-alert-simple': simple,
        'f-alert-center': center,
        'f-alert-round': round,
        'f-alert-fixed': fixed
      }
    ] as const
  })

  const contentClassList: ComputedRef<b> = computed((): b => {
    const { overflow } = prop

    return [
      'f-alert-content',
      {
        [`f-alert-content-${overflow}`]: overflow
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
    <f-icon v-if="icon" :icon="icon" class="f-alert-icon" />

    <div :class="contentClassList">
      <div v-if="title" class="f-alert-title">
        <slot name="title">{{ title }}</slot>
      </div>

      <div v-if="$slots.default" class="f-alert-sub-title">
        <slot />
      </div>
    </div>

    <span
      v-if="close || $slots.close"
      class="f-alert-close"
      @click.stop="handleClose"
    >
      <slot name="close">
        <f-icon icon="f-icon-close" />
      </slot>
    </span>
  </div>
</template>
