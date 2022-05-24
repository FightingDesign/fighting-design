<template>
  <img ref="myImage" src="" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const myImage = ref<HTMLImageElement | null>(null)

function loadImg(node: HTMLImageElement): void {
  node.src = 'https://tianyuhao.cn/fighting/imgs/FightingDesign.svg'
}

onMounted(() => {
  loadImg(myImage.value!)
})
</script>

<style scoped></style>
