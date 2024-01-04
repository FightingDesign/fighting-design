<script lang="ts" setup>
  import { Props } from './props'
  import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
  import { useInput, useList, useRun } from '../../_hooks'
  import { FIconCross } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'
  import { debounce } from '../../_utils'
  import type { WatchStopHandle } from 'vue'

  defineOptions({ name: 'FTextarea' })

  const prop = defineProps(Props)
  const modelValue = defineModel<string | number>({
    default: '',
    type: [Number, String]
  })

  const { handleInput, handleClear, handleChange } = useInput(prop, modelValue)
  const { classes, styles } = useList(prop, 'textarea')
  const { run } = useRun()

  /** 元素节点 */
  const textareaRef = ref<HTMLTextAreaElement | undefined>()

  /** 类名列表 */
  const classList = classes(['disabled', 'autoHeight'], 'f-textarea')

  /** 样式列表 */
  const style = styles(['resize', 'fontSize'])

  /** 改变高度 */
  const changeHeight = async (): Promise<void> => {
    await nextTick()
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
      textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
    }
  }

  /**
   * 监听 input 事件
   *
   * @param { Object } evt 事件对象
   */
  const _handleInput = (evt: Event): void => {
    handleInput(evt)

    // 如果需要自适应高度，则每次输入的时候重新设置高度
    if (prop.autoHeight) {
      changeHeight()
    }
  }

  /** 是否为自动高度 */
  const isAutoHeight = (): void => {
    /**
     * 监视器实例
     *
     * 监视绑定值 行数 是否自动高度的数据变化，来设置文本框的高度
     */
    const unwatch: WatchStopHandle = watch(
      (): (string | number | boolean)[] => [prop.modelValue, prop.rows, prop.autoHeight],
      (): void => {
        changeHeight()

        // 如果中途自动高度为假了，则取消监视器
        if (!prop.autoHeight) {
          unwatch()
          // 并且设置自动高度
          if (textareaRef.value) {
            textareaRef.value.style.height = 'auto'
          }
        }
      },
      {
        immediate: true
      }
    )
  }

  /** 设置宽度方法 */
  const _changeHeight = debounce(changeHeight, 500)

  // 初始化调用
  onMounted((): void => {
    if (prop.autoHeight) {
      isAutoHeight()
      window.addEventListener('resize', _changeHeight)
    }
  })

  // 销毁前移除事件
  onBeforeUnmount((): void => {
    window.removeEventListener('resize', _changeHeight)
  })

  /**
   * 监听回车事件
   *
   * 如果按下 Enter，阻止默认换行事件
   *
   * 按下 Ctrl + Enter 才触发换行
   *
   * @param { Object } evt 事件对象
   */
  const handleEnterKey = (evt: KeyboardEvent): void => {
    // 如果按下 Enter 和 Ctrl 触发换行
    if (evt.key === 'Enter' && evt.ctrlKey) {
      modelValue.value += '\n'

      // 如果是自适应高度，则重新设置高度
      if (prop.autoHeight) {
        changeHeight()
      }

      // 返回阻止继续执行
      return
    }

    // 只有在按下 Enter 才触发回调方法
    if (evt.key === 'Enter') {
      /**
       * 阻止默认换行的事件
       *
       * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
       */
      evt.preventDefault()

      run(prop.onEnter, modelValue.value, evt)
    }
  }
</script>

<template>
  <div :class="classList" :style>
    <textarea
      ref="textareaRef"
      v-model="modelValue"
      class="f-textarea__textarea"
      :rows
      :disabled
      :readonly
      :autofocus
      :placeholder
      :name
      @input="_handleInput"
      @change="handleChange"
      @blur="onBlur"
      @focus="onFocus"
      @keydown="handleEnterKey"
    />

    <!-- 清空按钮 -->
    <f-svg-icon
      v-if="clear"
      class="f-textarea__clear-btn"
      :icon="FIconCross"
      :size="14"
      :on-click="handleClear"
    />
  </div>
</template>
