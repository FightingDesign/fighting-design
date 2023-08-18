<script lang="ts" setup>
  import { ref } from 'vue'

  const checked = ref(false)

  const onChange = (val: boolean): void => {
    checked.value = val
  }
</script>

<template>
  <div>
    <f-check-tag style="margin-right: 10px" checked> checked </f-check-tag>
    <f-check-tag :checked="false"> un checked </f-check-tag>

    <br />
    <br />

    <f-check-tag
      style="margin-right: 10px"
      type="warning"
      :checked="checked"
      :on-change="onChange"
    >
      toggle
    </f-check-tag>

    <f-check-tag
      style="margin-right: 10px"
      type="success"
      :checked="checked"
      :on-change="onChange"
    >
      toggle
    </f-check-tag>

    <f-check-tag
      style="margin-right: 10px"
      type="danger"
      :checked="checked"
      :on-change="onChange"
    >
      toggle
    </f-check-tag>
  </div>
</template>
