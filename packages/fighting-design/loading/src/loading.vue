<script setup lang="ts" name="FLoading">
  import { computed } from 'vue'
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingAVue } from '../../_svg'
  import type { ComputedRef, CSSProperties } from 'vue'

  // import type { HandleMouseEventInterface } from '../../_interface'
  import type { LoadingPropsType } from './props'

  const prop: LoadingPropsType = defineProps(Props)

  // 点击
  // const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
  //   prop.closeEnd && prop.closeEnd(evt)
  // }

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, fontColor } = prop
    return {
      background,
      color: fontColor
    } as const
  })
  const classList = computed(() => {
    const { mode, background, fullscreen = false } = prop
    return [
      'f-loading',
      {
        'f-loading--dark': !background && mode === 'dark',
        'f-loading--fullscreen': fullscreen
      }
    ] 
  })
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
