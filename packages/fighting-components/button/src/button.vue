<template>
  <template v-if="href">
    <a
      ref="FButton"
      :class="classList"
      :href="href"
      :target="target"
      :style="{ boxShadow: shadow, ...buttonStyle }"
      @click="onClick"
    >
      <i
        v-if="leftIcon || loading"
        :class="['f-icon', leftIconClass]"
        :style="buttonStyle"
      />
      <slot />
      <i v-if="rightIcon" :class="['f-icon', rightIcon]" :style="buttonStyle" />
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
      :style="{ boxShadow: shadow, ...buttonStyle }"
      @click="onClick"
    >
      <i
        v-if="leftIcon || loading"
        :class="['f-icon', leftIconClass]"
        :style="buttonStyle"
      />
      <slot />
      <i v-if="rightIcon" :class="['f-icon', rightIcon]" :style="buttonStyle" />
    </button>
  </template>
</template>

<script lang="ts" setup name="FButton">
  import { computed, ref, onMounted } from 'vue'
  import { Props, Emits } from './button'
  // import { Ripples, ChangeColor } from '@fighting-design/fighting-utils'
  import { Ripples, ChangeColor } from '@fighting-design/fighting-utils'
  import type { ComputedRef, Ref } from 'vue'
  import type {
    buttonStyleInterface,
    onClickInterface,
    ordinaryFunctionInterface
  } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const FButton: Ref<HTMLButtonElement | null> = ref<HTMLButtonElement | null>(
    null
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
        blob,
        size,
        text,
        circle,
        color
      } = prop

      return [
        'f-button',
        {
          [`f-button-${type}`]: type,
          [`f-button-${size}`]: size,
          'f-button-disabled': disabled || loading,
          'f-button-simple': simple && !color,
          'f-button-circle': circle,
          'f-button-round': round,
          'f-button-block': block,
          'f-button-blob': blob,
          'f-button-text': text && !color
        }
      ]
    }
  )

  const buttonStyle: ComputedRef<buttonStyleInterface | Object> = computed(
    (): buttonStyleInterface | Object => {
      const { fontSize, fontColor, color } = prop

      return {
        fontSize,
        color: fontColor,
        background: color
      }
    }
  )

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    const { disabled, loading, ripples, ripplesColor } = prop

    if (disabled || loading) {
      evt.preventDefault()
      return
    }

    if (ripples) {
      const ripples: Ripples = new Ripples(
        evt,
        FButton.value as HTMLButtonElement,
        600,
        ripplesColor
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
  const customColor: ordinaryFunctionInterface = (): void => {
    const { color } = prop
    const changeColor: ChangeColor = new ChangeColor(color)
    const light: string = changeColor.getLightColor(0.4)
    const dark: string = changeColor.getDarkColor(0.1)
    const node: HTMLButtonElement = FButton.value as HTMLButtonElement

    node.addEventListener('mouseover', () => (node.style.background = light))
    node.addEventListener('mousedown', () => (node.style.background = dark))
    node.addEventListener('mouseup', () => (node.style.background = light))
    node.addEventListener('mouseout', () => (node.style.background = color))
  }

  onMounted(() => {
    if (prop.color) {
      customColor()
    }
  })
</script>
