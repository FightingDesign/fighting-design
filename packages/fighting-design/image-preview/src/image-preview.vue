<script lang="ts" setup name="FImagePreview">
  import { Props, Emits } from './image-preview'
  import { ref } from 'vue'
  import { FToolbar, FToolbarItem } from '../../index'
  import { keepDecimal } from '../../_utils'
  import type { Ref } from 'vue'
  import type {
    switchImageInterface as a,
    optionClickInterface as b,
    onImgMousewheelInterface as c,
    handleCloseInterface as d,
    optionClickTargetKey as e
  } from './interface'
  import type { ordinaryFunctionInterface as f } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const scale: Ref<number> = ref<number>(1)
  const rotate: Ref<number> = ref<number>(0)
  const previewShowIndex: Ref<number> = ref<number>(
    prop.showIndex > prop.imgList.length - 1 ? 0 : prop.showIndex
  )

  // 图片加载
  const imagPreload: f = (): void => {
    const imgList: string[] = prop.imgList as string[]

    imgList.forEach((item: string): void => {
      const img: HTMLImageElement = new Image() as HTMLImageElement
      img.src = item
    })
  }

  // 做小
  const smaller: f = (): void => {
    if (keepDecimal(scale.value, 1) <= 0.2) {
      return
    }
    scale.value -= 0.2
  }

  // 放大
  const bigger: f = (): void => {
    if (scale.value >= 10) {
      return
    }
    scale.value += 0.2
  }

  // 加载图片
  const onEnter: f = (): void => {
    imagPreload()
  }

  // 关闭图片预览
  const handleClose: d = (evt: MouseEvent): void => {
    emit('close', evt)
    emit('update:visible', false)
  }

  // 点击遮罩层关闭
  const packingClose: d = (evt: MouseEvent): void => {
    if (prop.modalClose) {
      handleClose(evt)
    }
  }

  // 滚轮缩放
  const onImgMousewheel: c = (evt: WheelEvent): void => {
    evt.preventDefault()
    if (evt.deltaY > 1) {
      smaller()
      return
    }
    bigger()
  }

  // 还原图片
  const recovery: f = (): void => {
    scale.value = 1
    rotate.value = 0
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

    optionFun[type]()
  }

  // 点击操作栏
  const optionClick: b = ({ key }: e): void => {
    const optionFun = {
      '1': (): void => smaller(),
      '2': (): void => bigger(),
      '3': (): void => recovery(),
      '4': (): void => {
        rotate.value += 90
      },
      '5': (): void => {
        rotate.value += 90
      }
    } as const
    optionFun[key]()
  }
</script>

<template>
  <transition name="f-image-preview" @enter="onEnter">
    <div
      v-if="visible"
      class="f-image-preview"
      :style="{ zIndex }"
      @click.self="packingClose"
      @mousewheel="onImgMousewheel"
    >
      <img
        class="f-image-showImg"
        draggable="false"
        :src="imgList[previewShowIndex]"
        :style="{
          transform: `scale(${scale}) rotate(${rotate}deg)`,
          borderRadius: round
        }"
      >

      <!-- 左右切换按钮 -->
      <template v-if="imgList.length > 1">
        <f-toolbar
          v-if="imgList.length > 1"
          class="right-button"
          round
          @click="switchImage('next')"
        >
          <f-toolbar-item icon="f-icon-arrow-right" icon-size="25px" />
        </f-toolbar>

        <f-toolbar
          v-if="imgList.length > 1"
          class="left-button"
          round
          @click="switchImage('prev')"
        >
          <f-toolbar-item icon="f-icon-arrow-left" icon-size="25px" />
        </f-toolbar>
      </template>

      <!-- 关闭按钮 -->
      <f-toolbar
        v-if="isCloseBtn"
        class="close-button"
        round
        @click="handleClose"
      >
        <f-toolbar-item icon="f-icon-close" icon-size="20px" />
      </f-toolbar>

      <!-- 操作栏 -->
      <f-toolbar
        v-if="isOption"
        class="option-toolbar"
        round
        @click="optionClick"
      >
        <f-toolbar-item icon="f-icon-suoxiao" :data-key="1" />
        <f-toolbar-item icon="f-icon-fangda" :data-key="2" />
        <f-toolbar-item icon="f-icon-column1" :data-key="3" />
        <f-toolbar-item icon="f-icon-xuanzhuan-1" :data-key="4" />
        <f-toolbar-item icon="f-icon-xuanzhuan-2" :data-key="5" />
      </f-toolbar>
    </div>
  </transition>
</template>
