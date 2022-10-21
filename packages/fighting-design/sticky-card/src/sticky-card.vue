<script lang="ts" setup name="FStickyCard">
  import { Props } from './sticky-card'
  import { ref, computed, unref } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type {
    ClassListInterface as a,
    OrdinaryFunctionInterface as b
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
    const { background, openHeight, borderColor } = prop

    return {
      '--sticky-card-content-background': background,
      '--sticky-card-border-color': borderColor,
      '--sticky-card-max-height': sizeChange(openHeight)
    } as const
  })

  const classList: ComputedRef<a> = computed((): a => {
    return [
      'f-sticky-card__box',
      {
        'f-sticky-card__box-open': unref(isOpen)
      }
    ] as const
  })
</script>

<template>
  <div class="f-sticky-card" :style="styleList">
    <div v-if="$slots.source" class="f-sticky-card__source">
      <slot name="source" />
    </div>

    <div :class="classList">
      <div class="f-sticky-card__content">
        <slot />
      </div>
    </div>
    <div
      :class="[
        'f-sticky-card__option',
        { 'f-sticky-card__option-open': isOpen }
      ]"
      @click.self="handleClick"
    >
      <!-- 左侧插槽 -->
      <span class="f-sticky-card__option-left">
        <slot name="optionLeft" />
      </span>

      <span class="f-sticky-card__option-text" @click.self="handleClick">
        {{ optionText }}
      </span>

      <!-- 右侧插槽 -->
      <span class="f-sticky-card__option-right">
        <slot name="optionRight" />
      </span>
    </div>
  </div>
</template>
