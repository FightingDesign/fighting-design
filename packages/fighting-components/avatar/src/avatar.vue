<script lang="ts" setup name="FAvatar">
  import { Props, Emits } from './avatar'
  import { computed, ref, onMounted } from 'vue'
  import { loadImage, isNumber, isString } from '../../_utils'
  import FIcon from '../../icon'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type { FPropsType } from './avatar'

  const prop: FPropsType = defineProps(Props)
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

  const imageSizeStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { background, size } = prop

      if (isNumber(size)) {
        return { width: `${size}px`, height: `${size}px`, background } as const
      }
      return { background } as const
    }
  )

  const textStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { fontColor, fontSize } = prop

      return { color: fontColor, fontSize } as const
    }
  )

  onMounted((): void => {
    if (!prop.icon && !prop.text) {
      const node: HTMLImageElement = FAvatarImg.value as HTMLImageElement
      loadImage(node, prop, emit, null)
    }
  })
</script>

<template>
  <div
    :class="['f-avatar', `f-avatar-${size}`, { 'f-avatar-round': round }]"
    :style="imageSizeStyleList"
  >
    <f-icon v-if="icon" :icon="icon" :color="fontColor" :size="fontSize" />

    <span v-else-if="text" :style="textStyleList" class="f-avatar-text">
      {{ text }}
    </span>

    <img
      v-else
      ref="FAvatarImg"
      :style="imageSizeStyleList"
      :class="classList"
      :alt="alt"
      src=""
    />
  </div>
</template>
