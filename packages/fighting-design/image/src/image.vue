<script lang="ts" setup name="FImage">
  import FPreviewList from '../../_components/preview-list.vue'
  import { Props, Emits, ImagePropsKey } from './image'
  import { onMounted, ref, provide, computed } from 'vue'
  import { loadImage, isString } from '../../_utils'
  import { useFilterProps } from '../../_hooks/useFilterProps'
  import type { Ref, CSSProperties, ComputedRef } from 'vue'
  import type { FPropsType } from './image'
  import type { callbackInterface as a } from './interface'
  import type {
    ordinaryFunctionInterface as b,
    LoadNeedImagePropsInterface as c,
    classListInterface as d
  } from '../../_interface'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  provide(ImagePropsKey, prop)

  // 是否加载成功
  const isSuccess: Ref<boolean> = ref<boolean>(true)
  // 大图预览是否展示
  const isPreviewListShow: Ref<boolean> = ref<boolean>(false)
  // 描述信息的宽度
  const captionWidth: Ref<number> = ref<number>(0)
  const FImageImg: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )
  const isShowNode: Ref<boolean> = ref<boolean>(prop.lazy)

  // 点击图片时候 开启大图预览
  const handleClick: b = (): void => {
    if (prop.previewList && prop.previewList.length) {
      isPreviewListShow.value = true
    }
  }

  // 关闭大图预览
  const handleClose: b = (): void => {
    isPreviewListShow.value = false
  }

  // 开始加载图片
  const loadAction: b = (): void => {
    const node: HTMLImageElement = FImageImg.value as HTMLImageElement
    const callback: a = (params: boolean, width: number): void => {
      isSuccess.value = params
      isShowNode.value = params
      captionWidth.value = width
    }

    const needProps: c = useFilterProps<FPropsType, c>(prop, [
      'src',
      'errSrc',
      'rootMargin',
      'lazy'
    ])

    loadImage(node, needProps, emit, callback)
  }

  onMounted((): void => {
    loadAction()
  })

  const classList: ComputedRef<d> = computed((): d => {
    const { fit, noSelect, previewList } = prop

    return [
      'f-image-img',
      {
        [`f-image-${fit}`]: fit,
        'f-image-select': noSelect,
        'f-image-pointer': previewList && previewList.length
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, height, round } = prop

    return {
      width: isString(width) ? width : width + 'px',
      height: isString(height) ? height : height + 'px',
      borderRadius: round
    } as const
  })

  const captionStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { width, captionColor, round } = prop

      return {
        width: width || `${captionWidth.value}px`,
        color: captionColor,
        borderBottomLeftRadius: round,
        borderBottomRightRadius: round
      } as const
    }
  )
</script>

<template>
  <div
    v-if="isSuccess"
    :class="['f-image', { 'f-image-block': block }]"
    :style="styleList"
  >
    <!-- 真正展示的图片 -->
    <img
      v-show="isShowNode"
      ref="FImageImg"
      src=""
      :class="classList"
      :draggable="draggable"
      :referrer-policy="referrerPolicy"
      :alt="alt"
      :title="title"
      @click="handleClick"
    >

    <!-- 说明文字 -->
    <div
      v-if="caption"
      v-show="isSuccess"
      class="f-image-caption"
      :style="captionStyleList"
    >
      {{ caption }}
    </div>

    <!-- 大图预览框 -->
    <f-preview-list
      v-if="prop.previewList && prop.previewList.length"
      v-show="isPreviewListShow"
      @close="handleClose"
    />
  </div>

  <div v-else class="f-image-error">
    <slot name="error">
      <span class="f-image-error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
