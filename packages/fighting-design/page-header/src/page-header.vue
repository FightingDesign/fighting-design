<script lang="ts" setup name="FPageHeader">
  import { computed } from 'vue'
  import { FIcon } from '../../icon'
  import { Props, Emits } from './page-header'
  import type { ComputedRef } from 'vue'
  import type {
    OrdinaryFunctionInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (): void => {
    emit('back')
  }

  const rightClassList: ComputedRef<b> = computed((): b => {
    return [
      'f-page-header-main',
      { 'f-page-header-main-center': prop.titleCenter }
    ] as const
  })

  const rightTitleClassList: ComputedRef<b> = computed((): b => {
    return [
      'f-page-header-main-title',
      { 'f-page-header-main-title-bold': prop.titleBold }
    ] as const
  })
</script>

<template>
  <header class="f-page-header">
    <!-- 左侧部分 -->
    <div class="f-page-header-left" @click="handleClick">
      <div v-if="icon || $slots.icon" class="f-page-header-icon">
        <slot name="icon">
          <f-icon v-if="icon" :icon="icon" :size="iconSize" />
        </slot>
      </div>
      <div class="f-page-header-text">{{ backText }}</div>
    </div>

    <!-- 右侧部分 -->
    <div :class="rightClassList">
      <!-- 标题 -->
      <div :style="{ color: titleColor }" :class="rightTitleClassList">
        <slot name="title">{{ title }}</slot>
      </div>

      <!-- 副标题 -->
      <div
        v-if="subtitle || $slots.subtitle"
        class="f-page-header-main-subtitle"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>
  </header>
</template>
