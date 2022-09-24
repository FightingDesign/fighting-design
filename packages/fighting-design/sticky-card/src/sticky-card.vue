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
  }

  const optionText: ComputedRef<string> = computed((): string => {
    const { openText, closeText } = prop

    return `${unref(isOpen) ? openText : closeText}`
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, openHeight } = prop

    return {
      background,
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
  <div class="f-sticky-card">
    <div :class="classList" :style="styleList">
      <div class="f-sticky-card-content">
        <slot />
      </div>
    </div>
    <div class="f-sticky-card-option" @click="handleClick">
      <span class="f-sticky-card-option-text">{{ optionText }}</span>
    </div>
  </div>
</template>
