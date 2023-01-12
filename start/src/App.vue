<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref(true)

  const typeList = ref(['default', 'primary', 'success', 'danger', 'warning'])
</script>

<template>
  <f-switch v-model="value1" />

  <f-fighting-global :type="value1 ? 'primary' : 'default'">
    <f-ripple v-for="(item, i) in typeList" :key="i">
      <div class="list">
        <f-text>{{ item }} 涟漪</f-text>
      </div>
    </f-ripple>
  </f-fighting-global>
</template>

<style lang="scss" scoped>
  .list {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
