<script lang="ts" setup name="F<%= displayName %>">
  import { Props, Emits } from './<%= name %>'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-<%= name %>">
    F<%= displayName %>
  </div>
</template>
