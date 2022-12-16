<script lang="ts" setup name="FFormItem">
  import { Props } from './props'
  import { inject, computed, ref } from 'vue'
  import { FORM_PROVIDE_KEY } from '../../form/src/props'
  import type { CSSProperties } from 'vue'
  import type { FormProps } from '../../form'

  const prop = defineProps(Props)
  /**
   * 获取父组件注入的依赖项
   */
  const parentInject = inject<FormProps | null>(FORM_PROVIDE_KEY, null) as FormProps
  /**
   * 是否展示错误信息
   */
  const showErr = ref<boolean>(false)

  // console.log(parentInject.handelSubmit())

  /**
   * 验证每一项
   */
  const validate = (): void => {
    if (!prop.rules) return

    const value = parentInject.model[prop.name]

    console.log(prop.rules[0].required, value)

    // 如果是必填项 并且没有填内容
    if (prop.rules[0].required && !value) {
      showErr.value = true
    } else {
      showErr.value = false
    }
  }

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
  <button @click="validate">校验</button>
  <div class="f-form-item" :style="styleList">
    <label class="f-form-item__label">{{ label }}</label>

    <!-- 主要内容 -->
    <div class="f-form-item__content">
      <slot />

      <!-- 错误信息 -->
      <template v-if="errMessage">
        <transition name="f-form-item__err-transition">
          <div v-if="showErr" class="f-form-item__error">{{ errMessage }}</div>
        </transition>
      </template>
    </div>
  </div>
</template>
