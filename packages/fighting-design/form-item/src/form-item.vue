<script lang="ts" setup name="FFormItem">
  import { Props } from './props'
  import { inject, computed } from 'vue'
  import { isArray } from '../../_utils'
  import { FORM_PROVIDE_KEY } from '../../form/src/props'
  import type { CSSProperties } from 'vue'
  import type { FormInject } from '../../form'

  const prop = defineProps(Props)

  /**
   * 获取父组件注入的依赖项
   */
  const parentInject = inject<FormInject | null>(FORM_PROVIDE_KEY, null) as FormInject

  /**
   * 判断当前表单是否不通过
   */
  const showErrorMessage = computed((): boolean => {
    return parentInject.childrenErr[prop.name]
  })

  /**
   * 错误提示消息
   */
  const errMessage = computed((): string => {
    if (isArray(prop.rules)) {
      return prop.rules[0].message || ''
    }
    return ''
  })

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    return {
      '--f-form-item-label-width': parentInject && parentInject.labelWidth
    } as CSSProperties
  })
</script>

<template>
  <div class="f-form-item" :style="styleList">
    <label class="f-form-item__label">{{ label }}</label>

    <!-- 主要内容 -->
    <div class="f-form-item__content">
      <slot />

      <!-- 错误信息 -->
      <template v-if="errMessage">
        <transition name="f-form-item__err-transition">
          <div v-if="showErrorMessage" class="f-form-item__error">{{ errMessage }}</div>
        </transition>
      </template>
    </div>
  </div>
</template>
