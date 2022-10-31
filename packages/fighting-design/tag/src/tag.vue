<script lang="ts" setup name="FTag">
  import { Props } from './props'
  import { computed, ref } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import type { ComputedRef, Ref } from 'vue'
  import type { TagCloseEndInterface as a } from './interface'
  import type { ClassListInterface as b } from '../../_interface'

  const prop = defineProps(Props)

  const isShow: Ref<boolean> = ref<boolean>(true)

  const classList: ComputedRef<b> = computed((): b => {
    const { simple, type, size, block, round, line } = prop

    return [
      'f-tag',
      {
        [`f-tag__${type}`]: type,
        [`f-tag__${size}`]: size,
        'f-tag__simple': simple,
        'f-tag__block': block,
        'f-tag__round': round,
        'f-tag__line': line
      }
    ] as const
  })

  const handleClose: a = (evt: MouseEvent): void => {
    isShow.value = false
    if (prop.closeEnd) {
      prop.closeEnd(evt)
    }
  }
</script>

<template>
  <div v-if="isShow" :class="classList" :style="{ background, color }">
    <f-svg-icon v-if="beforeIcon">
      <component :is="beforeIcon" />
    </f-svg-icon>

    <slot />

    <f-svg-icon v-if="afterIcon">
      <component :is="afterIcon" />
    </f-svg-icon>

    <f-close-btn v-if="close" @click.stop="handleClose" />
  </div>
</template>
