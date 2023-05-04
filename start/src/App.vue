<script lang="ts" setup>
  import { FMessage } from 'fighting-design'

  const timeStamp = 10 * 1000

  const handelFinish = (): void => {
    FMessage.primary('倒计时结束')
  }
</script>

<template>
  <f-count-down :time="timeStamp" format="DD : HH : mm : ss " :on-finish="handelFinish" />
</template>
