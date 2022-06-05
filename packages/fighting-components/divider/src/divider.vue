<template>
  <div
    :class="['f-divider', `f-divider-${direction}`]"
  >
    <span
      v-if="renderSlot(direction)"
      :class="['f-divider-text', `f-divider-text-${textAlign}`]"
    >
      <slot/>
    </span>
  </div>
</template>

<script lang="ts" setup name="FDivider">
import { useSlots } from "vue";
import { Props } from "./divider";

defineProps(Props);

const renderSlot = (direction: string) => {
  return direction === "horizontal" && Boolean(useSlots().default);
};

</script>
