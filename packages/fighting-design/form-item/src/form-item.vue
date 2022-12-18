<script lang="ts" setup name="FFormItem">
  import { Props } from './props'
  import { inject, computed } from 'vue'
  import { isString } from '../../_utils'
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
   *
   * 如果注入的对象值都是字符串则代表是错误信息
   */
  const showErrorMessage = computed((): boolean => {
    return isString(parentInject.childrenCheckResult[prop.name])
  })

  /**
   * 错误提示消息
   */
  const errMessage = computed((): string => {
    /**
     * 获取都指定项的结构键值
     */
    const resMsg: string | boolean = parentInject.childrenCheckResult[prop.name]

    return isString(resMsg) ? resMsg : ''
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
