<script lang="ts" setup name="FLink">
  import { Props, Emits } from './link'
  import { FIcon } from '../../icon'
  import { computed } from 'vue'
  import { isString } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { handleClickInterface as a } from './interface'
  import type { classListInterface as b } from '../../_interface'

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
      `f-link-${type}`,
      `f-link-${state}`,
      {
        'f-link-prohibit': prohibit,
        'f-link-noCopy': noCopy
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { size, color } = prop

    return {
      color,
      fontSize: isString(size) ? size : size + 'px'
    } as const
  })
</script>

<template>
  <a
    :class="classList"
    :style="styleList"
    :href="href"
    :target="target"
    @click="handleClick"
  >
    <f-icon v-if="beforeIcon" :icon="beforeIcon" :size="size" />
    <slot />
    <f-icon v-if="afterIcon" :icon="afterIcon" :size="size" />
  </a>
</template>
