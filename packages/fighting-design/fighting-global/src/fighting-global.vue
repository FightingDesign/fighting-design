<script lang="ts" setup name="FFightingGlobal">
  import { Props, FIGHTING_GLOBAL_PROPS_KEY } from './props'
  import { provide } from 'vue'
  import type { FightingGlobalProps } from './interface'

  const prop = defineProps(Props)

  // 注入依赖项
  provide<FightingGlobalProps>(FIGHTING_GLOBAL_PROPS_KEY, prop)
</script>

<template>
  <slot />
</template>
