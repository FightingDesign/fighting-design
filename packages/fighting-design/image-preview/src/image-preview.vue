<script lang="ts" setup name="FImagePreview">
  import { Props, Emits } from './props'
  import { ref, watch } from 'vue'
  import { FButton } from '../../button'
  import { FToolbar } from '../../toolbar'
  import { FToolbarItem } from '../../toolbar-item'
  import { FPopup } from '../../popup'
  import {
    FIconChevronLeftVue,
    FIconChevronRightVue,
    FIconRotateAntiClockwiseVue,
    FIconRotateClockwiseVue,
    FIconCrossVue,
    FIconLayoutRowsVue,
    FIconZoomInVue,
    FIconZoomOutVue
  } from '../../_svg'
  import { useOperationImg } from '../../_hooks'
  import type { Ref } from 'vue'
  import type {
    ImagePreviewSwitchImageInterface as a,
    ImagePreviewOptionClickInterface as b,
    OptionFunInterface as g
  } from './interface'
  import type { OrdinaryFunctionInterface as f } from '../../_interface'
  import type { ToolbarClickEmitInterface } from '../../toolbar/src/interface'
  import type { ImagePreviewPropsType } from './props'

  const prop: ImagePreviewPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const { scale, rotate, smaller, bigger, onImgMousewheel, recovery } =
    useOperationImg()
  const isVisible: Ref<boolean> = ref<boolean>(prop.visible)
  const previewShowIndex: Ref<number> = ref<number>(
    prop.showIndex > prop.imgList.length - 1 ? 0 : prop.showIndex
  )

  // 关闭图片预览
  const handleClose: f = (): void => {
    emit('update:visible', false)
    prop.close && prop.close()
  }

  watch(
    (): boolean => isVisible.value,
    (newVal: boolean): void => {
      if (!newVal) {
        handleClose()
      }
    }
  )

  watch(
    (): boolean => prop.visible,
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )

  // 图片加载
  const imagPreload: f = (): void => {
    const imgList: string[] = prop.imgList as string[]

    imgList.forEach((item: string): void => {
      const img: HTMLImageElement = new Image() as HTMLImageElement
      img.src = item
    })
  }

  // 左右切换按钮
  const switchImage: a = (type: 'next' | 'prev'): void => {
    recovery()

    const optionFun = {
      next: (): void => {
        if (previewShowIndex.value < prop.imgList.length - 1) {
          previewShowIndex.value++
          return
        }
        previewShowIndex.value = 0
      },
      prev: (): void => {
        if (previewShowIndex.value > 0) {
          previewShowIndex.value--
          return
        }
        previewShowIndex.value = prop.imgList.length - 1
      }
    } as const

    if (optionFun[type]) {
      optionFun[type]()
    }
  }

  // 点击操作栏
  const optionClick: b = (target: ToolbarClickEmitInterface): void => {
    const optionFun = {
      1: (): void => smaller(),
      2: (): void => bigger(),
      3: (): void => recovery(),
      4: (): void => {
        rotate.value += 90
      },
      5: (): void => {
        rotate.value -= 90
      }
    } as g

    if (optionFun[target.key as string]) {
      optionFun[target.key as string]()
    }
  }
</script>

<template>
  <div class="f-image-preview" @mousewheel="onImgMousewheel">
    <f-popup v-model:visible="isVisible" :open="imagPreload">
      <img
        class="f-image-preview__exhibition"
        draggable="false"
        :src="imgList[previewShowIndex]"
        :style="{
          transform: `scale(${scale}) rotate(${rotate}deg)`,
          borderRadius: round
        }"
      />

      <!-- 左右切换按钮 -->
      <template v-if="imgList.length > 1">
        <f-button
          class="f-image-preview__next"
          circle
          :before-icon="FIconChevronRightVue"
          @click="switchImage('next')"
        />

        <f-button
          class="f-image-preview__prev"
          circle
          :before-icon="FIconChevronLeftVue"
          @click="switchImage('prev')"
        />
      </template>

      <!-- 关闭按钮 -->
      <f-button
        class="f-image-preview__close"
        circle
        :before-icon="FIconCrossVue"
        @click="handleClose"
      />

      <!-- 操作栏 -->
      <f-toolbar
        v-if="isOption"
        class="f-image-preview__option"
        round
        @click="optionClick"
      >
        <f-toolbar-item :icon="FIconZoomOutVue" :data-key="1" />
        <f-toolbar-item :icon="FIconZoomInVue" :data-key="2" />
        <f-toolbar-item :icon="FIconLayoutRowsVue" :data-key="3" />
        <f-toolbar-item :icon="FIconRotateClockwiseVue" :data-key="4" />
        <f-toolbar-item :icon="FIconRotateAntiClockwiseVue" :data-key="5" />
      </f-toolbar>
    </f-popup>
  </div>
</template>
