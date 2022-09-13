<script lang="ts" setup></script>

<template>
  <div class="box">
    123
    <ul>
      <li>12121</li>
      <li>12121</li>
      <li>12121</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    width: 50px;
    background: #333;
    position: fixed;
    top: 40px;
    right: 0;
    left: 0;
    margin: auto;
    color: #fff;
    border-radius: 20px;
    padding: 3px 13px;
    transition: 0.4s;

    ul {
      display: none;
    }

    &:hover {
      ul {
        display: block;
      }
    }
  }
</style>
