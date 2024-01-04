<script lang="ts" setup>
  import { Props } from './props'
  import { ref } from 'vue'
  import { useList, useRun } from '../../_hooks'
  import { FCloseBtn } from '../../close-btn'

  defineOptions({ name: 'FCard' })

  const prop = defineProps(Props)

  /** 控制卡片的展示状态 */
  const isShow = ref<boolean>(true)

  const { run } = useRun()
  const { classes, styles } = useList(prop, 'card')

  /** 类名列表 */
  const classList = classes(['round', 'shadow'], 'f-card')

  /** 样式列表 */
  const style = styles(['padding', 'borderColor', 'background', 'titleColor'])

  /** 点击关闭按钮关闭卡片 */
  const handelClose = (): void => {
    isShow.value = false
    run(prop.onClose, isShow.value)
  }
</script>

<template>
  <transition name="f-card">
    <div v-if="isShow" :class="classList" :style>
      <!-- 头部 -->
      <header v-if="$slots.header || title" role="heading" class="f-card__header">
        <!-- 标题 -->
        <span :class="['f-card__title', { 'f-card__title-bold': titleBold }]">
          <slot name="header">{{ title }}</slot>
        </span>

        <!-- 关闭按钮 -->
        <f-close-btn v-if="close" :on-click="handelClose" />
      </header>

      <!-- 主内容 -->
      <main role="none" class="f-card__body">
        <slot />
      </main>
    </div>
  </transition>
</template>
