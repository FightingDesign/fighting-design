<script setup lang="ts" name="FLoading">
  import { Props } from './props'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingAVue } from '../../_svg'
  import type { ClassListInterface } from '../../_interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { LoadingPropsType } from './props'

  const prop: LoadingPropsType = defineProps(Props)

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, fontColor } = prop

    return {
      background,
      color: fontColor
    } as const
  })

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { fullscreen = false } = prop

      return [
        'f-loading',
        {
          'f-loading__fullscreen': fullscreen
        }
      ] as const
    }
  )
</script>

<template>
  <div v-if="visible" :class="classList" :style="styleList">
    <f-svg-icon :size="20" class="f-loading__animation" :icon="icon">
      <slot name="icon">
        <f-icon-loading-a-vue />
      </slot>
    </f-svg-icon>

    <span v-if="text" class="f-loading__title">
      {{ text }}
    </span>
  </div>
</template>
