<script lang="ts" setup name="FAvatar">
  import { Props } from './props'
  import { computed, ref, onMounted, useSlots } from 'vue'
  import { isNumber, isString, sizeChange } from '../../_utils'
  import { FSvgIcon } from '../../svg-icon'
  import { useLoadImage } from '../../_hooks'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type { AvatarPropsType } from './props'
  import type { ClassListInterface } from '../../_interface'

  const prop: AvatarPropsType = defineProps(Props)
  const slot = useSlots()

  const { isSuccess, isShowNode, loadAction } =
    useLoadImage<AvatarPropsType>(prop)

  // 图片 dom 节点
  const avatarEl: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )

  /**
   * img 元素的类名列表
   */
  const nodeClassList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { round, size, fit } = prop

      return [
        'f-avatar__img',
        {
          'f-avatar__round': round,
          [`f-avatar__${size}`]: isString(size),
          [`f-avatar__${fit}`]: fit
        }
      ] as const
    }
  )

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { size, round } = prop

      return [
        'f-avatar',
        {
          'f-avatar__round': round,
          [`f-avatar__${size}`]: isString(size)
        }
      ]
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, size, fontColor, fontSize } = prop

    return {
      '--f-avatar-size': isNumber(size) ? size + 'px' : '',
      '--f-avatar-background-color': background,
      '--f-avatar-font-color': fontColor,
      '--f-avatar-font-size': sizeChange(fontSize)
    } as CSSProperties
  })

  onMounted((): void => {
    if (!slot.icon && !prop.icon && !prop.text) {
      loadAction(avatarEl)
    }
  })
</script>

<template>
  <div v-if="isSuccess" role="img" :class="classList" :style="styleList">
    <f-svg-icon
      v-if="$slots.icon || icon"
      :size="fontSize"
      :color="fontColor"
      :icon="icon"
    >
      <slot name="icon" />
    </f-svg-icon>

    <span v-else-if="text" class="f-avatar__text">
      {{ text }}
    </span>

    <img
      v-else
      v-show="isShowNode"
      ref="avatarEl"
      src=""
      :class="nodeClassList"
      :alt="alt"
    />
  </div>

  <div v-else class="f-avatar__error" :style="styleList">
    <slot name="error">
      <span class="f-avatar__error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
