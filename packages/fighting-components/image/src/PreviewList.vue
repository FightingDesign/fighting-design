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

      <div
        v-if="previewList.length > 1"
        class="right_button"
        @click="switchImage('next')"
      >
        <f-icon size="30px" icon="f-icon-arrow-right" />
      </div>

      <div
        v-if="previewList.length > 1"
        class="left_button"
        @click="switchImage('prev')"
      >
        <f-icon size="30px" icon="f-icon-arrow-left" />
      </div>

      <div v-if="showCloseBtn" class="close_button" @click="close">
        <f-icon size="20px" icon="f-icon-close" />
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

<script lang="ts" setup name="PreviewList">
  import { ref } from 'vue'
  import { Props, Emits } from './PreviewList'
  import type { Ref } from 'vue'
  import type {
    ordinaryFunctionInterface,
    switchImageInterface,
    optionClickInterface
  } from './interface'
  import { keepDecimal } from '@fighting-design/fighting-utils'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const previewShowIndex: Ref<number> = ref<number>(
    prop.previewShowIndex > prop.previewList.length - 1
      ? 0
      : prop.previewShowIndex
  )
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
    emit('close')
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

  const smaller: ordinaryFunctionInterface = (): void => {
    if (keepDecimal(scale.value, 1) <= 0.2) {
      return
    }
    scale.value -= 0.2
  }

  const bigger: ordinaryFunctionInterface = (): void => {
    if (scale.value >= 10) {
      return
    }
    scale.value += 0.2
  }

  const optionClick: optionClickInterface = (evt: Event): void => {
    const className: string = (evt.target as HTMLElement).className

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

  const onImgMousewheel = (evt: WheelEvent): void => {
    evt.preventDefault()
    if (evt.deltaY > 1) {
      smaller()
      return
    }
    bigger()
  }
</script>
