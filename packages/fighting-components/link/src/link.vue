<template>
  <a :class="['f-link']" :href="href" @click="onClick"></a>
</template>

<script lang="ts" setup>
const onClick = (e: Event) => {}
</script>

<script lang="ts">
export default {
  name: 'FLink'
}
</script>
