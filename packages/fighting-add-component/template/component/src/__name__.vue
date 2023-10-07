<script lang="ts" setup>
  import { Props } from './props'

  defineOptions({name: 'F<%= displayName %>'})

  const prop = defineProps(Props)
</script>

<template>
  <div class="f-<%= name %>">F<%= displayName %></div>
</template>
