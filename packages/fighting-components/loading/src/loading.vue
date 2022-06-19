<template>
  <div class="f-loading__mask" v-if="show" :style="{ background: loadingBgColor, opacity: loadingBgOpacity }">
    <i :class="loadingIcon"></i>
    <p :style="{ color: loadingTextColor, fontSize: loadingTextSize }">{{ loadingText }}</p>
  </div>
</template>

<script setup lang="ts">
import { Props } from "./props"
const props = defineProps(Props)
</script>

<style lang="scss" scoped>
.f-loading {
  &__mask {
    z-index: 1011;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
