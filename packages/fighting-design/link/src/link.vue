<script lang="ts" setup name="FLink">
  import { Props, Emits } from './link'
  import { FSvgIcon } from '../../svg-icon'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type {
    HandleEventInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    if (prop.prohibit || prop.noLink) {
      evt.preventDefault()
      return
    }
    emit('click', evt)
  }

  const classList: ComputedRef<b> = computed((): b => {
    const { type, state, prohibit, noCopy } = prop

    return [
      'f-link',
      {
        [`f-link-${state}`]: state,
        [`f-link-${type}`]: type,
        'f-link-prohibit': prohibit,
        'f-link-no-copy': noCopy
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { size, color } = prop

    return {
      color,
      fontSize: sizeChange(size)
    } as const
  })
</script>

<template>
  <a
    role="link"
    :class="classList"
    :style="styleList"
    :href="href"
    :target="target"
    @click="handleClick"
  >
    <f-svg-icon v-if="$slots.beforeIcon" :size="size">
      <slot name="beforeIcon" />
    </f-svg-icon>

    <slot />

    <f-svg-icon v-if="$slots.afterIcon" :size="size">
      <slot name="beforeIcon" />
    </f-svg-icon>
  </a>
</template>
