<template>
  <div
    :class="['f-avatar', { 'f-avatar-round': round }]"
    :style="{ background }"
  >
    <img ref="FAvatarImg" :class="classList" src="" :alt="alt" />
  </div>
</template>

<script lang="ts" setup name="FAvatar">
  import { Props, Emits } from './avatar'
  import { computed, ref, onMounted } from 'vue'
  import type { ComputedRef, Ref } from 'vue'
  import { loadImage } from '@fighting-design/fighting-utils'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const FAvatarImg: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(
    null
  )

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { round, size, fit } = prop

      return [
        {
          'f-avatar-round': round,
          [`f-avatar-${size}`]: size,
          [`f-avatar-${fit}`]: fit
        }
      ]
    }
  )

  onMounted((): void => {
    const node: HTMLImageElement = FAvatarImg.value as HTMLImageElement
    loadImage(node, prop, emit, null)
  })
</script>
