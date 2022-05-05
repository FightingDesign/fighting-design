<script lang="ts" setup>
defineProps<{
  show: boolean
}>()
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="vt-backdrop" />
  </transition>
</template>
