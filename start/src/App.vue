<script lang="ts" setup>
  import { ref } from 'vue'
  import type { NumberAnimateInstance } from 'fighting-design'

  const animate = ref<NumberAnimateInstance>()

  const change = (): void => {
    animate.value?.run()
  }
</script>

<template>
  <f-button type="default" :on-click="change">重新播放</f-button>
  <f-number-animate ref="animate" :from="0" :to="2002" />
</template>
