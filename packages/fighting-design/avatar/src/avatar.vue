<script lang="ts" setup name="FAvatar">
  import { Props } from './props'
  import { ref, onMounted, useSlots } from 'vue'
  import { isNumber, isString } from '../../_utils'
  import { FSvgIcon } from '../../svg-icon'
  import { useLoadImage, useList, useProps } from '../../_hooks'
  import type { ComputedRef, Ref, CSSProperties } from 'vue'
  import type { AvatarPropsType } from './props'
  import type { ClassListInterface } from '../../_interface'

  const prop: AvatarPropsType = defineProps(Props)
  const slot = useSlots()

  const { filter } = useProps(prop)
  const { styles, classes } = useList('avatar')
  const { isSuccess, isShowNode, loadAction } =
    useLoadImage<AvatarPropsType>(prop)

  /**
   * 图片 dom 节点
   */
  const avatarEl: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )

  /**
   * img 元素的类名列表
   */
  const nodeClassList: ComputedRef<ClassListInterface> = classes(
    filter([
      'round',
      'fit',
      {
        key: 'size',
        callback: (): boolean => isString(prop.size)
      }
    ]),
    'f-avatar__img'
  )

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = classes(
    filter([
      'round',
      {
        key: 'size',
        callback: (): boolean => isString(prop.size)
      }
    ]),
    'f-avatar'
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = styles(
    filter([
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
  )

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
