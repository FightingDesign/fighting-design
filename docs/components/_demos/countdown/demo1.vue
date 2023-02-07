<script lang="ts" setup>
  import { ref } from 'vue'
  const show = ref(false)
  const dateTime = ref(new Date().getTime() + 60 * 1000 * 2)
  const endCallback = (): void => {
    show.value = true
  }
</script>

<template>
  <view>
    <f-countdown :target="dateTime" :end-callback="endCallback"></f-countdown>
    <view v-if="show">定时结束</view>
  </view>
</template>
