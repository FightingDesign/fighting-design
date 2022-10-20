<script lang="ts" setup name="FButton">
  import { computed, ref } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import FIconLoadingAVue from '../../_components/svg/f-icon-loading-a.vue'
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
        [`f-button-${size}`]: size,
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
      <f-svg-icon v-if="$slots.beforeIcon || loading" :size="16">
        <slot v-if="loading" name="loadingIcon">
          <f-icon-loading-a-vue class="f-button-loading-animation" />
        </slot>
        <slot v-else name="beforeIcon" />
      </f-svg-icon>

      <slot />

      <f-svg-icon v-if="$slots.afterIcon" :size="16">
        <slot name="afterIcon" />
      </f-svg-icon>
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
      <f-svg-icon v-if="$slots.beforeIcon || loading" :size="16">
        <slot v-if="loading" name="loadingIcon">
          <f-icon-loading-a-vue class="f-button-loading-animation" />
        </slot>
        <slot v-else name="beforeIcon" />
      </f-svg-icon>

      <slot />

      <f-svg-icon v-if="$slots.afterIcon" :size="16">
        <slot name="afterIcon" />
      </f-svg-icon>
    </button>
  </template>
</template>
