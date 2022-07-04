<script lang="ts" setup name="FTag">
  import { Props, Emits } from './tag'
  import { computed } from 'vue'
  import type { handleCloseInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const classList = computed(() => {
    const { simple, type, size, block, round } = prop

    return [
      'f-tag',
      `f-tag-${type}`,
      {
        'f-tag-simple': simple,
        'f-tag-block': block,
        // 'f-tag-border': border,
        'f-tag-round': round,
        [`f-tag-${size}`]: size
      }
    ]
  })

  const handleClose: handleCloseInterface = (evt: MouseEvent): void => {
    emit('onClose', evt)
  }
</script>

<template>
  <div :class="classList">
    <i v-if="leftIcon" :class="['f-icon', leftIcon]" />
    <slot />
    <i v-if="rightIcon" :class="['f-icon', rightIcon]" />

    <i v-if="close" class="f-icon f-icon-close" @click.stop="handleClose" />
  </div>
</template>
