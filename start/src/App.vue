<template>
  <f-avatar fit="fill" :src="src"></f-avatar>
  <f-avatar fit="contain" :src="src"></f-avatar>
  <f-avatar fit="cover" :src="src"></f-avatar>
  <f-avatar fit="none" :src="src"></f-avatar>
  <f-avatar fit="scale-down" :src="src"></f-avatar>
</template>

<script lang="ts" setup>
  const src =
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png'
</script>

<style scoped></style>
