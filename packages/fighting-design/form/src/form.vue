<script lang="ts" setup name="FForm">
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide } from 'vue'
  import { useRun } from '../../_hooks'
  import type { FormProps } from './interface'

  const prop = defineProps(Props)

  provide<FormProps>(FORM_PROVIDE_KEY, prop)

  const handelSubmit = (evt: SubmitEvent): void => {
    evt.preventDefault()
    useRun(prop.onSubmit, evt)
  }
</script>

<template>
  <form class="f-form" :onsubmit="handelSubmit">
    <slot />
  </form>
</template>
