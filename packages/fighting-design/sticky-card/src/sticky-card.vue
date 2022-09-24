<script lang="ts" setup name="FStickyCard">
  import { Props } from './sticky-card'
  import { ref, computed, unref } from 'vue'
  import { isString } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type {
    classListInterface as a,
    ordinaryFunctionInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)

  const isOpen: Ref<boolean> = ref<boolean>(prop.open)

  const handleClick: b = (): void => {
    isOpen.value = !unref(isOpen)

    const { openEnd, closeEnd } = prop

    if (unref(isOpen)) {
      openEnd(true)
    } else {
      closeEnd(false)
    }
  }

  const optionText: ComputedRef<string> = computed((): string => {
    const { openText, closeText } = prop

    return `${unref(isOpen) ? openText : closeText}`
  })

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, openHeight } = prop

    return {
      '--sticky-card-content-background': background,
      '--sticky-card-max-height': isString(openHeight)
        ? openHeight
        : openHeight + 'px'
    } as const
  })

  const classList: ComputedRef<a> = computed((): a => {
    return [
      'f-sticky-card-box',
      {
        'f-sticky-card-box-open': unref(isOpen)
      }
    ] as const
  })
</script>

<template>
  <div class="f-sticky-card" :style="styleList">
    <div :class="classList">
      <div class="f-sticky-card-content">
        <slot />
      </div>
    </div>
    <div class="f-sticky-card-option" @click.self="handleClick">
      <!-- 左侧插槽 -->
      <span class="f-sticky-card-option-left">
        <slot name="option-left" />
      </span>

      <span class="f-sticky-card-option-text" @click.self="handleClick">
        {{ optionText }}
      </span>

      <!-- 右侧插槽 -->
      <span class="f-sticky-card-option-right">
        <slot name="option-right" />
      </span>
    </div>
  </div>
</template>
