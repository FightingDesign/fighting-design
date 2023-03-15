<script lang="ts" setup name="FFormItem">
  import { Props } from './props'
  import { inject, computed } from 'vue'
  import { isString } from '../../_utils'
  import { FORM_PROVIDE_KEY } from '../../form/src/props'
  import type { CSSProperties } from 'vue'
  import type { FormInject } from '../../form'

  const prop = defineProps(Props)

  /** 获取父组件注入的依赖项 */
  const parentInject: FormInject | null = inject(FORM_PROVIDE_KEY, null)

  /**
   * 错误提示消息
   *
   * 判断当前表单是否不通过
   *
   * 如果注入的对象值都是字符串则代表是错误信息
   */
  const errMessage = computed((): string | boolean => {
    /** 获取都指定项的结构键值 */
    const resMsg: string | boolean | null =
      parentInject && parentInject.childrenCheckResult[prop.name]

    return isString(resMsg) ? resMsg : false
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    return {
      '--form-item-label-width': parentInject && parentInject.labelWidth
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
      <transition name="f-form-item__err-transition">
        <div v-if="errMessage" class="f-form-item__error">{{ errMessage }}</div>
      </transition>
    </div>
  </div>
</template>
