<script lang="ts" setup name="FAvatar">
  import { Props, Emits } from './avatar'
  import { computed, ref, onMounted } from 'vue'
  import { loadImage, isNumber, isString } from '../../_utils'
  import FIcon from '../../icon'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type { FPropsType } from './avatar'
  import type { callbackInterface as a } from './interface'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

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

  const nodeClassList: ComputedRef<object | string[]> = computed(
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

  const classList: ComputedRef<object | string[]> = computed(
    (): object | string[] => {
      const { size, round, src, loadAnimation } = prop

      return [
        'f-avatar',
        {
          'f-avatar-round': round,
          [`f-avatar-${size}`]: isString(size),
          'f-avatar-animation': loadAnimation && src && !isShowNode.value
        }
      ]
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
      const callback: a = (params: boolean): void => {
        isSuccess.value = params
        isShowNode.value = params
      }
      loadImage(node, prop, emit, callback)
    }
  })
</script>

<template>
  <div v-if="isSuccess" :class="classList" :style="imageSizeStyleList">
    <f-icon v-if="icon" :icon="icon" :color="fontColor" :size="fontSize" />

    <span v-else-if="text" :style="textStyleList" class="f-avatar-text">
      {{ text }}
    </span>

    <img
      v-else
      v-show="isShowNode"
      ref="FAvatarImg"
      :style="imageSizeStyleList"
      :class="nodeClassList"
      :alt="alt"
      src=""
    />
  </div>

  <div v-else class="f-avatar-error" :style="imageSizeStyleList">
    <slot name="error">
      <span class="f-avatar-error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
