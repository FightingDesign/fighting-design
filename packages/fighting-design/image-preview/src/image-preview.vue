<script lang="ts" setup name="FImagePreview">
  import { Props } from './props'
  import { ref, watch } from 'vue'
  import { FButton } from '../../button'
  import { FToolbar } from '../../toolbar'
  import { FToolbarItem } from '../../toolbar-item'
  import { FPopup } from '../../popup'
  import { isBoolean, runCallback } from '../../_utils'
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
    ImagePreviewSwitchImageInterface,
    ImagePreviewOptionClickInterface,
    ImagePreviewOptionClickOptionMapInterface,
    ImagePreviewPropsType,
    ImagePreviewSwitchImageOptionMapInterface
  } from './interface'
  import type { OrdinaryFunctionInterface } from '../../_interface'
  import type { ToolbarClickParamsInterface } from '../../toolbar'

  const prop: ImagePreviewPropsType = defineProps(Props)
  const emit = defineEmits({
    'update:visible': (visible: boolean): boolean => isBoolean(visible)
  })

  const {
    scale,
    rotate,
    smaller,
    bigger,
    scrollZoom,
    recovery,
    rotateClockwise,
    rotateCounterClock
  } = useOperationImg()

  const isVisible: Ref<boolean> = ref<boolean>(prop.visible)
  const previewShowIndex: Ref<number> = ref<number>(
    prop.showIndex > prop.imgList.length - 1 ? 0 : prop.showIndex
  )

  /**
   * 关闭图片预览
   */
  const handleClose: OrdinaryFunctionInterface = (): void => {
    emit('update:visible', false)
    runCallback(prop.onClose)
  }

  /**
   * 监视绑定值，如果为假，则关闭
   */
  watch(
    (): boolean => isVisible.value,
    (newVal: boolean): void => {
      if (!newVal) {
        handleClose()
      }
    }
  )

  /**
   * 监视绑定的数据同步 isVisible
   */
  watch(
    (): boolean => prop.visible,
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )

  /**
   * 开始图片加载
   */
  const imagPreload: OrdinaryFunctionInterface = (): void => {
    const imgList: string[] = prop.imgList as string[]

    imgList.forEach((item: string): void => {
      const img: HTMLImageElement = new Image() as HTMLImageElement
      img.src = item
    })
  }

  /**
   * 左右切换按钮
   * @param type 区分点击的是上一张还是下一张
   */
  const switchImage: ImagePreviewSwitchImageInterface = (
    type: 'next' | 'prev'
  ): void => {
    recovery()

    const optionMap: ImagePreviewSwitchImageOptionMapInterface = {
      /**
       * 下一张切换
       */
      next: (): void => {
        if (previewShowIndex.value < prop.imgList.length - 1) {
          previewShowIndex.value++
          return
        }
        previewShowIndex.value = 0
      },
      /**
       * 上一张切换
       */
      prev: (): void => {
        if (previewShowIndex.value > 0) {
          previewShowIndex.value--
          return
        }
        previewShowIndex.value = prop.imgList.length - 1
      }
    } as const

    if (optionMap[type]) {
      optionMap[type]()
    }
  }

  /**
   * 点击操作栏触发
   *
   * @param target f-toolbar 组件返回值
   */
  const optionClick: ImagePreviewOptionClickInterface = (
    target: ToolbarClickParamsInterface
  ): void => {
    if (!target.index) return

    const optionMap: ImagePreviewOptionClickOptionMapInterface = {
      1: (): void => smaller(),
      2: (): void => bigger(),
      3: (): void => recovery(),
      4: (): void => rotateClockwise(),
      5: (): void => rotateCounterClock()
    } as const

    if (optionMap[target.index as unknown as 1 | 2 | 3 | 4 | 5]) {
      optionMap[target.index as unknown as 1 | 2 | 3 | 4 | 5]()
    }
  }
</script>

<template>
  <div class="f-image-preview" @mousewheel="scrollZoom">
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
        :on-click="handleClose"
      />

      <!-- 操作栏 -->
      <f-toolbar
        v-if="isOption"
        class="f-image-preview__option"
        round
        :on-click="optionClick"
      >
        <f-toolbar-item :icon="FIconZoomOutVue" :index="1" />
        <f-toolbar-item :icon="FIconZoomInVue" :index="2" />
        <f-toolbar-item :icon="FIconLayoutRowsVue" :index="3" />
        <f-toolbar-item :icon="FIconRotateClockwiseVue" :index="4" />
        <f-toolbar-item :icon="FIconRotateAntiClockwiseVue" :index="5" />
      </f-toolbar>
    </f-popup>
  </div>
</template>
