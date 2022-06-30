<template>
  <div ref="root" class="f-affix" :style="rootStyle">
    <div :class="{ 'f-affix--fixed': fixed }" :style="affixStyle">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts" name="FAffix">
  import { computed, onMounted, ref, shallowRef, watch, watchEffect } from 'vue'
  import {
    useElementBounding,
    useEventListener,
    useWindowSize
  } from '@vueuse/core'
  import { getScrollContainer } from '@fighting-design/fighting-utils'
  import { affixEmits, affixProps } from './affix'
  import type { CSSProperties } from 'vue'
  const props = defineProps(affixProps)
  const emit = defineEmits(affixEmits)
  const target = shallowRef<HTMLElement>()
  const root = shallowRef<HTMLDivElement>()
  const scrollContainer = shallowRef<HTMLElement | Window>()
  const { height: windowHeight } = useWindowSize()
  const {
    height: rootHeight,
    width: rootWidth,
    top: rootTop,
    bottom: rootBottom,
    update: updateRoot
  } = useElementBounding(root)
  const targetRect = useElementBounding(target)
  const fixed = ref(false)
  const scrollTop = ref(0)
  const transform = ref(0)
  const rootStyle = computed<CSSProperties>(() => {
    return {
      height: fixed.value ? `${rootHeight.value}px` : '',
      width: fixed.value ? `${rootWidth.value}px` : ''
    }
  })
  const affixStyle = computed<CSSProperties>(() => {
    if (!fixed.value) return {}
    const offset = props.offset ? `${props.offset}px` : 0
    return {
      height: `${rootHeight.value}px`,
      width: `${rootWidth.value}px`,
      top: props.position === 'top' ? offset : '',
      bottom: props.position === 'bottom' ? offset : '',
      transform: transform.value ? `translateY(${transform.value}px)` : '',
      zIndex: props.zIndex
    }
  })
  const update = () => {
    if (!scrollContainer.value) return
    scrollTop.value =
      scrollContainer.value instanceof Window
        ? document.documentElement.scrollTop
        : scrollContainer.value.scrollTop || 0
    if (props.position === 'top') {
      if (props.target) {
        const difference =
          targetRect.bottom.value - props.offset - rootHeight.value
        fixed.value =
          props.offset > rootTop.value && targetRect.bottom.value > 0
        transform.value = difference < 0 ? difference : 0
      } else {
        fixed.value = props.offset > rootTop.value
      }
    } else if (props.target) {
      const difference =
        windowHeight.value -
        targetRect.top.value -
        props.offset -
        rootHeight.value
      fixed.value =
        windowHeight.value - props.offset < rootBottom.value &&
        windowHeight.value > targetRect.top.value
      transform.value = difference < 0 ? -difference : 0
    } else {
      fixed.value = windowHeight.value - props.offset < rootBottom.value
    }
  }
  const handleScroll = () => {
    emit('scroll', {
      scrollTop: scrollTop.value,
      fixed: fixed.value
    })
  }
  watch(fixed, (val) => emit('change', val))
  onMounted(() => {
    if (props.target) {
      target.value =
        document.querySelector<HTMLElement>(props.target) ?? undefined
      if (!target.value)
        throw new Error(`Target is not existed: ${props.target}`)
    } else {
      target.value = document.documentElement
    }
    scrollContainer.value = getScrollContainer(root.value!, true)
    updateRoot()
  })
  useEventListener(scrollContainer, 'scroll', handleScroll)
  watchEffect(update)
  defineExpose({
    update
  })
</script>
