<script lang="ts" setup name="FTag">
  import { Props, Emits } from './tag'
  import { computed, ref } from 'vue'
  import FIcon from '../../icon'
  import type { handleCloseInterface as a } from './interface'
  import type { ComputedRef, Ref } from 'vue'
  import type { FPropsType } from './tag'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const isShow: Ref<boolean> = ref<boolean>(true)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { simple, type, size, block, round, line } = prop

      return [
        'f-tag',
        `f-tag-${type}`,
        `f-tag-${size}`,
        {
          'f-tag-simple': simple,
          'f-tag-block': block,
          'f-tag-round': round,
          'f-tag-line': line
        }
      ] as const
    }
  )

  const handleClose: a = (evt: Event): void => {
    isShow.value = false
    emit('close-end', evt)
  }
</script>

<template>
  <div v-if="isShow" :class="classList" :style="{ background, color }">
    <f-icon v-if="leftIcon" :icon="leftIcon" />
    <slot />
    <f-icon v-if="rightIcon" :icon="rightIcon" />

    <f-icon v-if="close" icon="f-icon-close" @click.stop="handleClose" />
  </div>
</template>
