<script lang="ts" setup name="F<%= displayName %>">
  import { Props, Emits } from './props'
  import type { <%= displayName %>PropsType } from './props'

  const prop: <%= displayName %>PropsType = defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-<%= name %>">
    F<%= displayName %>
  </div>
</template>
