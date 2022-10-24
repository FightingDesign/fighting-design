<script lang="ts" setup>
  import {
    FIconSun,
    FIconMoon,
    FIconFaceSmile,
    FIconFaceFrown,
    FIconEye,
    FIconEyeSlash
  } from '@fighting-design/fighting-icon'
  import { ref } from 'vue'

  const value5 = ref(true)
  const value6 = ref(true)
  const value7 = ref(true)
</script>

<template>
  <f-swap
    v-model="value5"
    type="default"
    :icon-on="FIconEye"
    :icon-off="FIconEyeSlash"
  />
  <f-swap
    v-model="value6"
    type="sound"
    :icon-on="FIconSun"
    :icon-off="FIconMoon"
  />
  <f-swap
    v-model="value7"
    type="swap"
    :icon-on="FIconFaceSmile"
    :icon-off="FIconFaceFrown"
  />
</template>
