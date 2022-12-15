<script lang="ts" setup name="FFormItem">
  import { Props } from './props'

  defineProps(Props)
</script>

<template>
  <div class="f-form-item">
    <label class="f-form-item__label">{{ label }}</label>

    <div class="f-form-item__content">
      <slot />

      <div class="f-form-item__error"></div>
    </div>
  </div>
</template>
