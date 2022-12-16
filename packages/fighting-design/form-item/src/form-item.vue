<script lang="ts" setup name="FFormItem">
  import { Props } from './props'
  import { inject, computed } from 'vue'
  import { FORM_PROVIDE_KEY } from '../../form/src/props'
  import type { CSSProperties } from 'vue'
  import type { FormProps } from '../../form'

  const prop = defineProps(Props)
  /**
   * 获取父组件注入的依赖项
   */
  const parentInject = inject<FormProps | null>(FORM_PROVIDE_KEY, null) as FormProps

  console.log(parentInject.model)

  /**
   * 验证每一项
   */
  const itemValidate = (): void => {
    console.log('验证每一项')
  }

  defineExpose({
    itemValidate
  })

  /**
   * 错误提示消息
   */
  const errMessage = computed((): string | null => {
    return prop.rules && prop.rules[0].msg
  })

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
        <div class="f-form-item__error">{{ errMessage }}</div>
      </template>
    </div>
  </div>
</template>
