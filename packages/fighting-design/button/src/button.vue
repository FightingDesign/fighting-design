<script lang="ts" setup name="FButton">
  import { Props } from './props'
  import { BUTTON_GROUP_PROPS_KEY } from '../../button-group/src/props'
  import { computed, ref, inject, toRefs, reactive } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingAVue } from '../../_svg'
  import { useCalculiColor, useRipples, useRun } from '../../_hooks'
  import { sizeChange } from '../../_utils'
  import type { RipplesOptions } from '../../_hooks'
  import type { CSSProperties } from 'vue'
  import type { ClassList, FightingSize } from '../../_interface'

  const prop = defineProps(Props)

  /**
   * dom 元素
   */
  const FButton = ref<HTMLButtonElement>(null as unknown as HTMLButtonElement)
  /**
   * 获取父组件注入的依赖项
   */
  const parentInject = inject<FightingSize | null>(BUTTON_GROUP_PROPS_KEY, null)

  /**
   * 类名列表
   */
  const classList = computed((): ClassList => {
    const {
      type,
      round,
      simple,
      block,
      disabled,
      loading,
      bold,
      size,
      text,
      circle,
      color
    } = prop

    return [
      'f-button',
      {
        [`f-button__${parentInject || size}`]: parentInject || size,
        [`f-button__${type}`]: type && !color,
        'f-button__disabled': disabled || loading,
        'f-button__simple': simple && !color,
        'f-button__circle': circle,
        'f-button__round': round,
        'f-button__block': block,
        'f-button__bold': bold,
        'f-button__color': color,
        'f-button__text': text && !color
      }
    ] as const
  })

  /**
   * 按钮点击
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    const { disabled, loading, ripples } = toRefs(prop)

    // 禁用或 loading 则返回
    if (disabled.value || loading.value) {
      evt.preventDefault()
      return
    }

    // 如果有涟漪效果
    if (ripples.value) {
      const { ripplesColor, simple, text, type } = toRefs(prop)

      /**
       * 涟漪类需要的选项列表
       */
      const options: RipplesOptions = reactive({
        duration: 700,
        component: 'f-button',
        className: 'f-button__ripples',
        ripplesColor: ripplesColor.value,
        simple: simple.value,
        text: text.value,
        type: type.value
      } as const)

      const { runRipples } = useRipples(evt, FButton.value, options)

      runRipples()
    }

    useRun(prop.onClick, evt)
  }

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { fontSize, fontColor, shadow, color } = prop

    if (color) {
      const { getLightColor, getDarkColor } = useCalculiColor(color)

      return {
        '--f-button-font-color': fontColor,
        '--f-button-box-shadow': shadow,
        '--f-button-default-color': color,
        '--f-button-font-size': sizeChange(fontSize),
        '--f-button-hover-color': getLightColor(0.4),
        '--f-button-active-color': getDarkColor(0.2)
      } as CSSProperties
    }

    return {
      '--f-button-box-shadow': shadow,
      '--f-button-font-color': fontColor,
      '--f-button-font-size': sizeChange(fontSize)
    } as CSSProperties
  })
</script>

<template>
  <template v-if="href">
    <a
      ref="FButton"
      role="button"
      tabindex="0"
      :class="classList"
      :href="href"
      :target="target"
      :style="styleList"
      @click="handleClick"
    >
      <f-svg-icon
        v-if="loading || beforeIcon"
        :class="{ 'f-button__loading-animation': loading }"
        :icon="loading ? loadingIcon || FIconLoadingAVue : beforeIcon"
        :size="16"
      />

      <slot />

      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="16" />
    </a>
  </template>

  <template v-else>
    <button
      ref="FButton"
      tabindex="0"
      :class="classList"
      :disabled="disabled || loading"
      :autofocus="autofocus"
      :name="name"
      :type="nativeType"
      :style="styleList"
      @click="handleClick"
    >
      <f-svg-icon
        v-if="loading || beforeIcon"
        :class="[
          'f-button_before-icon',
          { 'f-button__loading-animation': loading }
        ]"
        :icon="loading ? loadingIcon || FIconLoadingAVue : beforeIcon"
        :size="16"
      />

      <slot />

      <f-svg-icon
        v-if="afterIcon"
        class="f-button_after-icon"
        :icon="afterIcon"
        :size="16"
      />
    </button>
  </template>
</template>
