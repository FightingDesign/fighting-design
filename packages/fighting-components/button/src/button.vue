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
  import { computed, ref } from 'vue'
  import { Props, Emits } from './button'
  import { Ripples } from '@fighting-design/fighting-utils'
  import type { ComputedRef, Ref } from 'vue'
  import type {
    buttonStyleInterface,
    onClickInterface
  } from '@fighting-design/fighting-type'

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
        circle
      } = prop

      return [
        'f-button',
        {
          [`f-button-${type}`]: type,
          [`f-button-${size}`]: size,
          'f-button-disabled': disabled || loading,
          'f-button-simple': simple,
          'f-button-circle': circle,
          'f-button-round': round,
          'f-button-block': block,
          'f-button-blob': blob,
          'f-button-text': text
        }
      ]
    }
  )

  const buttonStyle: ComputedRef<buttonStyleInterface> = computed(
    (): buttonStyleInterface => {
      const { fontSize, fontColor } = prop

      return {
        fontSize,
        color: fontColor
      }
    }
  )

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    const { disabled, loading, ripples } = prop

    if (disabled || loading) {
      evt.preventDefault()
      return
    }

    if (ripples) {
      const ripples: Ripples = new Ripples(
        evt,
        FButton.value as HTMLButtonElement,
        600,
        prop.ripplesColor
      )
      ripples.clickRipples()
    }

    emit('click', evt)
  }

  const leftIconClass: ComputedRef<string> = computed<string>((): string => {
    const { loading, loadingIcon, leftIcon } = prop

    if (loading) {
      return `${loadingIcon || 'f-icon-loading'} f-loading-animation`
    }
    return leftIcon
  })
</script>
