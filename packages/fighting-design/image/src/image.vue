<script lang="ts" setup name="FImage">
  import { Props, Emits } from './image'
  import { onMounted, ref, computed } from 'vue'
  import { loadImage, sizeChange } from '../../_utils'
  import { useFilterProps } from '../../_hooks'
  import type { Ref, CSSProperties, ComputedRef } from 'vue'
  import type { ImagePropsType } from './image'
  import type {
    HandleEventInterface as e,
    OrdinaryFunctionInterface as b,
    LoadNeedImagePropsInterface as c,
    ClassListInterface as d,
    CallbackInterface
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  // 是否加载成功
  const isSuccess: Ref<boolean> = ref<boolean>(true)
  const FImageImg: Ref<HTMLImageElement> = ref<HTMLImageElement>(
    null as unknown as HTMLImageElement
  )
  const isShowNode: Ref<boolean> = ref<boolean>(prop.lazy)

  // 点击图片时候 开启大图预览
  const handleClick: e = (evt: MouseEvent): void => {
    emit('click', evt)
  }

  // 开始加载图片
  const loadAction: b = (): void => {
    const node: HTMLImageElement = FImageImg.value as HTMLImageElement
    const callback: CallbackInterface = (params: boolean): void => {
      isSuccess.value = params
      isShowNode.value = params
    }

    const needProps: c = useFilterProps<ImagePropsType, c>(prop, [
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
    const { fit, noSelect } = prop

    return [
      'f-image__img',
      {
        [`f-image__${fit}`]: fit,
        'f-image__select': noSelect
      }
    ] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, height, round } = prop

    return {
      '--f-image-width': sizeChange(width),
      '--f-image-height': sizeChange(height),
      '--f-image-border-radius': sizeChange(round)
    } as const
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
      ref="FImageImg"
      src=""
      :class="classList"
      :style="styleList"
      :draggable="draggable"
      :referrer-policy="referrerPolicy"
      :alt="alt"
      :title="title"
      @click="handleClick"
    />
  </div>

  <div v-else class="f-image__error">
    <slot name="error">
      <span class="f-image__error-text">{{ alt || '加载失败' }}</span>
    </slot>
  </div>
</template>
