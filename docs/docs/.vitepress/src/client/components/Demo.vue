<template>
  <div ref="demoBlock" :class="['demo-block', blockClass, customClass ? customClass : '', { hover }]"
    @mouseenter="hover = true" @mouseleave="hover = false">
    <!-- 来源 展示的内容 -->
    <div class="source">
      <slot />
    </div>

    <!-- 展示的内容 -->
    <div ref="meta" class="meta">
      <!-- 描述插槽 -->
      <div v-if="$slots.description" ref="description" class="description">
        <slot name="description" />
      </div>

      <!-- 代码高亮插槽 -->
      <div ref="highlight" class="highlight">
        <slot name="highlight" />
      </div>
    </div>

    <!-- 点击的操作栏 -->
    <div ref="control" :class="['demo-block-control', { 'is-fixed': fixedControl, 'is-expanded': isExpanded }]"
      @click="onClickControl">
      <transition name="arrow-slide">
        <i :class="[
          'control-icon',
          { 'icon-caret-down': !isExpanded, 'icon-caret-up': isExpanded, hovering: hover }
        ]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hover" class="control-text">{{ controlText }}</span>
      </transition>
      <div class="control-button-wrap">
        <transition name="text-slide">
          <span v-show="isExpanded" class="control-button copy-button" @click.stop="onCopy">
            {{ locale && locale['copy-button-text'] }}
          </span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useData } from 'vitepress'
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from 'vue'
import { useClipboard, useThrottleFn } from '@vueuse/core'
import message from './message'

export default {
  name: 'Demo',
  props: {
    customClass: String,
    sourceCode: String
  },
  setup (props) {
    // ====================== Hooks ======================
    const { copy } = useClipboard()
    const data = useData()
    const route = useRoute()

    // ====================== Lifecycle ======================
    const hover = ref(false)
    const fixedControl = ref(false)
    const isExpanded = ref(false)

    const highlight = ref(null)
    const description = ref(null)
    const meta = ref(null)
    const control = ref(null)
    const demoBlock = ref(null)

    watch(isExpanded, val => {
      meta.value.style.height = val ? `${codeAreaHeight.value + 1}px` : '0'
      if (!val) {
        fixedControl.value = false
        control.value.style.left = '0'
        control.value.style.width = 'auto'
        removeScrollHandler()
        return
      }
      setTimeout(() => {
        window.addEventListener('scroll', scrollHandler)
        window.addEventListener('resize', scrollHandler)
        _scrollHandler()
      }, 300)
    })

    onMounted(() => {
      nextTick(() => {
        if (!description.value) {
          highlight.value.style.width = '100%'
        }
      })
    })

    onBeforeUnmount(() => {
      removeScrollHandler()
    })

    const _scrollHandler = () => {
      const { top, bottom, left } = meta.value.getBoundingClientRect()
      const innerHeight = window.innerHeight || document.body.clientHeight
      fixedControl.value = bottom > innerHeight && top + 44 <= innerHeight
      control.value.style.left = fixedControl.value ? `${left}px` : '0'
      const dv = fixedControl.value ? 1 : 2
      control.value.style.width = `${demoBlock.value.offsetWidth - dv}px`
    }
    const scrollHandler = useThrottleFn(_scrollHandler, 200)
    const removeScrollHandler = () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', scrollHandler)
    }

    watch(
      () => route.path,
      path => {
        pathArr.value = path.split('/')
      }
    )

    // ====================== Components ======================
    const pathArr = ref(route.path.split('/'))
    const component = computed(() => pathArr.value[pathArr.value.length - 1].split('.')[0])
    const blockClass = computed(() => {
      return `demo-${component.value}`
    })


    const goCodepen = () => { }

    // Expand
    const onClickControl = () => {
      isExpanded.value = !isExpanded.value
      hover.value = isExpanded.value
    }

    const locale = computed(() => {
      // console.log('data.localePath.value', data.localePath.value)
      return (
        data.theme.value.demoblock?.[data.localePath.value] ?? {
          'hide-text': '隐藏代码',
          'show-text': '显示代码',
          'copy-button-text': '复制代码片段',
          'copy-success-text': '复制成功'
        }
      )
    })

    const controlText = computed(() => {
      return isExpanded.value ? locale.value['hide-text'] : locale.value['show-text']
    })

    const codeAreaHeight = computed(() => {
      if (description.value) {
        return description.value.clientHeight + highlight.value.clientHeight + 20
      }
      return highlight.value.clientHeight
    })

    // Copy
    const onCopy = async () => {
      try {
        copy(props.sourceCode)
        message.info(locale.value['copy-success-text'])
      } catch (err) {
        message.error(locale.value['copy-success-text'])
      }
    }

    return {
      blockClass,
      hover,
      fixedControl,
      isExpanded,
      locale,
      controlText,
      onClickControl,
      highlight,
      description,
      meta,
      control,
      onCopy,
      goCodepen,
      demoBlock
    }
  }
}
</script>

<style scoped>
:global(.vp-doc .demo-block div[class*='language-']) {
  border-radius: 0 !important;
}

.demo-block {
  margin: 10px 0;
  border: solid 1px var(--demoblock-border);
  border-radius: 3px;
  transition: 0.2s;
}

.demo-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

html.dark .demo-block.hover {
  box-shadow: unset;
}

.source {
  box-sizing: border-box;
  padding: 24px;
  transition: 0.2s;
  overflow: auto;
}

.meta {
  border-top: solid 1px var(--demoblock-border);
  background-color: var(--vp-c-bg);
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}

.description {
  border: solid 1px var(--demoblock-border);
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 26px;
  color: var(--vp-c-text);
  word-break: break-word;
  margin: 10px 10px 6px 10px;
  background-color: var(--demoblock-description-bg);
}

.demo-block-control {
  border-top: solid 1px var(--demoblock-border);
  height: 44px;
  box-sizing: border-box;
  background-color: var(--demoblock-control-bg);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: var(--demoblock-control);
  cursor: pointer;
  position: relative;
}

.demo-block-control.is-expanded {
  margin-top: -2px;
}

.demo-block-control.is-fixed {
  position: sticky;
  bottom: 0;
  width: calc(100% - 20rem - 3rem - 12.5rem - 1px);
  border-right: solid 1px var(--demoblock-border);
  z-index: 2;
}

.demo-block-control .control-icon {
  display: inline-block;
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}

.demo-block-control .control-icon.hovering {
  transform: translateX(-40px);
}

.demo-block-control .control-text {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  font-weight: 500;
  transition: 0.3s;
  display: inline-block;
}

.demo-block-control:hover {
  color: var(--vp-c-brand);
  background-color: var(--demoblock-control-bg-hover);
}

.demo-block-control .text-slide-enter,
.demo-block-control .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.demo-block-control .control-button {
  padding: 13px 0;
  color: var(--vp-c-brand);
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
}

.demo-block-control .control-button-wrap {
  line-height: 43px;
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 5px;
  padding-right: 25px;
}
</style>
<style>
.highlight div[class*='language-'] {
  margin: 0 !important;
}
</style>
