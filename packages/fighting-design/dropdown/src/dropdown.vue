<script lang="ts" setup>
  import { Props } from './props'
  import { FTrigger } from '../../trigger'

  defineOptions({ name: 'FDropdown' })

  defineProps(Props)
</script>

<template>
  <div class="f-dropdown">
    <f-trigger
      :trigger="trigger"
      :disabled
      :spacing
      :arrow
      :width
      :enter-duration="enterDuration"
      :leave-duration="leaveDuration"
      :on-change="onChange"
      :on-open="onOpen"
      :on-close="onClose"
    >
      <slot />

      <template #content>
        <slot name="content" />
      </template>
    </f-trigger>
  </div>
</template>
