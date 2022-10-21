<script setup lang="ts" name="FLoading">
  import { computed } from 'vue'
  import { Props, Emits } from './loading'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingAVue } from '../../_components/svg/index'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { HandleEventInterface as a } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    prop.close && emit('close', evt)
  }

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, opacity } = prop

    return {
      background,
      opacity
    } as const
  })
</script>

<template>
  <div v-if="show" class="f-loading" :style="styleList" @click="handleClick">
    <f-svg-icon :size="20" class="f-loading__animation" :icon="icon">
      <slot name="icon">
        <f-icon-loading-a-vue />
      </slot>
    </f-svg-icon>

    <span class="f-loading__title" :style="{ fontSize, color: fontColor }">
      {{ text || ' 玩命加载中...' }}
    </span>
  </div>
</template>
