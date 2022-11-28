<script lang="ts" setup name="FStickyCard">
  import { Props } from './props'
  import { ref, computed, unref } from 'vue'
  import { sizeChange, runCallback } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { OrdinaryFunctionInterface } from '../../_interface'
  import type { StickyCardPropsType } from './props'

  const prop: StickyCardPropsType = defineProps(Props)

  /**
   * 是否打开
   */
  const isOpen: Ref<boolean> = ref<boolean>(prop.open)
  /**
   * 主要的折叠内容
   */
  const content: Ref<HTMLDivElement> = ref(null as unknown as HTMLDivElement)

  /**
   * 点击触发
   */
  const handleClick: OrdinaryFunctionInterface = (): void => {
    if (!isOpen.value) {
      content.value.style.height = 'auto'
      const height: number = content.value.offsetHeight
      content.value.style.height = '0'
      content.value.offsetHeight
      content.value.style.transition = '0.33s'
      content.value.style.height = height + 'px'
      isOpen.value = true
      runCallback(prop.onOpen, isOpen.value)
    } else {
      content.value.style.height = '0'
      isOpen.value = false
      runCallback(prop.onClose, isOpen.value)
    }
  }

  /**
   * 展示的文字内容
   */
  const optionText: ComputedRef<string> = computed((): string => {
    const { openText, closeText } = prop

    return `${unref(isOpen) ? openText : closeText}`
  })

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, openHeight, borderColor } = prop

    return {
      '--sticky-card-content-background': background,
      '--sticky-card-border-color': borderColor,
      '--sticky-card-max-height': sizeChange(openHeight)
    } as CSSProperties
  })
</script>

<template>
  <div class="f-sticky-card" :style="styleList">
    <!-- 展示的内容 -->
    <div v-if="$slots.source" class="f-sticky-card__source">
      <slot name="source" />
    </div>

    <!-- 折叠的内容 -->
    <div ref="content" class="f-sticky-card__box">
      <slot />
    </div>

    <!-- 点击展开 / 折叠的区域 -->
    <div
      :class="[
        'f-sticky-card__option',
        { 'f-sticky-card__option-open': isOpen }
      ]"
      @click="handleClick"
    >
      <span class="f-sticky-card__option-text">
        {{ optionText }}
      </span>
    </div>
  </div>
</template>
