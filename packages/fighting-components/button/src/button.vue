<template>
  <template v-if="href">
    <a
      ref="FButton"
      :class="classList"
      :href="href"
      :target="target"
      @click="onClick"
    >
      <!-- <i v-if="leftIcon || loading" :class="['f-icon', leftIconClass]" /> -->
      <slot />
      <i v-if="rightIcon" :class="['f-icon', rightIcon]" />
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
      @click="onClick"
    >
      <i v-if="leftIcon || loading" :class="['f-icon', leftIconClass]" />
      <slot />
      <i v-if="rightIcon" :class="['f-icon', rightIcon]" />
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
      const { type, round, simple, block, disabled, loading, blob, size } = prop

      return [
        'f-button',
        {
          [`f-button-${type}`]: type,
          'f-button-round': round,
          'f-button-block': block,
          'f-button-simple': simple,
          'f-button-blob': blob,
          'f-button-disabled': disabled || loading,
          [`f-button-${size}`]: size
        }
      ]
    }
  )

  const buttonStyle: ComputedRef<buttonStyleInterface> = computed(
    (): buttonStyleInterface => {
      const { shadow, fontSize, fontColor } = prop

      return {
        boxShadow: shadow,
        fontSize,
        color: fontColor
      }
    }
  )

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    const { disabled, loading, ripples } = prop

    if (disabled || loading) return

    if (ripples) {
      const ripples: Ripples = new Ripples(
        evt,
        FButton.value as HTMLButtonElement,
        600
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
