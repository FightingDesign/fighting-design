<template></template>

<script lang="ts" setup>
import { useData } from 'vitepress'
const { page } = useData()
console.log(page.value)
</script>

<style scoped></style>
