<script lang="ts" setup>
  import { Props } from './props'
  import { computed } from 'vue'
  import { useCollapseAnimation } from '../../_hooks'

  /**
   * 旧版本
   *
   * @see collapse-animation https://github.com/FightingDesign/fighting-design/tree/474f6f19c2b034d5f2839c110e02b8987af24a9a/packages/fighting-design/collapse-animation
   */

  defineOptions({ name: 'FCollapseAnimation' })

  const prop = defineProps(Props)

  const { onBeforeEnter, onEnter, onAfterEnter, onBeforeLeave, onLeave, onAfterLeave } =
    useCollapseAnimation(prop)

  /** 获取当前的展示状态 */
  const open: boolean = prop.opened

  /**
   * 初始是否展开
   *
   * 如果被禁用，则使用默认展示状态
   *
   * 否则使用响应式展示状态
   */
  const isOpened = computed((): boolean => {
    return prop.disabled ? open : prop.opened
  })
</script>

<template>
  <transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <div v-show="isOpened" class="f-collapse-animation">
      <slot />
    </div>
  </transition>
</template>
