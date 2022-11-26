<script lang="ts" setup name="FMenu">
  import { Props } from './props'
  import type { MenuPropsType } from './interface'

  const prop: MenuPropsType = defineProps(Props)
</script>

<template>
  <div class="f-menu">
    <!-- logo 位置 -->
    <div class="f-menu__logo">
      <slot name="logo" />
    </div>

    <!-- 主要内容 -->
    <div class="f-menu__content">
      <slot />
    </div>

    <!-- 右侧选项 -->
    <div class="f-menu__option">
      <slot name="option" />
    </div>
  </div>
</template>
