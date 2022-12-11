<script lang="ts" setup name="FStickyCard">
  import { Props } from './props'
  import { ref, computed, unref } from 'vue'
  import { useRun } from '../../_hooks'
  import { FCollapseAnimation } from '../../collapse-animation'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  /**
   * 是否打开
   */
  const isOpened = ref<boolean>(prop.open)

  /**
   * 点击触发
   */
  const handleClick = (): void => {
    isOpened.value = !isOpened.value
    useRun(isOpened.value ? prop.onClose : prop.onOpen, isOpened.value)
  }

  /**
   * 展示的文字内容
   */
  const optionText = computed((): string => {
    const { openText, closeText } = prop

    return `${unref(isOpened) ? openText : closeText}`
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { background, borderColor } = prop

    return {
      '--f-sticky-card-content-background': background,
      '--f-sticky-card-border-color': borderColor
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
    <div class="f-sticky-card__box">
      <f-collapse-animation :opened="isOpened">
        <slot />
      </f-collapse-animation>
    </div>

    <!-- 点击展开 / 折叠的区域 -->
    <div
      :class="[
        'f-sticky-card__option',
        { 'f-sticky-card__option-open': isOpened }
      ]"
      @click="handleClick"
    >
      <span class="f-sticky-card__option-text">
        {{ optionText }}
      </span>
    </div>
  </div>
</template>
