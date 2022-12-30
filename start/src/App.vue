<script lang="ts" setup>
  const alertList = ['把大象放进冰箱需要几步？', '第一步：打开冰箱门', '第二步：把大象装进去', '第三步：关好冰箱门']
</script>

<template>
  <f-alert :alert-list="alertList" title="你知道吗？" type="primary" :duration="4000" />
</template>

<style lang="scss" scoped></style>
