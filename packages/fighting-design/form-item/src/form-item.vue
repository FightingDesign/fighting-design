<script lang="ts" setup name="FFormItem">
  import { Props } from './props'
  import { inject, computed } from 'vue'
  import { FORM_PROVIDE_KEY } from '../../form/src/props'
  import type { CSSProperties } from 'vue'

  defineProps(Props)

  const parentInject = inject(FORM_PROVIDE_KEY, null)

  console.log(parentInject)

  const styleList = computed((): CSSProperties => {
    return {
      '--f-form-item-label-width': parentInject?.labelWidth
    } as CSSProperties
  })
</script>

<template>
  <div class="f-form-item" :style="styleList">
    <label class="f-form-item__label">{{ label }}</label>

    <div class="f-form-item__content">
      <slot />

      <div class="f-form-item__error"></div>
    </div>
  </div>
</template>
