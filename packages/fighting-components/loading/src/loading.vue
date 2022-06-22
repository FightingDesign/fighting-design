<template>
  <div class="f-loading__mask" v-if="show"
    :style="{ background: loadingBgColor, opacity: loadingBgOpacity, color: loadingTextColor, }" @click="onClose">
    <i class="f-icon f-loading-animation" :class="loadingIcon" :style="iconStyle" />
    <p class="f-loading__title" :style="{ fontSize: loadingTextSize }">{{ loadingText }}</p>
  </div>
</template>

<script setup lang="ts">
import { Props, Emits } from './type'
const props = defineProps(Props)
const emits = defineEmits(Emits)

const onClose = () => {
  props.isClose && emits('close')
}
</script>

<style lang="scss" scoped>
.f-loading {
  &__mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1011;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    margin: 0;
    margin-top: 10px;
  }

}
</style>
