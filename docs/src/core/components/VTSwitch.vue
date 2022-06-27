<template>
  <button class="vt-switch" type="button" role="switch">
    <span class="vt-switch-check">
      <span v-if="$slots.default" class="vt-switch-icon">
        <slot />
      </span>
    </span>
  </button>
</template>
