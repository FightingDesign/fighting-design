<template>
  <div class="f-<%= name %>">
    <%= displayName %>
  </div>
</template>

<script lang="ts" setup name="<%= displayName %>">
  import { Props, Emits } from './<%= name %>'

  defineProps(Props)
  defineEmits(Emits)
</script>
