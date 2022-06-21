<template>
  <div class="f-loading__mask" v-if="show"
    :style="{ background: loadingBgColor, opacity: loadingBgOpacity, color: loadingTextColor, }" @click="onClose">
    <i :class="loadingIcon"></i>
    <div class="f-loading__title" :style="{ fontSize: loadingTextSize }">
      <p>{{ loadingText }} . . .</p>
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
}
</style>
