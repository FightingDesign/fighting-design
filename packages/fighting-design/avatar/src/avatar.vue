<script lang="ts" setup name="FAvatar">
  import { Props } from './props'
  import { ref, onMounted, useSlots } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useLoadImage, useAvatar } from '../../_hooks'
  import type { AvatarPropsType } from './props'
  import type { Ref } from 'vue'

  const prop: AvatarPropsType = defineProps(Props)
  const slot = useSlots()

  const { nodeClassList, classList, styleList } = useAvatar(prop)
  const { isSuccess, isShowNode, loadAction } = useLoadImage(prop)

  /**
   * 图片 dom 节点
   */
  const avatarEl: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )

  /**
   * 开始触发加载
   */
  onMounted((): void => {
    if (!slot.icon && !prop.icon && !prop.text) {
      loadAction(avatarEl)
    }
  })
</script>

<template>
  <div v-if="isSuccess" role="img" :class="classList" :style="styleList">
    <!-- 图标头像 -->
    <f-svg-icon
      v-if="$slots.icon || icon"
      :size="fontSize"
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
      v-show="isShowNode"
      ref="avatarEl"
      src=""
      :class="nodeClassList"
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
