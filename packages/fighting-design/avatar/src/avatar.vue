<script lang="ts" setup name="FAvatar">
  import { Props } from './props'
  import { ref, onMounted, useSlots } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useAvatar, useLoadImg, useProps } from '../../_hooks'
  import type { UseLoadImgProp } from '../../_hooks'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const slot = useSlots()

  const { filter } = useProps(prop)

  const { nodeClassList, classList, styleList } = useAvatar(prop)

  const { loadImg, isSuccess, isShowNode } = useLoadImg(
    filter(['src', 'errSrc', 'rootMargin', 'lazy', 'onLoad', 'onError']) as unknown as UseLoadImgProp
  )

  /** 图片 dom 节点 */
  const avatarEl: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(null)

  /** 开始触发加载 */
  onMounted((): void => {
    if (!slot.icon && !prop.icon && !prop.text) {
      loadImg(avatarEl.value as HTMLImageElement)
    }
  })
</script>

<template>
  <div v-if="isSuccess" role="img" :class="classList" :style="styleList">
    <!-- 图标头像 -->
    <f-svg-icon v-if="$slots.icon || icon" :size="fontSize || 15" :color="fontColor" :icon="icon">
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
      src=""
      :class="nodeClassList"
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
