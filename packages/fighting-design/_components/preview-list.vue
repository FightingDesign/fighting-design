<script lang="ts" setup name="FPreviewList">
  import { ref, inject, toRefs } from 'vue'
  import FIcon from '../icon'
  import { keepDecimal } from '../_utils'
  import { ImagePropsKey } from '../image/src/image'
  import type { Ref } from 'vue'
  import type {
    switchImageInterface as a,
    optionClickInterface as b,
    onImgMousewheelInterface as c,
    handleCloseInterface as d
  } from '../image/src/interface'
  import type { ordinaryFunctionInterface as e } from '../_interface'
  import type { FPropsType } from '../image/src/image'

  const injectImageProps: FPropsType = inject(ImagePropsKey)!
  const emit = defineEmits({
    close: (evt: MouseEvent): MouseEvent => evt
  })

  const {
    previewZIndex,
    previewList,
    previewRound,
    showCloseBtn,
    previewShowOption
  } = toRefs(injectImageProps)
  const previewShowIndex: Ref<number> = ref<number>(
    injectImageProps.previewShowIndex > injectImageProps.previewList.length - 1
      ? 0
      : injectImageProps.previewShowIndex
  )
  const scale: Ref<number> = ref<number>(1)
  const rotate: Ref<number> = ref<number>(0)

  // 图片加载
  const imagPreload: e = (): void => {
    const imgList: Array<string> = injectImageProps.previewList as Array<string>

    imgList.forEach((item: string): void => {
      const img: HTMLImageElement = new Image() as HTMLImageElement
      img.src = item
    })
  }

  // 还原图片
  const recovery: e = (): void => {
    scale.value = 1
    rotate.value = 0
  }

  // 关闭图片预览
  const handleClose: d = (evt: MouseEvent): void => {
    emit('close', evt)
  }

  // 左右切换按钮
  const switchImage: a = (type: 'next' | 'prev'): void => {
    recovery()

    const next: e = (): void => {
      if (previewShowIndex.value < injectImageProps.previewList.length - 1) {
        previewShowIndex.value++
        return
      }
      previewShowIndex.value = 0
    }

    const prev: e = (): void => {
      if (previewShowIndex.value > 0) {
        previewShowIndex.value--
        return
      }
      previewShowIndex.value = injectImageProps.previewList.length - 1
    }

    switch (type) {
      case 'next':
        next()
        break
      case 'prev':
        prev()
        break
    }
  }

  // 加载图片
  const onEnter: e = (): void => {
    imagPreload()
  }

  // 做小
  const smaller: e = (): void => {
    if (keepDecimal(scale.value, 1) <= 0.2) {
      return
    }
    scale.value -= 0.2
  }

  // 放大
  const bigger: e = (): void => {
    if (scale.value >= 10) {
      return
    }
    scale.value += 0.2
  }

  // 点击操作栏
  const optionClick: b = (evt: Event): void => {
    const className: string = (evt.target as HTMLElement).className

    const turnLeft: e = (): void => {
      rotate.value += 90
    }

    const turnRight: e = (): void => {
      rotate.value -= 90
    }

    switch (className) {
      case 'f-icon f-icon-suoxiao':
        smaller()
        break
      case 'f-icon f-icon-fangda':
        bigger()
        break
      case 'f-icon f-icon-column1':
        recovery()
        break
      case 'f-icon f-icon-xuanzhuan-1':
        turnLeft()
        break
      case 'f-icon f-icon-xuanzhuan-2':
        turnRight()
        break
    }
  }

  // 点击遮罩层关闭
  const packingClose: d = (evt: MouseEvent): void => {
    if (injectImageProps.modalClose) {
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
</script>

<template>
  <transition name="f-image-preview" @enter="onEnter">
    <div
      class="f-image-preview"
      :style="{ zIndex: previewZIndex }"
      @click.self="packingClose"
      @mousewheel="onImgMousewheel"
    >
      <img
        class="f-image-showImg"
        draggable="false"
        :src="previewList[previewShowIndex]"
        :style="{
          transform: `scale(${scale}) rotate(${rotate}deg)`,
          borderRadius: previewRound
        }"
      />

      <!-- 左右切换按钮 -->
      <template v-if="previewList.length > 1">
        <div class="right_button" @click="switchImage('next')">
          <f-icon size="30px" icon="f-icon-arrow-right" />
        </div>

        <div class="left_button" @click="switchImage('prev')">
          <f-icon size="30px" icon="f-icon-arrow-left" />
        </div>
      </template>

      <!-- 关闭按钮 -->
      <div v-if="showCloseBtn" class="close_button" @click="handleClose">
        <f-icon size="20px" icon="f-icon-close" />
      </div>

      <!-- 操作栏 -->
      <div v-if="previewShowOption" class="option" @click="optionClick">
        <f-icon size="23px" icon="f-icon-suoxiao" />
        <f-icon size="23px" icon="f-icon-fangda" />
        <f-icon size="23px" icon="f-icon-column1" />
        <f-icon size="23px" icon="f-icon-xuanzhuan-1" />
        <f-icon size="23px" icon="f-icon-xuanzhuan-2" />
      </div>
    </div>
  </transition>
</template>
