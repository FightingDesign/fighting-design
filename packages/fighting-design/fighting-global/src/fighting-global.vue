<script lang="ts" setup name="FFightingGlobal">
  import { Props } from './props'
  import type { FightingGlobalProps } from './interface'

  const prop: FightingGlobalProps = defineProps(Props)
</script>

<template>
  <slot />
</template>
