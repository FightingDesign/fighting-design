<script lang="ts" setup>
  const onClick = (): void => {
    console.log('按钮点击了')
  }
</script>

<template>
  <button class="w-button" @click="onClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .w-button {
    width: 100px;
    height: 30px;
    background: blue;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    transition: 0.3s;
    cursor: pointer;
    opacity: 1;

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 1;
    }
  }
</style>
