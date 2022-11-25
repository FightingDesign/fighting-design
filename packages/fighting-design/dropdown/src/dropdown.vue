<script lang="ts" setup name="FDropdown">
  import { Props } from './props'
  import { FTrigger } from '../../trigger'
  import type { DropdownPropsType } from './interface'

  const prop: DropdownPropsType = defineProps(Props)

  console.log(prop)
</script>

<template>
  <div class="f-dropdown">
    <f-trigger :trigger="trigger" :disabled="disabled" :spacing="spacing">
      <slot />

      <template #content>
        <slot name="content" />
      </template>
    </f-trigger>
  </div>
</template>
