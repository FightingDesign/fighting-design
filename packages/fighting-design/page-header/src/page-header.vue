<script lang="ts" setup>
  import { Props } from './props'
  import { computed } from 'vue'
  import { useRun, useGlobal } from '../../_hooks'
  import { FIconArrowLeft } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'

  defineOptions({ name: 'FPageHeader' })

  const prop = defineProps(Props)

  const { run } = useRun()
  const { getLang } = useGlobal()

  /** 返回文案 */
  const backContent = computed(() => getLang('pageHeader').value.backText)

  /**
   * 点击之后执行
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    run(prop.onBack, evt)
  }
</script>

<template>
  <header class="f-page-header">
    <!-- 左侧部分 -->
    <div class="f-page-header__left" @click="handleClick">
      <f-svg-icon :size="iconSize">
        <slot name="icon">
          <component :is="icon || FIconArrowLeft" />
        </slot>
      </f-svg-icon>

      <!-- 返回文字内容 -->
      <div class="f-page-header__text">{{ backContent }}</div>
    </div>

    <!-- 右侧部分 -->
    <div :class="['f-page-header__main', { 'f-page-header__main-center': titleCenter }]">
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
      <div v-if="subtitle || $slots.subtitle" class="f-page-header__main-subtitle">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>
  </header>
</template>
