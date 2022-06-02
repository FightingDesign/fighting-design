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
        'f-button-border': text && border,
        [`f-button-${size}`]: size !== 'middle'
      }
    ]"
    :style="[`box-shadow: ${shadow}`]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :name="name"
    :type="nativeType"
    @click="onClick"
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

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { Props, Emits } from './button'
  // import { clickRipples } from '@fighting-design/fighting-utils'
  import type { ComputedRef, Ref } from 'vue'
  import type { onClickInterface } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const FButton: Ref<HTMLButtonElement | null> = ref<HTMLButtonElement | null>(
    null
  )

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    if (prop.disabled || prop.loading) return
    if (prop.link) {
      window.open(prop.link, prop.target)
    }
    // clickRipples(evt, FButton.value as HTMLButtonElement, 1000)
    emit('click', evt)
  }

  const leftIconClass: ComputedRef<string> = computed<string>((): string => {
    if (prop.loading) {
      return `${prop.loadingIcon || 'f-icon-loading'} f-icon--loading`
    }
    return prop.leftIcon
  })
</script>

<script lang="ts">
  export default {
    name: 'FButton'
  }
</script>
