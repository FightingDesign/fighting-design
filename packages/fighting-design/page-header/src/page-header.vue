<script lang="ts" setup name="FPageHeader">
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import { FIconArrowLeftVue } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import { Props } from './props'
  import type { ComputedRef } from 'vue'
  import type {
    HandleMouseEventInterface as a,
    ClassListInterface as b
  } from '../../_interface'
  import type { PageHeaderPropsType } from './props'

  const prop: PageHeaderPropsType = defineProps(Props)

  const handleClick: a = (evt: MouseEvent): void => {
    prop.back && prop.back(evt)
  }

  const rightClassList: ComputedRef<b> = computed((): b => {
    return [
      'f-page-header__main',
      { 'f-page-header__main-center': prop.titleCenter }
    ] as const
  })

  const rightTitleClassList: ComputedRef<b> = computed((): b => {
    return [
      'f-page-header__main-title',
      { 'f-page-header__main-title-bold': prop.titleBold }
    ] as const
  })
</script>

<template>
  <header class="f-page-header">
    <!-- 左侧部分 -->
    <div class="f-page-header__left" @click="handleClick">
      <f-svg-icon :size="sizeChange(iconSize)">
        <slot name="icon">
          <component :is="icon || FIconArrowLeftVue" />
        </slot>
      </f-svg-icon>
      <div class="f-page-header__text">{{ backText }}</div>
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
        class="f-page-header__main-subtitle"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>
  </header>
</template>
