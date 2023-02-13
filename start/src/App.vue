<script lang="ts" setup>
  import { ref } from 'vue'

  const value1 = ref('123')

  // let str = '12354'
  // let reg = RegExp(/[4|5]/)
  // console.log(reg.test(str))

  const formatRule = RegExp(/([Y]{4})|([M]{2})|([D]{2})/)

  console.log(formatRule.test('MM'))
</script>

<template>
  <h1>{{ value1 || 123 }}</h1>
  <f-date-picker v-model:date="value1" clear format="YY121YY" add-zero />
</template>
