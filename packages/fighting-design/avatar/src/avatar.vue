<script lang="ts" setup>
  import { Props } from './props'
  import { ref, useSlots } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useLoadImg, useList } from '../../_hooks'
  import { isNumber, isString } from '../../_utils'
  import type { Slots } from 'vue'

  defineOptions({ name: 'FAvatar' })

  const prop = defineProps(Props)
  const slot: Slots = useSlots()

  /** 图片 dom 节点 */
  const avatarRef = ref<HTMLImageElement | undefined>()

  const { isSuccess, isShowNode } = useLoadImg(
    avatarRef,
    prop,
    (): boolean => !slot.icon && !prop.icon && !prop.text && avatarRef.value
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
  const styleList = styles(
    [
      'background',
      'fontColor',
      'fontSize',
      'zIndex',
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
    ],
    'zIndex'
  )
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
      ref="avatarRef"
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
