<template>
  <div class="f-image">
    <img class="f-image-img" :draggable="draggable" :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts" setup>
import { Props } from './image'

const prop = defineProps(Props)
</script>

<script lang="ts">
export default {
  name: 'FImage'
}
</script>
