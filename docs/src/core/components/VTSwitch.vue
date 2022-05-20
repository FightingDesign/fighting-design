<template>
  <button class="vt-switch" type="button" role="switch">
    <span class="vt-switch-check">
      <span class="vt-switch-icon" v-if="$slots.default">
        <slot />
      </span>
    </span>
  </button>
</template>

<style scoped>
.vt-switch-icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
