<script lang="ts" setup>
  import { useColor } from '../../packages/fighting-design/_hooks'

  const { getDark } = useColor('#333333')

  console.log(getDark())
</script>

<template>
  <!-- <f-calendar v-model:date="date" lunar :on-change-month="func" :on-change-date="func" /> -->
</template>
