<template>
  <div
    v-if="show"
    class="f-loading"
    :style="{
      background: loadingBgColor,
      opacity: loadingBgOpacity,
      color: loadingTextColor
    }"
    @click="onClose"
  >
    <i
      :class="[
        'f-icon',
        'f-loading-animation',
        `${loadingIcon || 'f-icon-loading'}`
      ]"
    />
    <p class="f-loading-title" :style="{ fontSize: loadingTextSize }">
      {{ loadingText || '加载中' }}
    </p>
  </div>
</template>

<script setup lang="ts" name="FLoading">
  import { Props, Emits } from './loading'
  import type { onCloseInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const onClose: onCloseInterface = (evt: MouseEvent): void => {
    prop.isClose && emit('close', evt)
  }
</script>
