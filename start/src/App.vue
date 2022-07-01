<template>
  <f-space>
    <div>spacing 间距大小</div>
    <select v-model="spacing" class="space-md-select">
      <option value="small">small</option>
      <option value="middle">middle</option>
      <option value="large">large</option>
      <option :value="20">20</option>
      <option :value="[20, 40]">[20,40]</option>
      <option :value="['small', 'middle']">['small','middle']</option>
    </select>
  </f-space>
  <br />
  <f-space :spacing="spacing" wrap>
    <f-button type="primary" v-for="item in 12" :key="item">按钮</f-button>
  </f-space>
</template>

<script setup>
  import { ref } from 'vue'
  let spacing = ref('small')
</script>
