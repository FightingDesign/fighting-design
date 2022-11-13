<script lang="ts" setup name="FAvatar">
  import { Props } from './props'
  import { computed, ref, onMounted, useSlots } from 'vue'
  import { loadImage, isNumber, isString, sizeChange } from '../../_utils'
  import { FSvgIcon } from '../../svg-icon'
  import { useFilterProps } from '../../_hooks'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type { AvatarPropsType } from './props'
  import type {
    OrdinaryFunctionInterface,
    ClassListInterface
  } from '../../_interface'
  import type {
    LoadImagePropsInterface,
    LoadCallbackInterface
  } from '../../_utils/load-image/interface'

  const prop: AvatarPropsType = defineProps(Props)
  const slot = useSlots()

  /**
   * 判断是否加载成功
   * 如果失败则会展示失败的状态
   */
  const isSuccess: Ref<boolean> = ref<boolean>(true)
  /**
   * 是否展示 dom 元素
   * 在加载还未完成之前，因为 src 是空，所以会展示一个 撕裂的图片
   * 所以在加载期间先隐藏，加载完成之后再显示
   *
   * 这里涉及到懒加载，那么如果在懒加载状态下将图片隐藏掉，是不会触发懒加载的
   * 所以这里通过懒加载来判断，如果懒加载为 true 则不隐藏
   * 为 false 的时候代表不是懒加载，所以可以先隐藏
   */
  const isShowNode: Ref<boolean> = ref<boolean>(prop.lazy)
  const FAvatarImg: Ref<HTMLImageElement> = ref<HTMLImageElement>(
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

  // 开始加载图片
  const loadAction: OrdinaryFunctionInterface = (): void => {
    const node: HTMLImageElement = FAvatarImg.value as HTMLImageElement
    const callback: LoadCallbackInterface = (params: boolean): void => {
      isSuccess.value = params
      isShowNode.value = params
    }
    const needProps: LoadImagePropsInterface = useFilterProps<
      AvatarPropsType,
      LoadImagePropsInterface
    >(prop, ['src', 'errSrc', 'rootMargin', 'lazy', 'load', 'error'])
    loadImage(node, needProps, callback)
  }

  onMounted((): void => {
    if (!slot.icon && !prop.icon && !prop.text) {
      loadAction()
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
      ref="FAvatarImg"
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
