<script lang="ts" setup name="F<%= displayName %>">
  import { Props } from './props'
  import type { <%= displayName %>PropsType } from './interface'

  const prop: <%= displayName %>PropsType = defineProps(Props)
</script>

<template>
  <div class="f-<%= name %>">
    F<%= displayName %>
  </div>
</template>
