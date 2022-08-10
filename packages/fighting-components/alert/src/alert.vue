<script lang="ts" setup name="FAlert">
  import { Props, Emits } from './alert'
  import { computed, ref } from 'vue'
  import FIcon from '../../icon'
  import type { ComputedRef, CSSProperties, Ref } from 'vue'
  import type { handleCloseInterface as a } from './interface'
  import type { FPropsType } from './alert'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const isShow: Ref<boolean> = ref<boolean>(true)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
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
    }
  )

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { fontSize, color, background, fixed, fixedStyle } = prop

    const style = {
      color,
      background,
      fontSize
    } as const

    if (fixed && fixedStyle) {
      return { ...style, ...fixedStyle } as const
    }
    return style
  })

  const overflowList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { overflow } = prop

      let style: CSSProperties = {}
      if (overflow === 'ellipsis') {
        style.whiteSpace = 'nowrap'
        style.overflow = 'hidden'
        style.textOverflow = 'ellipsis'
      } else if (overflow === 'hidden') {
        style.whiteSpace = 'nowrap'
        style.overflow = 'hidden'
      } else if (overflow === 'roll') {
        style.overflow = 'scroll'
      } else {
        style = {}
      }
      return style
    }
  )

  const handleClose: a = (evt: MouseEvent): void => {
    isShow.value = false
    emit('close-end', evt)
  }
</script>

<template>
  <div v-if="isShow" :class="classList" :style="styleList">
    <div v-if="title" class="f-alert-title">
      <f-icon :icon="icon" />
      {{ title }}
    </div>
    <div v-if="$slots.default" class="f-alert-sub-title" :style="overflowList">
      <slot />
    </div>
    <span v-if="close" class="f-alert-close" @click.stop="handleClose">
      <f-icon icon="f-icon-close" />
    </span>
  </div>
</template>
