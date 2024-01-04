<script lang="ts" setup>
  import { Props } from './props'
  import { ref, onMounted } from 'vue'
  import { FCloseBtn } from '../../close-btn'
  import { FSvgIcon } from '../../svg-icon'
  import { isNumber } from '../../_utils'
  import { useList, useRun, useGlobal, useAlertList } from '../../_hooks'

  defineOptions({ name: 'FAlert' })

  const prop = defineProps(Props)

  const { getProp } = useGlobal(prop)
  const { run } = useRun()
  const { styles, classes } = useList(getProp(['type']), 'alert')

  /** 展示状态 */
  const isShow = ref<boolean>(true)

  /** alertList 节点列表容器 dom */
  const alertListEl = ref<HTMLElement>()

  /** 类名列表 */
  const classList = classes(
    ['type', 'bold', 'simple', 'center', 'round', 'fixed'],
    'f-alert'
  )

  /** 样式列表 */
  const style = styles(['fontSize', 'color', 'background', 'titleSize', 'titleColor'])

  /**
   * 点击关闭按钮
   *
   * @param { Object } evt 事件对象
   */
  const handleClose = (evt: MouseEvent): void => {
    isShow.value = false
    run(prop.onClose, evt)
  }

  // 初始化完成判断是否符合调用滚动效果
  onMounted((): void => {
    if (prop.alertList && prop.alertList.length && alertListEl.value) {
      const startMove = useAlertList(alertListEl.value)

      // 开始滚动
      startMove(isNumber(prop.duration) ? prop.duration : 2000)
    }
  })
</script>

<template>
  <transition name="f-alert">
    <div v-if="isShow" role="alert" :class="classList" :style>
      <!-- 前缀 icon -->
      <f-svg-icon v-if="$slots.beforeIcon || beforeIcon" :icon="beforeIcon">
        <slot name="beforeIcon" />
      </f-svg-icon>

      <!-- 主要内容 -->
      <div class="f-alert__content">
        <!-- 标题 -->
        <div v-if="title" class="f-alert__title">
          <slot name="title">{{ title }}</slot>
        </div>

        <!-- 内容 -->
        <div v-if="$slots.default" class="f-alert__sub-title">
          <slot />
        </div>

        <!-- 滚动列表 -->
        <div v-if="alertList && alertList.length" ref="alertListEl" class="f-alert__list">
          <div v-for="(item, index) in alertList" :key="index" class="f-alert__list-item">
            {{ item }}
          </div>
        </div>
      </div>

      <!-- 关闭按钮 -->
      <f-close-btn
        v-if="close"
        round
        :color="type === 'default' ? '#333' : '#fff'"
        :size="16"
        :icon="closeIcon"
        :on-click="handleClose"
      >
        <slot name="closeIcon" />
      </f-close-btn>
    </div>
  </transition>
</template>
