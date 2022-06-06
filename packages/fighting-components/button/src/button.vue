<template>
  <template v-if="href">
    <a
      ref="FButton"
      :class="classList"
      :href="href"
      :target="target"
      @click="onClick"
    >
      <slot />
    </a>
  </template>

  <template v-else>
    <button ref="FButton" :class="classList" @click="onClick">
      <slot />
    </button>
  </template>
</template>

<script lang="ts" setup name="FButton">
  import { computed, ref } from 'vue'
  import { Props, Emits } from './button'
  import { Ripples } from '@fighting-design/fighting-utils'
  import type { ComputedRef, Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const FButton: Ref<HTMLButtonElement | null> = ref<HTMLButtonElement | null>(
    null
  )

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { type, round, block, disabled, loading, blob, size } = prop

      return [
        'f-button',
        {
          [`f-button-${type}`]: type,
          'f-button-round': round,
          'f-button-block': block,
          'f-button-blob': blob,
          'f-button-disabled': disabled || loading,
          [`f-button-${size}`]: size
        }
      ]
    }
  )

  const onClick = (evt: PointerEvent): void => {
    const { disabled, loading, target, ripples } = prop

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
</script>
