<template>
  <div class="f-loading__mask" v-if="show"
    :style="{ background: loadingBgColor, opacity: loadingBgOpacity, color: loadingTextColor, }" @click="onClose">
    <i :class="loadingIcon"> 我是 icon</i>
    <div class="f-loading__title" :style="{ fontSize: loadingTextSize }">
      <p>{{ loadingText }}</p>
      <span class="f-loading__comma">...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Props } from './props'
const props = defineProps(Props)
const emits = defineEmits<{
  (event: 'close'): void
}>()

const onClose = () => {
  props.isClose && emits('close')
}
</script>

<style lang="less" scoped>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__comma {
    position: relative;
    top: 13px;
    left: 10px;
    width: 2.5ch;
    animation: comma-f4b50242 2s steps(6), effect 0.5s step-end alternate;
    animation-iteration-count: infinite;
    white-space: nowrap;
    overflow: hidden;
    transform: rotate(180deg);
    font-size: 23px;
    letter-spacing: 3px
  }
}

@keyframes comma {
  from {
    width: 0;
  }
}
</style>
