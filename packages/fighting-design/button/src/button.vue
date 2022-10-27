<script lang="ts" setup name="FButton">
  import { computed, ref, h } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingAVue } from '../../_components/svg/index'
  import { Props, Emits } from './button'
  import { Ripples, ChangeColor, sizeChange } from '../../_utils'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type {
    HandleEventInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
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
      {
        [`f-button__${size}`]: size,
        [`f-button__${type}`]: !color,
        'f-button__disabled': disabled || loading,
        'f-button__simple': simple && !color,
        'f-button__circle': circle,
        'f-button__round': round,
        'f-button__block': block,
        'f-button__bold': bold,
        'f-button__color': color,
        'f-button__text': text && !color
      }
    ] as const
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
          className: 'f-button__ripples',
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

  // 样式列表
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { fontSize, fontColor, shadow, color } = prop

    const style: CSSProperties = {
      '--f-button-font-size': sizeChange(fontSize),
      '--f-button-font-color': fontColor,
      '--f-button-box-shadow': shadow
    } as const

    if (color) {
      const changeColor: ChangeColor = new ChangeColor(color)
      const light: string = changeColor.getLightColor(0.4)
      const dark: string = changeColor.getDarkColor(0.2)

      style['--f-button-default-color'] = color
      style['--f-button-hover-color'] = light
      style['--f-button-active-color'] = dark
    }

    return style
  })
</script>

<template>
  <template v-if="href">
    <a
      ref="FButton"
      role="button"
      tabindex="0"
      :class="classList"
      :href="href"
      :target="target"
      :style="styleList"
      @click="handleClick"
    >
      <f-svg-icon
        v-if="loading || beforeIcon"
        :class="[
          'f-button__before-icon',
          { 'f-button__loading-animation': loading }
        ]"
        :icon="loading ? loadingIcon || h(FIconLoadingAVue) : beforeIcon"
        :size="16"
      />

      <slot />

      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="16" />
    </a>
  </template>

  <template v-else>
    <button
      ref="FButton"
      role="button"
      tabindex="0"
      :class="classList"
      :disabled="disabled || loading"
      :autofocus="autofocus"
      :name="name"
      :type="nativeType"
      :style="styleList"
      @click="handleClick"
    >
      <f-svg-icon
        v-if="loading || beforeIcon"
        :class="[
          'f-button__before-icon',
          { 'f-button__loading-animation': loading }
        ]"
        :icon="loading ? loadingIcon || h(FIconLoadingAVue) : beforeIcon"
        :size="16"
      />

      <slot />

      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="16" />
    </button>
  </template>
</template>
