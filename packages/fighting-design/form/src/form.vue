<script lang="ts" setup name="FForm">
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide } from 'vue'
  import type { FormProps } from './interface'

  const prop = defineProps(Props)
  // defineEmits(['validate'])

  /**
   * 验证表单
   */
  const run = (err): void => {
    console.log('验证表单', err)
  }

  provide<FormProps>(FORM_PROVIDE_KEY, prop)

  defineExpose({ run })
</script>

<template>
  <form class="f-form">
    <slot />
  </form>
</template>
