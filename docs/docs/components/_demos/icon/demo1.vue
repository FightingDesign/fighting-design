<script lang="ts" setup>
  import { iconLists } from '../_utils/icon-list'
  import { onCopy } from '../_utils/copy.ts'

  const handleClick = (icon: string): void => {
    onCopy(icon)
  }
</script>

<template>
  <div class="icon-list">
    <div
      v-for="(icon, index) in iconLists"
      :key="index"
      class="icon-box"
      @click="handleClick(icon)"
    >
      <f-icon size="40px" :icon="icon" />
      <span>{{ icon }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .icon-list {
    display: flex;
    flex-wrap: wrap;

    .icon-box {
      cursor: pointer;
      width: 120px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      box-sizing: border-box;

      span {
        word-break: break-all;
        text-align: center;
        margin-top: 10px;
        display: inline-block;
        font-size: 12px;
        height: 36px;
        color: rgb(153, 150, 150);
      }

      &:hover {
        transition: 0.3s;
        background: #f4f5f5;

        span,
        .f-icon {
          color: #2d5af1;
        }
      }
    }
  }
</style>
