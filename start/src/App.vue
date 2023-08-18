<script lang="ts" setup>
  import { ref } from 'vue'

  const checked = ref(false)

  const handleChange = () => {}

  const handleClick = (): void => {
    console.log('xx')
  }
</script>

<template>
  <div>
    <f-tag :key="1" color="red" simple close type="primary" @click="handleClick">
      默认
    </f-tag>
    <f-tag :key="2" color="red" simple close type="danger"> 默认 </f-tag>

    <br />
    <br />
    <f-check-tag type="primary" checked style="margin-right: 10px">checked</f-check-tag>
    <f-check-tag type="primary" :checked="false">unchecked</f-check-tag>
    <br />
    <br />

    <f-check-tag type="danger" :checked="checked" @change="handleChange">
      toggle
    </f-check-tag>
  </div>
</template>
