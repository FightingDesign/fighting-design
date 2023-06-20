<script lang="ts" setup>
  import { reactive } from 'vue'

  const form = reactive({
    public_state: ['1']
  })

  const a = {
    type: Boolean,
    required: !0,
    default: null,
    type: [String, Number, Boolean]
  }

  console.log(a)
</script>

<template>
  {{ form.public_state }}
  <f-radio-group v-model="form.public_state" background size="large">
    <f-radio label="1">公开的</f-radio>
    <f-radio label="2">私密的</f-radio>
  </f-radio-group>
</template>
