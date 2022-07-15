<script lang="ts" setup name="FTag">
  import { Props, Emits } from './tag'
  import { computed, ref } from 'vue'
  import type { handleCloseInterface } from './interface'
  import type { ComputedRef, Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const isShow: Ref<boolean> = ref<boolean>(false)

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { simple, type, size, block, round } = prop

      return [
        'f-tag',
        `f-tag-${type}`,
        `f-tag-${size}`,
        {
          'f-tag-simple': simple,
          'f-tag-block': block,
          'f-tag-round': round
        }
      ] as const
    }
  )

  const handleClose: handleCloseInterface = (evt: MouseEvent): void => {
    isShow.value = false
    emit('onClose', evt)
  }
</script>

<template>
  <div v-if="isShow" :class="classList" :style="{ background, color }">
    <i v-if="leftIcon" :class="['f-icon', leftIcon]" />
    <slot />
    <i v-if="rightIcon" :class="['f-icon', rightIcon]" />

    <i v-if="close" class="f-icon f-icon-close" @click.stop="handleClose" />
  </div>
</template>
