<template>
  <f-avatar icon="f-icon-email" iconSize="30px" round :src="src" />
  <f-avatar icon="f-icon-email" iconSize="30px" round size="large" :src="src" />
  <f-avatar
    icon="f-icon-email"
    iconSize="30px"
    round
    size="middle"
    :src="src"
  />
  <f-avatar icon="f-icon-email" iconSize="30px" round size="small" :src="src" />
  <f-avatar
    icon="f-icon-email"
    iconColor="red"
    iconSize="30px"
    round
    size="small"
    :src="src"
  />
  <br />
  <f-avatar round :src="src" />
  <f-avatar round size="large" :src="src" />
  <f-avatar round size="middle" :src="src" />
  <f-avatar round size="small" :src="src" />
  <f-avatar round size="small" :src="src" />
</template>

<script lang="ts" setup>
  const src =
    'https://fastly.jsdelivr.net/gh/hututu-tech/IMG-gongfeng@main/2022/06/13/62a7273443773.png'
</script>

<style>
  .a {
    height: 2000px;
  }
</style>
