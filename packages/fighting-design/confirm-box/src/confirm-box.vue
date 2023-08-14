<script lang="ts" setup>
  import { Props } from './props'

  defineOptions({ name: 'FConfirmBox' })

  const prop = defineProps(Props)
</script>

<template>
  <div class="f-confirm-box">
    <div></div>
    <div class="f-confirm-box__body">
      <div>{{ title }}</div>
      <div>{{ content }}</div>
    </div>
  </div>
</template>
