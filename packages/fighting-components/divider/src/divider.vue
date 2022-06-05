<template>
  <div :class="['f-divider', `f-divider-${direction}`]">
    <span v-if="direction === 'horizontal'" :class="['f-divider-text', `f-divider-text-${textAlign}`]">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup name="FDivider">
import { Props } from "./divider";

defineProps(Props);
</script>
