<template>
  <button :class="['f-button', { 'f-button-round': round }]"></button>
</template>

<script lang="ts" setup></script>

<style scoped>
  .f-button {
    /*  */
  }
  .f-button-round {
    border-radius: 4px;
  }
</style>
