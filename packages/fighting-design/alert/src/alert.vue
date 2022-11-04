<script lang="ts" setup name="FAlert">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { FCloseBtn } from '../../close-btn'
  import { FSvgIcon } from '../../svg-icon'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties, Ref } from 'vue'
  import type {
    HandleMouseEventInterface,
    ClassListInterface
  } from '../../_interface'
  import type { AlertPropsType } from './props'

  const prop: AlertPropsType = defineProps(Props)

  const isShow: Ref<boolean> = ref<boolean>(true)

  // class 类名列表
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
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
    }
  )

  // content class 列表
  const contentClassList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { overflow } = prop

      return [
        'f-alert__content',
        {
          [`f-alert__content-${overflow}`]: overflow
        }
      ] as const
    }
  )

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { fontSize, color, background, titleSize, titleColor } = prop

    return {
      '--f-alert-color': color,
      '--f-alert-title-color': titleColor,
      '--f-alert-background': background,
      '--f-alert-font-size': sizeChange(fontSize),
      '--f-alert-title-size': sizeChange(titleSize)
    } as CSSProperties
  })

  // 关闭
  const handleClose: HandleMouseEventInterface = (evt: MouseEvent): void => {
    isShow.value = false
    prop.closeEnd && prop.closeEnd(evt)
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

      <div class="f-alert__sub-title">
        <slot />
      </div>
    </div>

    <f-close-btn
      v-if="close"
      no-hover
      color="#fff"
      :icon="closeIcon"
      @click.stop="handleClose"
    >
      <slot name="closeIcon" />
    </f-close-btn>
  </div>
</template>
