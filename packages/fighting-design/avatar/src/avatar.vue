<script lang="ts" setup name="FAvatar">
  import { Props, Emits } from './avatar'
  import { computed, ref, onMounted, useSlots } from 'vue'
  import { loadImage, isNumber, isString, sizeChange } from '../../_utils'
  import { FSvgIcon } from '../../svg-icon'
  import { useFilterProps } from '../../_hooks'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type { AvatarPropsType } from './avatar'
  import type {
    CallbackInterface as a,
    LoadNeedImagePropsInterface as b,
    OrdinaryFunctionInterface as c,
    ClassListInterface as d
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)
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
   * 还可以借此实现 load-animation 配置项的动画效果
   *
   * 这里涉及到懒加载，那么如果在懒加载状态下将图片隐藏掉，是不会触发懒加载的
   * 所以这里通过懒加载来判断，如果懒加载为 true 则不隐藏
   * 为 false 的时候代表不是懒加载，所以可以先隐藏
   */
  const isShowNode: Ref<boolean> = ref<boolean>(prop.lazy)
  const FAvatarImg: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )

  // img 元素的类名集合
  const nodeClassList: ComputedRef<d> = computed((): d => {
    const { round, size, fit } = prop

    return [
      'f-avatar__img',
      {
        'f-avatar__round': round,
        [`f-avatar__${size}`]: isString(size),
        [`f-avatar__${fit}`]: fit
      }
    ] as const
  })

  // 类名集合
  const classList: ComputedRef<d> = computed((): d => {
    const { size, round } = prop

    return [
      'f-avatar',
      {
        'f-avatar__round': round,
        [`f-avatar__${size}`]: isString(size)
      }
    ]
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, size, fontColor, fontSize } = prop

    return {
      '--f-avatar-size': isNumber(size) ? size + 'px' : '',
      '--f-avatar-background-color': background,
      '--f-avatar-font-color': fontColor,
      '--f-avatar-font-size': sizeChange(fontSize)
    } as const
  })

  // 开始加载图片
  const loadAction: c = (): void => {
    const node: HTMLImageElement = FAvatarImg.value as HTMLImageElement
    const callback: a = (params: boolean): void => {
      isSuccess.value = params
      isShowNode.value = params
    }
    const needProps: b = useFilterProps<AvatarPropsType, b>(prop, [
      'src',
      'errSrc',
      'rootMargin',
      'lazy'
    ])
    loadImage(node, needProps, emit, callback)
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
