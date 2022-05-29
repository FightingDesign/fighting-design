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
        :style="{ transform: `scale(${scale}) rotate(${rotate}deg)` }"
      />

      <div v-if="previewList.length > 1" class="right_button">
        <f-icon
          size="30px"
          icon="f-icon-arrow-right"
          @click="switchImage('next')"
        />
      </div>

      <div v-if="previewList.length > 1" class="left_button">
        <f-icon
          size="30px"
          icon="f-icon-arrow-left"
          @click="switchImage('prev')"
        />
      </div>

      <div v-if="showCloseBtn" class="close_button">
        <f-icon size="20px" icon="f-icon-close" @click="close" />
      </div>

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

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Props } from './PreviewList'
  import type { Ref } from 'vue'
  import type {
    ordinaryFunctionInterface,
    switchImageInterface,
    optionClickInterface
  } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(['close'])

  const previewShowIndex: Ref<number> = ref<number>(prop.previewShowIndex)
  const scale: Ref<number> = ref<number>(1)
  const rotate: Ref<number> = ref<number>(0)

  const imagPreload: ordinaryFunctionInterface = (): void => {
    const imgList: Array<string> = prop.previewList as Array<string>

    imgList.map((item: string): void => {
      const img: HTMLImageElement = new Image() as HTMLImageElement
      img.src = item
    })
  }

  const recovery: ordinaryFunctionInterface = (): void => {
    scale.value = 1
    rotate.value = 0
  }

  const close: ordinaryFunctionInterface = (): void => {
    emit('close', false)
  }

  const switchImage: switchImageInterface = (type: 'next' | 'prev'): void => {
    recovery()

    const next: ordinaryFunctionInterface = (): void => {
      if (previewShowIndex.value < prop.previewList.length - 1) {
        previewShowIndex.value++
        return
      }
      previewShowIndex.value = 0
    }

    const prev: ordinaryFunctionInterface = (): void => {
      if (previewShowIndex.value > 0) {
        previewShowIndex.value--
        return
      }
      previewShowIndex.value = prop.previewList.length - 1
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

  const onEnter: ordinaryFunctionInterface = (): void => {
    imagPreload()
  }

  const optionClick: optionClickInterface = (evt: Event): void => {
    const className: string = (evt.target as HTMLElement).className

    const smaller: ordinaryFunctionInterface = (): void => {
      scale.value -= 0.2
    }

    const bigger: ordinaryFunctionInterface = (): void => {
      scale.value += 0.2
    }

    const turnLeft: ordinaryFunctionInterface = (): void => {
      rotate.value += 90
    }

    const turnRight: ordinaryFunctionInterface = (): void => {
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

  const packingClose: ordinaryFunctionInterface = (): void => {
    if (prop.modalClose) {
      close()
    }
  }

  const onImgMousewheel = (e) => {
    if (e.wheelDelta > 1) {
      console.log('向上滚动')
      return
    }
    console.log('向下滚动')
  }
</script>
