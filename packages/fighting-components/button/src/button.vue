<script lang="ts" setup name="FButton">
  import { computed, ref } from 'vue'
  import { Props, Emits } from './button'
  import { Ripples, ChangeColor } from '../../_utils'
  import FIcon from '../../icon'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type {
    onClickInterface as a,
    buttonEventInterface as c
  } from './interface'
  import type { FPropsType } from './button'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const FButton: Ref<HTMLButtonElement> = ref<HTMLButtonElement>(
    null as unknown as HTMLButtonElement
  )

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
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
        `f-button-${type}`,
        `f-button-${size}`,
        {
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
    }
  )

  const buttonStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { fontSize, fontColor, shadow } = prop

      return {
        fontSize,
        boxShadow: shadow,
        color: fontColor
      } as const
    }
  )

  const onClick: a = (evt: c): void => {
    const { disabled, loading, ripples, ripplesColor, type, simple, text } =
      prop

    if (disabled || loading) {
      evt.preventDefault()
      return
    }

    if (ripples) {
      const ripples: Ripples = new Ripples(
        evt,
        FButton.value as HTMLButtonElement,
        ripplesColor,
        type,
        simple,
        text
      )
      ripples.clickRipples()
    }

    emit('click', evt)
  }

  // 左侧 icon
  const leftIconClass: ComputedRef<string> = computed<string>((): string => {
    const { loading, loadingIcon, leftIcon } = prop

    if (loading) {
      return `${loadingIcon || 'f-icon-loading'} f-loading-animation`
    }
    return leftIcon
  })

  // 自定义颜色
  const customColor: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const changeColor: ChangeColor = new ChangeColor(prop.color)
      const light: string = changeColor.getLightColor(0.4)
      const dark: string = changeColor.getDarkColor(0.2)

      return {
        '--f-button-default-color': prop.color,
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
      :style="{ ...buttonStyleList, ...customColor }"
      @click="onClick"
    >
      <f-icon
        v-if="leftIcon || loading"
        :icon="leftIconClass"
        :style="buttonStyleList"
      />
      <slot />
      <f-icon v-if="rightIcon" :icon="rightIcon" :style="buttonStyleList" />
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
      :style="{ ...buttonStyleList, ...customColor }"
      @click="onClick"
    >
      <f-icon
        v-if="leftIcon || loading"
        :icon="leftIconClass"
        :style="buttonStyleList"
      />
      <slot />
      <f-icon v-if="rightIcon" :icon="rightIcon" :style="buttonStyleList" />
    </button>
  </template>
</template>
