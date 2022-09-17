<script lang="ts" setup name="FTree">
  import { Props } from './tree'

  defineProps(Props)
</script>

<template>
  <div class="f-tree">
    <div v-for="(item, index) in data" :key="index" class="f-tree-data">
      <div class="f-tree-label">{{ item.label }}</div>

      <div v-if="item.children" class="f-tree-children">
        <f-tree :data="item.children" />
      </div>
    </div>
  </div>
</template>
