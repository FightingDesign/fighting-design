<script lang="ts" setup name="<%= displayName %>">
  import { Props, Emits } from './<%= name %>'

  defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div class="f-<%= name %>">
    <%= displayName %>
  </div>
</template>
