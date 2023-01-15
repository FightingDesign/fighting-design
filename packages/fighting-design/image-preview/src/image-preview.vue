<script lang="ts" setup name="FImagePreview">
  import { Props } from './props'
  import { ref, toRef } from 'vue'
  import { FButton } from '../../button'
  import { FToolbar } from '../../toolbar'
  import { FToolbarItem } from '../../toolbar-item'
  import { FPopup } from '../../popup'
  import { isBoolean, isArray } from '../../_utils'
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
  import { useOperationImg, useVisible } from '../../_hooks'
  import { EMIT_VISIBLE } from '../../_tokens'
  import type { ToolbarClickParams } from '../../toolbar'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_VISIBLE]: (visible: boolean): boolean => isBoolean(visible)
  })

  const { scale, rotate, smaller, bigger, scrollZoom, recovery, rotateClockwise, rotateCounterClock } =
    useOperationImg()

  const { isVisible, closeVisible } = useVisible(toRef(prop, 'visible'), emit, prop.onClose)

  /** 初始展示的图片索引 */
  const previewShowIndex: Ref<number> = ref(prop.showIndex > prop.imgList.length - 1 ? 0 : prop.showIndex)

  /** 开始图片加载 */
  const imagPreload = (): void => {
    isArray(prop.imgList) &&
      prop.imgList.forEach((item: string): void => {
        /** 图片元素 */
        const img: HTMLImageElement = new Image()
        img.src = item
      })
  }

  /**
   * 左右切换按钮
   *
   * @param type 区分点击的是上一张还是下一张
   */
  const switchImage = (type: 'next' | 'prev'): void => {
    recovery()

    const optionMap = {
      /** 下一张切换 */
      next: (): void => {
        if (previewShowIndex.value < prop.imgList.length - 1) {
          previewShowIndex.value++
          return
        }
        previewShowIndex.value = 0
      },
      /** 上一张切换 */
      prev: (): void => {
        if (previewShowIndex.value > 0) {
          previewShowIndex.value--
          return
        }
        previewShowIndex.value = prop.imgList.length - 1
      }
    } as const

    optionMap[type] && optionMap[type]()
  }

  /**
   * 点击操作栏触发
   *
   * @param target f-toolbar 组件返回值
   */
  const optionClick = (target: ToolbarClickParams): void => {
    if (!target.index) return

    interface OptionMap {
      1: () => void
      2: () => void
      3: () => void
      4: () => void
      5: () => void
    }

    const optionMap: OptionMap = {
      1: (): void => smaller(),
      2: (): void => bigger(),
      3: (): void => recovery(),
      4: (): void => rotateClockwise(),
      5: (): void => rotateCounterClock()
    } as const

    const index = target.index as unknown as keyof OptionMap

    optionMap[index] && optionMap[index]()
  }
</script>

<template>
  <div class="f-image-preview" @mousewheel="scrollZoom">
    <f-popup v-model:visible="isVisible" :z-index="zIndex" :on-open="imagPreload">
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
          :on-click="() => switchImage('next')"
        />

        <f-button
          class="f-image-preview__prev"
          circle
          :before-icon="FIconChevronLeftVue"
          :on-click="() => switchImage('prev')"
        />
      </template>

      <!-- 关闭按钮 -->
      <f-button class="f-image-preview__close" circle :before-icon="FIconCrossVue" :on-click="closeVisible" />

      <!-- 操作栏 -->
      <f-toolbar v-if="isOption" class="f-image-preview__option" round :on-click="optionClick">
        <f-toolbar-item :icon="FIconZoomOutVue" :index="1" />
        <f-toolbar-item :icon="FIconZoomInVue" :index="2" />
        <f-toolbar-item :icon="FIconLayoutRowsVue" :index="3" />
        <f-toolbar-item :icon="FIconRotateClockwiseVue" :index="4" />
        <f-toolbar-item :icon="FIconRotateAntiClockwiseVue" :index="5" />
      </f-toolbar>
    </f-popup>
  </div>
</template>
