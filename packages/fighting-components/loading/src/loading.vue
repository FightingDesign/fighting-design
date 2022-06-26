<template>
  <div v-if="show" class="f-loading" :style="loadingStyleList" @click="onClose">
    <i
      :class="['f-icon', 'f-loading-animation', `${icon || 'f-icon-loading'}`]"
    />
    <span class="f-loading-title" :style="{ fontSize: textSize }">
      {{ text || '加载中' }}
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
    prop.close && emit('close', evt)
  }

  const loadingStyleList: ComputedRef<loadingStyleListInterface> = computed(
    (): loadingStyleListInterface => {
      const { background, opacity, textColor } = prop

      return {
        background,
        opacity,
        color: textColor
      }
    }
  )
</script>
