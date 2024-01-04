<script lang="ts" setup>
  import { Props } from './props'
  import { ref, useSlots, reactive, toRefs, inject } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useLoadImg, useList } from '../../_hooks'
  import { isNumber, isString } from '../../_utils'
  import { AVATAR_GROUP_PROPS_KEY } from '../../avatar-group/src/props'
  import type { AvatarGroupProps } from '../../avatar-group'
  import type { Slots } from 'vue'

  defineOptions({ name: 'FAvatar' })

  const prop = defineProps(Props)
  const slot: Slots = useSlots()

  /** 图片 dom 节点 */
  const avatarRef = ref<HTMLImageElement | undefined>()

  /** 获取到父组件注入的依赖项 */
  const parentInject: AvatarGroupProps | undefined = inject(
    AVATAR_GROUP_PROPS_KEY,
    undefined
  )

  const { isSuccess, isShowNode } = useLoadImg(
    avatarRef,
    prop,
    (): boolean => !slot.icon && !prop.icon && !prop.text && avatarRef.value
  )

  /** 合并后的 prop 参数 */
  const _prop = reactive({
    ...toRefs(prop),
    ...toRefs(reactive(parentInject || {}))
  })

  const { styles, classes } = useList(_prop, 'avatar')

  /** 类名列表 */
  const classList = classes(
    [
      'round',
      'fit',
      {
        key: 'size',
        callback: (): boolean => isString(_prop.size)
      }
    ],
    'f-avatar'
  )

  /** 样式列表 */
  const style = styles(
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
        callback: (): boolean => isNumber(_prop.size)
      }
    ],
    'zIndex'
  )
</script>

<template>
  <div v-if="isSuccess" role="img" :class="classList" :style>
    <!-- 图标头像 -->
    <f-svg-icon
      v-if="$slots.icon || icon"
      :size="fontSize || 15"
      :color="fontColor"
      :icon
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
      :alt
    />
  </div>

  <!-- 加载失败的 -->
  <div v-else class="f-avatar__error" :style>
    <slot name="error">
      <span class="f-avatar__error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
