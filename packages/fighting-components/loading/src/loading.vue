<template>
  <div class="f-loading" v-if="show"
    :style="{ background: loadingBgColor, opacity: loadingBgOpacity, color: loadingTextColor, }" @click="onClose">
    <i class="f-icon f-loading-animation" :class="loadingIcon" :style="iconStyle" />
    <p class="f-loading-title" :style="{ fontSize: loadingTextSize }">{{ loadingText }}</p>
  </div>
</template>

<script setup lang="ts" name="FLoading">
import { Props, Emits } from './type'
const props = defineProps(Props)
const emits = defineEmits(Emits)

const onClose = () => {
  props.isClose && emits('close')
}
</script>
