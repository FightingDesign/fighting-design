<script lang="ts" setup>
  import { Props } from './props'
  import { ref, nextTick, onMounted } from 'vue'
  import { useInput, useList, useRun } from '../../_hooks'
  import { FIconCross } from '../../_svg'
  import { FSvgIcon } from '../../svg-icon'

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
    if (!textareaRef.value || !prop.autoHeight) {
      return
    }

    await nextTick()

    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }

  /**
   * 监听 input 事件
   *
   * @param { Object } evt 事件对象
   */
  const listerInput = (evt: Event): void => {
    handleInput(evt)

    changeHeight() // 如果需要自适应高度，则每次输入的时候重新设置高度
  }

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
      /**
       * 阻止默认换行的事件
       *
       * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
       */
      evt.preventDefault()

      run(prop.onEnter, modelValue.value, evt)
    }
  }

  // 初始化调用
  onMounted(changeHeight)
</script>

<template>
  <div :class="classList" :style="style">
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
      @input="listerInput"
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
