<script lang="ts" setup name="FAvatar">
  import { Props } from './props'
  import { ref, onMounted, useSlots, watch, computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useLoadImg, useProps, useList } from '../../_hooks'
  import { isNumber, isString } from '../../_utils'
  import type { UseLoadImgProp } from '../../_hooks'
  import type { Slots } from 'vue'

  const prop = defineProps(Props)
  const slot: Slots = useSlots()

  const { filter } = useProps(prop)

  const { isSuccess, isShowNode, startLoad } = useLoadImg(
    filter([
      'src',
      'errSrc',
      'rootMargin',
      'lazy',
      'onLoad',
      'onError'
    ]) as unknown as UseLoadImgProp
  )

  /** 图片 dom 节点 */
  const avatarEl = ref<HTMLImageElement>()

  /** 是否开始加载图片 */
  const isLoadImg = computed(() => {
    return !slot.icon && !prop.icon && !prop.text && avatarEl.value
  })

  /** 加载 */
  const load = (): void => {
    if (avatarEl.value) {
      startLoad(avatarEl.value, (): boolean => isLoadImg.value)
    }
  }

  /** 开始触发加载 */
  onMounted((): void => {
    load()
  })

  /** 监视 src 的变化重新加载图片 */
  watch(
    (): string => prop.src,
    (): void => {
      load()
    }
  )

  const { styles, classes } = useList(prop, 'avatar')

  /** 类名列表 */
  const classList = classes(
    [
      'round',
      'fit',
      {
        key: 'size',
        callback: (): boolean => isString(prop.size)
      }
    ],
    'f-avatar'
  )

  /** 样式列表 */
  const styleList = styles([
    'background',
    'fontColor',
    'fontSize',
    /**
     * size 配置项需要进行检查是否需要过滤
     *
     * 只有是数字的时候才需要过滤，是数字代表是自定义的尺寸
     *
     * 字符串代表内部尺寸，用于类名拼接
     */
    {
      key: 'size',
      callback: (): boolean => isNumber(prop.size)
    }
  ])
</script>

<template>
  <div v-if="isSuccess" role="img" :class="classList" :style="styleList">
    <!-- 图标头像 -->
    <f-svg-icon
      v-if="$slots.icon || icon"
      :size="fontSize || 15"
      :color="fontColor"
      :icon="icon"
    >
      <slot name="icon" />
    </f-svg-icon>

    <!-- 文字头像 -->
    <span v-else-if="text" class="f-avatar__text">
      {{ text }}
    </span>

    <!-- 图片头像 -->
    <img
      v-else
      ref="avatarEl"
      class="f-avatar__img"
      src=""
      :style="isShowNode ? '' : 'visibility: hidden'"
      :alt="alt"
    />
  </div>

  <!-- 加载失败的 -->
  <div v-else class="f-avatar__error" :style="styleList">
    <slot name="error">
      <span class="f-avatar__error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
