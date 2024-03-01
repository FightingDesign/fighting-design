<script lang="ts" setup>
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide, reactive, toRefs } from 'vue'
  import { useRun, useFormCheck } from '../../_hooks'
  import type { FormInject } from './interface'

  defineOptions({ name: 'FForm' })

  const prop = defineProps(Props)

  const { run } = useRun()
  const { childrenCheckResult, validate } = useFormCheck(prop)

  /**
   * 提交表单
   *
   * @see SubmitEvent https://developer.mozilla.org/zh-CN/docs/Web/API/SubmitEvent/submitter
   * @param { Object } evt 事件对象
   */
  const submit = (evt: SubmitEvent): void => {
    /**
     * 组织表单默认行为
     *
     * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
     */
    evt.preventDefault()

    /** 获取到是否校验通过 */
    const ok: boolean = prop.model ? validate() : true

    run(prop.onSubmit, ok, prop.model, childrenCheckResult, evt)
  }

  // 注入依赖项
  provide<FormInject>(
    FORM_PROVIDE_KEY,
    reactive({
      ...toRefs(prop),
      childrenCheckResult
    })
  )

  // 向外界导出一些方法
  defineExpose({ submit, validate })
</script>

<template>
  <form v-if="$slots.default" role="form" class="f-form" :onsubmit="submit">
    <slot />
  </form>
</template>
