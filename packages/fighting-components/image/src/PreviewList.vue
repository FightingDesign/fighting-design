<template>
  <div class="f-image-preview">
    <img
      class="f-image-showImg"
      :src="previewList[previewShowIndex]"
      width="300"
      alt=""
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
      <f-icon size="18px" icon="f-icon-suoxiao" />
      <f-icon size="18px" icon="f-icon-fangda" />
      <f-icon size="18px" icon="f-icon-xuanzhuan-1" />
      <f-icon size="18px" icon="f-icon-xuanzhuan-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Props } from './PreviewList'
  import { ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(['close'])

  const previewShowIndex = ref(prop.previewShowIndex)

  class Close {
    onCLick() {
      emit('close', false)
    }
  }

  class Prev {
    onCLick() {
      console.log('Prev')
    }
  }

  class Next {
    onCLick() {
      if (previewShowIndex.value < prop.previewList.length - 1) {
        previewShowIndex.value++
        return
      }
      previewShowIndex.value = 0
    }
  }

  const btnClick = (callback: Close) => {
    callback.onCLick()
  }
</script>
