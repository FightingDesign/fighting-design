<script lang="ts" setup>
  import { FLink } from '@/link'
  import { FAvatar } from '@/avatar'
  import '~/link.scss'
  import '~/avatar.scss'
</script>

<template>
  <header class="header">
    <f-link href="https://github.com/FightingDesign/fighting-design" target="_blank">
      <div class="logo">
        <f-avatar
          round
          size="mini"
          src="https://raw.githubusercontent.com/Tyh2001/images/4ad62a8f00aa2473deca61598f307430d8d4a4cf/fighting-design/FightingDesign.svg"
        />
        <span class="name">Playground</span>
      </div>
    </f-link>

    <ul class="option">
      <li class="option-item">
        <f-link href="https://fighting.tianyuhao.cn/" type="primary" target="_blank">
          官网
        </f-link>
      </li>
      <li class="option-item">
        <f-link href="https://cn.vuejs.org/" type="primary" target="_blank">
          Vue.js
        </f-link>
      </li>
      <li class="option-item">
        <f-link
          href="https://github.com/FightingDesign/fighting-design-playground"
          type="primary"
          target="_blank"
        >
          Github
        </f-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    height: 54px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: pointer;

      .name {
        height: 18px;
        margin-left: 10px;
        font-weight: bold;
        font-size: 17px;
        background: -webkit-linear-gradient(55deg, #395ce3 10%, #5ee0dd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .option {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .option-item {
        white-space: nowrap;
        list-style: none;
        margin: 0 10px;
        cursor: pointer;
        user-select: none;
        font-size: 15px;
        color: #333;
        padding: 3px 6px;

        &:hover {
          transition: 0.3s;
          color: #2d5af1;
          background: #f0f0f0;
        }
      }
    }
  }
</style>
