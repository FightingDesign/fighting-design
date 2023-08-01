<script lang="ts" setup>
  import Svg from '@fighting-design/fighting-icon'
  import { onCopy } from '../utils/copy'

  const handleClick = (icon: string): void => {
    onCopy(icon)
  }
</script>

<template>
  <div class="icon-box">
    <div v-for="(key, i) of Svg" :key="i" class="icon-list" @click="handleClick(i)">
      <f-svg-icon :size="30">
        <component :is="key" />
      </f-svg-icon>
      <span class="icon-name">{{ i }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .icon-box {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));

    .icon-list {
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      padding: 8px;
      box-sizing: border-box;
      transition: background 0.3s;

      &:hover {
        background: #eee;
      }
    }

    .icon-name {
      font-size: 12px;
      color: #333;
      margin-top: 10px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      width: 80px;
    }
  }
</style>
