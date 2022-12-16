<script lang="ts" setup name="FForm">
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide, reactive, toRefs } from 'vue'
  import { useRun } from '../../_hooks'
  import type { FormProps } from './interface'

  const prop = defineProps(Props)

  /**
   * 提交表单
   *
   * @see SubmitEvent https://developer.mozilla.org/zh-CN/docs/Web/API/SubmitEvent/submitter
   * @param evt 事件对象
   */
  const handelSubmit = (evt: SubmitEvent): void => {
    evt.preventDefault()
    useRun(prop.onSubmit, evt)
  }

  provide<FormProps>(
    FORM_PROVIDE_KEY,
    reactive({
      ...toRefs(prop),
      handelSubmit
    })
  )
</script>

<template>
  <form class="f-form" :onsubmit="handelSubmit">
    <slot />
  </form>
</template>
