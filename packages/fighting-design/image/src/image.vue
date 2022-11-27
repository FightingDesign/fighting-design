<script lang="ts" setup name="FImage">
  import { Props } from './props'
  import { onMounted, ref, computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import { useLoadImage } from '../../_hooks'
  import type { Ref, CSSProperties, ComputedRef } from 'vue'
  import type { ImagePropsType } from './props'
  import type { ClassListInterface } from '../../_interface'

  const prop: ImagePropsType = defineProps(Props)

  const { isSuccess, isShowNode, loadAction } =
    useLoadImage<ImagePropsType>(prop)

  /**
   * dom 节点元素
   */
  const imageEl: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )

  onMounted((): void => {
    loadAction(imageEl)
  })

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { fit, noSelect } = prop

      return [
        'f-image__img',
        {
          [`f-image__${fit}`]: fit,
          'f-image__select': noSelect
        }
      ] as const
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, height, round } = prop

    return {
      '--f-image-width': sizeChange(width),
      '--f-image-height': sizeChange(height),
      '--f-image-border-radius': sizeChange(round)
    } as CSSProperties
  })
</script>

<template>
  <div
    v-if="isSuccess"
    role="img"
    :class="['f-image', { 'f-image__block': block }]"
    :style="styleList"
  >
    <!-- 真正展示的图片 -->
    <img
      v-show="isShowNode"
      ref="imageEl"
      src=""
      :class="classList"
      :style="styleList"
      :draggable="draggable"
      :referrer-policy="referrerPolicy"
      :alt="alt"
      :title="title"
    />
  </div>

  <div v-else class="f-image__error">
    <slot name="error">
      <span class="f-image__error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
