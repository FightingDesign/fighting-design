<script lang="ts" setup name="FPageHeader">
  import { Props } from './props'
  import { sizeChange, runCallback } from '../../_utils'
  import { FIconArrowLeftVue } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import type { HandleMouseEventInterface } from '../../_interface'
  import type { PageHeaderPropsType } from './props'

  const prop: PageHeaderPropsType = defineProps(Props)

  /**
   * 点击之后执行
   *
   * @param evt 事件对象
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    runCallback(prop.onBack, evt)
  }
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
    <div
      :class="[
        'f-page-header__main',
        { 'f-page-header__main-center': titleCenter }
      ]"
    >
      <!-- 标题 -->
      <div
        :style="{ color: titleColor }"
        :class="[
          'f-page-header__main-title',
          { 'f-page-header__main-title-bold': titleBold }
        ]"
      >
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
