<script lang="ts" setup>
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import type { FightingType } from 'fighting-design'

  const typeList: Ref<FightingType[]> = ref<FightingType[]>(['default', 'primary', 'success', 'danger', 'warning'])
</script>

<template>
  <f-ripple v-for="(item, i) in typeList" :key="i" :type="item">
    <div class="list">
      <f-text :type="item">{{ item }} 涟漪</f-text>
    </div>
  </f-ripple>
</template>

<style scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
