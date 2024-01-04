<script lang="ts" setup>
  import { Props } from './props'
  import { ref, computed, unref } from 'vue'
  import { useRun, useGlobal, useList } from '../../_hooks'
  import { FCollapseAnimation } from '../../collapse-animation'

  defineOptions({ name: 'FStickyCard' })

  const prop = defineProps(Props)

  const { getLang } = useGlobal()
  const { run } = useRun()
  const { styles } = useList(prop, 'sticky-card')

  /** 是否打开 */
  const isOpened = ref<boolean>(prop.open)

  /** 点击触发 */
  const handleClick = (): void => {
    isOpened.value = !isOpened.value
    run(isOpened.value ? prop.onClose : prop.onOpen, isOpened.value)
  }

  /** 展示的文字内容 */
  const optionText = computed((): string => {
    const { openText, closeText } = prop

    /** 获取都当前语言 */
    const lang = getLang('stickyCard').value

    return unref(isOpened) ? openText || lang.openText : closeText || lang.closeText
  })

  /** 样式列表 */
  const style = styles(['borderColor'])
</script>

<template>
  <div class="f-sticky-card" :style>
    <!-- 展示的内容 -->
    <div v-if="$slots.source" class="f-sticky-card__source">
      <slot name="source" />
    </div>

    <!-- 折叠的内容 -->
    <div class="f-sticky-card__box">
      <f-collapse-animation :opened="isOpened">
        <slot />
      </f-collapse-animation>
    </div>

    <!-- 点击展开 / 折叠的区域 -->
    <div
      :class="['f-sticky-card__option', { 'f-sticky-card__option-open': isOpened }]"
      @click="handleClick"
    >
      <span class="f-sticky-card__option-text">
        {{ optionText }}
      </span>
    </div>
  </div>
</template>
