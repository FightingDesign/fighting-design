<template>
  <div class="f-button-group">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { Props } from './button-group'

const prop = defineProps(Props)

provide('button-group-size', prop.size)
</script>

<script lang="ts">
export default {
  name: 'FButtonGroup'
}
</script>
