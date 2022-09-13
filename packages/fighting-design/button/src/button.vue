<script lang="ts" setup name="FButton">
  import { FIcon } from '../../icon'
  import { computed, ref } from 'vue'
  import { Props, Emits } from './button'
  import { Ripples, ChangeColor } from '../../_utils'
  import type { FPropsType } from './button'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type { onClickInterface as a } from './interface'
  import type { classListInterface as b } from '../../_interface'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  // dom 元素
  const FButton: Ref<HTMLButtonElement> = ref<HTMLButtonElement>(
    null as unknown as HTMLButtonElement
  )

  // 类名列表
  const classList: ComputedRef<b> = computed((): b => {
    const {
      type,
      round,
      simple,
      block,
      disabled,
      loading,
      bold,
      size,
      text,
      circle,
      color
    } = prop

    return [
      'f-button',
      `f-button-${size}`,
      {
        [`f-button-${type}`]: !color,
        'f-button-disabled': disabled || loading,
        'f-button-simple': simple && !color,
        'f-button-circle': circle,
        'f-button-round': round,
        'f-button-block': block,
        'f-button-bold': bold,
        'f-button-color': color,
        'f-button-text': text && !color
      }
    ] as const
  })

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { fontSize, fontColor, shadow } = prop

    return {
      fontSize,
      boxShadow: shadow,
      color: fontColor
    } as const
  })

  // 点击
  const handleClick: a = (evt: MouseEvent): void => {
    const { disabled, loading, ripples } = prop

    if (disabled || loading) {
      evt.preventDefault()
      return
    }

    if (ripples) {
      const { ripplesColor, simple, text, type } = prop

      const ripples: Ripples = new Ripples(
        evt,
        FButton.value as HTMLButtonElement,
        {
          duration: 700,
          component: 'f-button',
          className: 'f-button-ripples',
          ripplesColor,
          simple,
          text,
          type
        } as const
      )
      ripples.clickRipples()
    }

    emit('click', evt)
  }

  // 左侧 icon
  const beforeIconClass: ComputedRef<string> = computed<string>((): string => {
    const { loading, loadingIcon, beforeIcon } = prop

    if (loading) {
      return `${loadingIcon || 'f-icon-loading'} f-loading-animation` as string
    }
    return beforeIcon as string
  })

  // 自定义颜色
  const customColor: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { color } = prop

      if (!color) return {} as const

      const changeColor: ChangeColor = new ChangeColor(color)
      const light: string = changeColor.getLightColor(0.4)
      const dark: string = changeColor.getDarkColor(0.2)

      return {
        '--f-button-default-color': color,
        '--f-button-hover-color': light,
        '--f-button-active-color': dark
      } as const
    }
  )
</script>

<template>
  <template v-if="href">
    <a
      ref="FButton"
      :class="classList"
      :href="href"
      :target="target"
      :style="{ ...styleList, ...customColor }"
      @click="handleClick"
    >
      <f-icon
        v-if="beforeIcon || loading"
        :icon="beforeIconClass"
        :style="styleList"
      />
      <slot />
      <f-icon v-if="afterIcon" :icon="afterIcon" :style="styleList" />
    </a>
  </template>

  <template v-else>
    <button
      ref="FButton"
      :class="classList"
      :disabled="disabled || loading"
      :autofocus="autofocus"
      :name="name"
      :type="nativeType"
      :style="{ ...styleList, ...customColor }"
      @click="handleClick"
    >
      <f-icon
        v-if="beforeIcon || loading"
        :icon="beforeIconClass"
        :style="styleList"
      />
      <slot />
      <f-icon v-if="afterIcon" :icon="afterIcon" :style="styleList" />
    </button>
  </template>
</template>
