<script lang="ts" setup name="FAlert">
  import { Props, Emits } from './alert'
  import { computed, ref } from 'vue'
  import { FIcon } from '@fighting-design/fighting-components'
  import type { ComputedRef, CSSProperties, Ref } from 'vue'
  import type { handleCloseInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isShow: Ref<boolean> = ref<boolean>(true)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { type, bold, simple, center, round } = prop

      return [
        'f-alert',
        `f-alert-${type}`,
        {
          'f-alert-bold': bold,
          'f-alert-simple': simple,
          'f-alert-center': center,
          'f-alert-round': round
        }
      ] as const
    }
  )

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { size, color, background } = prop

    return {
      color,
      background,
      fontSize: size
    } as const
  })

  const handleClose: handleCloseInterface = (evt: MouseEvent): void => {
    isShow.value = false
    emit('close-end', evt)
  }
</script>

<template>
  <div v-if="isShow" :class="classList" :style="styleList">
    <div v-if="title" class="f-alert-title">
      <f-icon :icon="icon" />
      {{ title }}
    </div>
    <div
      v-if="$slots.default"
      class="f-alert-sub-title"
      :style="{
        'margin-top': title ? '3px' : ''
      }"
    >
      <slot />
    </div>
    <span v-if="close" class="f-alert-close" @click.stop="handleClose">
      <f-icon icon="f-icon-close" />
    </span>
  </div>
</template>
