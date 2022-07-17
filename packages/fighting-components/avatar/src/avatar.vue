<script lang="ts" setup name="FAvatar">
  import { Props, Emits } from './avatar'
  import { computed, ref, onMounted } from 'vue'
  import { loadImage } from '@fighting-design/fighting-utils'
  import { FIcon } from '@fighting-design/fighting-components'
  import type { ComputedRef, Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const FAvatarImg: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { round, size, fit } = prop

      return [
        'f-avatar-img',
        {
          'f-avatar-round': round,
          [`f-avatar-${size}`]: size,
          [`f-avatar-${fit}`]: fit
        }
      ] as const
    }
  )

  onMounted((): void => {
    if (!prop.icon) {
      const node: HTMLImageElement = FAvatarImg.value as HTMLImageElement
      loadImage(node, prop, emit, null)
    }
  })
</script>

<template>
  <div
    :class="['f-avatar', `f-avatar-${size}`, { 'f-avatar-round': round }]"
    :style="{ background }"
  >
    <f-icon v-if="icon" :icon="icon" :color="iconColor" :size="iconSize" />

    <img v-else ref="FAvatarImg" :class="classList" src="" :alt="alt" />
  </div>
</template>
