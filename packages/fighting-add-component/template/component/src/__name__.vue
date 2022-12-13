<script lang="ts" setup name="F<%= displayName %>">
  import { Props } from './props'

  const prop = defineProps(Props)
</script>

<template>
  <div class="f-<%= name %>">F<%= displayName %></div>
</template>
