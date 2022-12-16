<script lang="ts" setup name="FFormItem">
  import { Props } from './props'
  import { inject, computed } from 'vue'
  import { FORM_PROVIDE_KEY } from '../../form/src/props'
  import type { CSSProperties } from 'vue'
  import type { FormProps } from '../../form'

  const prop = defineProps(Props)

  const parentInject = inject<FormProps | null>(FORM_PROVIDE_KEY, null) as FormProps

  if (prop.name) {
    console.log(parentInject.rules[prop.name])
  }

  /**
   * 错误提示消息
   */
  const errMessage = computed((): string | null => {
    if (prop.name && parentInject && parentInject.rules) {
      if (parentInject.rules[prop.name]) {
        return parentInject.rules[prop.name][0].msg
      }
    }
    return null
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

    <div class="f-form-item__content">
      <slot />

      <!-- 错误信息 -->
      <template v-if="errMessage">
        <div class="f-form-item__error">{{ errMessage }}</div>
      </template>
    </div>
  </div>
</template>
