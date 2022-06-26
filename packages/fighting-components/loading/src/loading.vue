<template>
  <div v-if="show" class="f-loading" :style="loadingStyleList" @click="onClose">
    <i
      :class="[
        'f-icon',
        'f-loading-animation',
        `${loadingIcon || 'f-icon-loading'}`
      ]"
    />
    <span class="f-loading-title" :style="{ fontSize: loadingTextSize }">
      {{ loadingText || '加载中' }}
    </span>
  </div>
</template>

<script setup lang="ts" name="FLoading">
  import { computed } from 'vue'
  import { Props, Emits } from './loading'
  import type { onCloseInterface, loadingStyleListInterface } from './interface'
  import type { ComputedRef } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const onClose: onCloseInterface = (evt: MouseEvent): void => {
    prop.isClose && emit('close', evt)
  }

  const loadingStyleList: ComputedRef<loadingStyleListInterface> = computed(
    (): loadingStyleListInterface => {
      const { loadingBgColor, loadingBgOpacity, loadingTextColor } = prop

      return {
        background: loadingBgColor,
        opacity: loadingBgOpacity,
        color: loadingTextColor
      }
    }
  )
</script>
