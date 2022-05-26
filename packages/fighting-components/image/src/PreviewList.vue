<template>
  <div class="f-image-preview">
    <img
      class="f-image-showImg"
      :src="previewList[previewShowIndex]"
      width="300"
    />

    <div class="right_button">
      <f-icon
        size="22px"
        icon="f-icon-arrow-right"
        @click="btnClick(new Next())"
      />
    </div>
    <div class="left_button">
      <f-icon
        size="22px"
        icon="f-icon-arrow-left"
        @click="btnClick(new Prev())"
      />
    </div>
    <div class="close_button">
      <f-icon size="16px" icon="f-icon-close" @click="btnClick(new Close())" />
    </div>

    <div class="option">
      <f-icon
        size="18px"
        icon="f-icon-suoxiao"
        @click="btnClick(new Small())"
      />
      <f-icon size="18px" icon="f-icon-fangda" @click="btnClick(new Big())" />
      <f-icon
        size="18px"
        icon="f-icon-xuanzhuan-1"
        @click="btnClick(new TurnRight())"
      />
      <f-icon
        size="18px"
        icon="f-icon-xuanzhuan-2"
        @click="btnClick(new TurnLeft())"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Props } from './PreviewList'
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import type {
    callbackType,
    btnClickInterface,
    optionInterface
  } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(['close'])

  const previewShowIndex: Ref<number> = ref<number>(prop.previewShowIndex)

  class Close implements optionInterface {
    onCLick(): void {
      emit('close', false)
    }
  }

  class Prev implements optionInterface {
    onCLick(): void {
      if (previewShowIndex.value > 0) {
        previewShowIndex.value--
        return
      }
      previewShowIndex.value = prop.previewList.length - 1
    }
  }

  class Next implements optionInterface {
    onCLick(): void {
      if (previewShowIndex.value < prop.previewList.length - 1) {
        previewShowIndex.value++
        return
      }
      previewShowIndex.value = 0
    }
  }

  class Small implements optionInterface {
    onCLick(): void {
      console.log('Small')
    }
  }

  class Big implements optionInterface {
    onCLick(): void {
      console.log('Big')
    }
  }

  class TurnLeft implements optionInterface {
    onCLick(): void {
      console.log('Turn left')
    }
  }

  class TurnRight implements optionInterface {
    onCLick(): void {
      console.log('TurnRight')
    }
  }

  const btnClick: btnClickInterface = (callback: callbackType): void => {
    callback.onCLick()
  }
</script>
