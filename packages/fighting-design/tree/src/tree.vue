<script lang="ts" setup>
  import { Props } from './props'
  import { FTreeItem } from '../components'

  defineOptions({ name: 'FTree' })

  defineProps(Props)
</script>

<template>
  <div v-if="data && data.length" role="tree" class="f-tree">
    <f-tree-item v-for="(item, index) in data" :key="index" :model="item">
      <template #options>
        <slot name="options" />
      </template>
    </f-tree-item>
  </div>
</template>
