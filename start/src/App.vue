<template>
  <f-avatar background="red" round fit="fill" :src="src" />
  <f-avatar background="red" round fit="contain" :src="src" />
  <f-avatar background="red" round fit="cover" :src="src" />
  <f-avatar background="red" round fit="none" :src="src" />
  <f-avatar background="red" round fit="scale-down" :src="src" />
</template>

<script lang="ts" setup>
  const src =
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png'
</script>
