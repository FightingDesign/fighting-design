<script lang="ts" setup name="FStickyCard">
  import { ref, computed, unref } from 'vue'
  import type { CSSProperties } from 'vue'

  const prop = defineProps({
    open: {
      type: Boolean,
      default: (): boolean => false
    },
    background: {
      type: String,
      default: (): string => ''
    },
    openText: {
      type: String,
      default: (): string => '关闭'
    },
    closeText: {
      type: String,
      default: (): string => '开启'
    }
  })

  const isOpen = ref<boolean>(prop.open)

  const handleClick = (): void => {
    isOpen.value = !unref(isOpen)
  }

  const optionText = computed((): string => {
    const { openText, closeText } = prop

    return `${unref(isOpen) ? openText : closeText}`
  })

  // 样式列表
  const styleList = computed((): CSSProperties => {
    const { background } = prop

    return {
      '--sticky-card-content-background': prop.background
    } as CSSProperties
  })

  // 类名列表
  const classList = computed(() => {
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
