<script lang="ts" setup name="FButton">
  import { Props } from './props'
  import { ref, toRefs, reactive, computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconLoadingAVue } from '../../_svg'
  import { useRipples, useRun, useGlobal, useButton } from '../../_hooks'
  import type { RipplesOptions } from '../../_hooks'
  import type { FightingIcon } from '../../_interface'

  const prop = defineProps(Props)

  const { getType } = useGlobal(prop)
  const { run } = useRun()
  const { classList, styleList } = useButton(prop)

  /** 元素节点 */
  const FButtonEl = ref<HTMLButtonElement>()

  /**
   * 按钮点击
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    const { disabled, loading, ripples } = toRefs(prop)

    /** 禁用或 loading 则返回 */
    if (disabled.value || loading.value) {
      evt.preventDefault()
      return
    }

    /** 如果有涟漪效果 */
    if (ripples.value) {
      const { ripplesColor, simple, text } = toRefs(prop)

      /** 涟漪类需要的选项列表 */
      const options: RipplesOptions = reactive({
        duration: 700,
        component: 'f-button',
        className: 'f-button__ripples',
        ripplesColor: ripplesColor.value,
        simple: simple.value,
        text: text.value,
        type: getType()
      })

      const { runRipples } = useRipples(evt, FButtonEl.value as HTMLButtonElement, options)

      runRipples()
    }

    run(prop.onClick, evt)
  }

  /** 前缀 icon */
  const beforeIconNode = computed((): FightingIcon => {
    return prop.loading ? prop.loadingIcon || FIconLoadingAVue : prop.beforeIcon
  })
</script>

<template>
  <template v-if="href">
    <a
      ref="FButtonEl"
      role="link"
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
        :icon="beforeIconNode"
        :size="16"
      />

      <slot />

      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="16" />
    </a>
  </template>

  <template v-else>
    <button
      ref="FButtonEl"
      role="button"
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
        :class="['f-button_before-icon', { 'f-button__loading-animation': loading }]"
        :icon="loading ? loadingIcon || FIconLoadingAVue : beforeIcon"
        :size="16"
      />

      <slot />

      <f-svg-icon v-if="afterIcon" class="f-button_after-icon" :icon="afterIcon" :size="16" />
    </button>
  </template>
</template>
