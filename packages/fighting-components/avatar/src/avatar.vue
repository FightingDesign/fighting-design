<template>
  <div :class="['f-avatar']"></div>
</template>

<script lang="ts" setup name="FAvatar">
  import { Props } from './avatar'

  const prop = defineProps(Props)
</script>
