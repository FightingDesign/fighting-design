<script lang="ts" setup name="FAvatar">
  import { Props, Emits } from './avatar'
  import { computed, ref, onMounted } from 'vue'
  import {
    loadImage,
    isNumber,
    isString
  } from '@fighting-design/fighting-utils'
  import { FIcon } from '@fighting-design/fighting-components'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'

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
          [`f-avatar-${size}`]: isString(size),
          [`f-avatar-${fit}`]: fit
        }
      ] as const
    }
  )

  const imageSizeStyleList: ComputedRef<CSSProperties | boolean> = computed(
    (): CSSProperties | boolean => {
      const { size } = prop

      if (isNumber(size)) {
        return { width: `${size}px`, height: `${size}px` } as const
      }
      return false
    }
  )

  const textStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { fontColor, fontSize } = prop

      return { color: fontColor, fontSize } as const
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
    :style="{ background, ...imageSizeStyleList }"
  >
    <f-icon v-if="icon" :icon="icon" :color="fontColor" :size="fontSize" />

    <span v-else-if="text" :style="textStyleList" class="f-avatar-text">{{
      text
    }}</span>

    <img
      v-else
      ref="FAvatarImg"
      :style="imageSizeStyleList"
      :class="classList"
      src=""
      :alt="alt"
    />
  </div>
</template>
