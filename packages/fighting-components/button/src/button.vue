<template>
  <button
    ref="FButton"
    :class="[
      'f-button',
      `f-button-${type}`,
      {
        'f-button-round': round,
        'f-button-block': block,
        'f-button-disabled': disabled || loading,
        'f-button-simple': simple,
        'f-button-text': text,
        'f-button-circle': circle,
        'f-button-border': text && border,
        [`f-button-${size}`]: size
      }
    ]"
    :style="{ boxShadow: shadow }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :name="name"
    :type="nativeType"
    @click.stop="onClick"
  >
    <span
      :class="['f-text', { 'f-text-blob': blob }]"
      :style="{ fontSize, color: fontColor }"
    >
      <i v-if="leftIcon || loading" :class="['f-icon', leftIconClass]" />
      <slot />
      <i v-if="rightIcon" :class="['f-icon', rightIcon]" />
    </span>
  </button>
</template>

<script lang="ts" setup name="FButton">
  import { computed, ref } from 'vue'
  import { Props, Emits } from './button'
  import { Ripples } from '@fighting-design/fighting-utils'
  import type { ComputedRef, Ref } from 'vue'
  import type { onClickInterface } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const FButton: Ref<HTMLButtonElement | null> = ref<HTMLButtonElement | null>(
    null
  )

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    const { disabled, loading, link, target, ripples } = prop

    if (disabled || loading) return

    if (link) {
      window.open(link, target)
    }

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
    if (prop.loading) {
      return `${prop.loadingIcon || 'f-icon-loading'} f-icon--loading`
    }
    return prop.leftIcon
  })
</script>
