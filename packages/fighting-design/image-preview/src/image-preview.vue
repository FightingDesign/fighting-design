<script lang="ts" setup>
  import { Props } from './props'
  import { ref } from 'vue'
  import { FButton } from '../../button'
  import { FToolbar } from '../../toolbar'
  import { FToolbarItem } from '../../toolbar-item'
  import { isArray } from '../../_utils'
  import {
    FIconChevronLeft,
    FIconChevronRight,
    FIconRotateAntiClockwise,
    FIconRotateClockwise,
    FIconCross,
    FIconLayoutRows,
    FIconZoomIn,
    FIconZoomOut
  } from '../../_svg'
  import { useOperationImg, useRun } from '../../_hooks'

  defineOptions({ name: 'FImagePreview' })

  const prop = defineProps(Props)
  const visible = defineModel<boolean>('visible', {
    default: false,
    type: Boolean
  })

  const { run } = useRun()
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

  /** 初始展示的图片索引 */
  const previewShowIndex = ref<number>(
    prop.showIndex > prop.imgList.length - 1 ? 0 : prop.showIndex
  )

  /** 开始图片加载 */
  const imagPreload = (): void => {
    if (isArray(prop.imgList)) {
      prop.imgList.forEach((item: string): void => {
        /**
         * 创建图片元素
         *
         * @see Image() https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image
         */
        const img: HTMLImageElement = new Image()
        img.src = item
      })
    }
  }

  /** 左右切换映射对象 */
  const switchMap = {
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

  /**
   * 左右切换按钮
   *
   * @param { 'next' | 'prev' } type 区分点击的是上一张还是下一张
   */
  const switchImage = (type: 'next' | 'prev'): void => {
    recovery()
    run(switchMap[type])
  }

  /** 点击操作栏映射对象 */
  const optionMap: Record<string, () => void> = {
    '1': (): void => smaller(),
    '2': (): void => bigger(),
    '3': (): void => recovery(),
    '4': (): void => rotateClockwise(),
    '5': (): void => rotateCounterClock()
  } as const

  /**
   * 点击操作栏触发
   *
   * @param { Object } evt 事件对象
   */
  const optionClick = (index: string | null): void => {
    if (!index) return

    /** 获取当前元素的索引 */
    run(optionMap[index])
  }

  /**
   * 关闭图片预览
   *
   * @param { Object } evt 事件对象
   */
  const handelClose = (evt: MouseEvent): void => {
    visible.value = false
    run(prop.onClose, evt)
  }
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <!-- 开启状态下加载所有图片 -->
    <transition name="f-image-preview__transition" @before-enter="imagPreload">
      <div
        v-show="visible"
        class="f-image-preview"
        :style="{ zIndex }"
        @mousewheel="scrollZoom"
      >
        <!-- 遮罩层 -->
        <div class="f-image-preview__mask" />

        <!-- 主容器 -->
        <div class="f-image-preview__container" @click.self="handelClose">
          <!-- 主内容 -->
          <transition name="f-image-preview__wrapper-transition">
            <div v-show="visible" class="f-image-preview__wrapper">
              <img
                class="f-image-preview__node"
                draggable="false"
                :src="imgList[previewShowIndex]"
                :style="{
                  transform: `scale(${scale}) rotate(${rotate}deg)`,
                  borderRadius: round
                }"
              />
            </div>
          </transition>

          <!-- 操作栏 -->
          <template v-if="isOption">
            <f-toolbar class="f-image-preview__option" round :on-click="optionClick">
              <f-toolbar-item :icon="FIconZoomOut" :index="1" />
              <f-toolbar-item :icon="FIconZoomIn" :index="2" />
              <f-toolbar-item :icon="FIconLayoutRows" :index="3" />
              <f-toolbar-item :icon="FIconRotateClockwise" :index="4" />
              <f-toolbar-item :icon="FIconRotateAntiClockwise" :index="5" />
            </f-toolbar>
          </template>

          <!-- 左右切换按钮 -->
          <template v-if="imgList.length > 1">
            <f-button
              class="f-image-preview__next"
              circle
              :before-icon="FIconChevronRight"
              :on-click="() => switchImage('next')"
            />

            <f-button
              class="f-image-preview__prev"
              circle
              :before-icon="FIconChevronLeft"
              :on-click="() => switchImage('prev')"
            />
          </template>

          <!-- 关闭按钮 -->
          <f-button
            class="f-image-preview__close"
            circle
            :before-icon="FIconCross"
            :on-click="handelClose"
          />
        </div>
      </div>
    </transition>
  </teleport>
</template>
