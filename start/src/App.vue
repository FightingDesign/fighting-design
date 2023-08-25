<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    FIconMenuHamburger,
    FIconSearch,
    FIconPlus,
    FIconPencil,
    FIconRotateAntiClockwise
  } from '@fighting-design/fighting-icon'

  /** 选项菜单切换状态 */
  const optionsModel = ref(false)

  const optionClass = ref<'vertical' | 'horizontal'>('horizontal')

  const widthAnimation = ref(false)
  const heigthAnimation = ref(false)

  const swapChange = (): void => {
    const width = window.innerWidth

    widthAnimation.value = width < 860
    heigthAnimation.value = width >= 860

    if (width < 860) {
      optionClass.value = 'horizontal'
    } else {
      optionClass.value = 'vertical'
    }
  }
</script>

<template>
  <!-- 操作按钮 -->
  <div :class="['organization-options', `organization-options__${optionClass}`]">
    <div class="organization-options-btn">
      <f-swap
        v-model="optionsModel"
        type="sound"
        :icon-on="FIconMenuHamburger"
        :icon-off="FIconSearch"
        :on-change="swapChange"
      />
    </div>

    <f-collapse-animation
      :opened="optionsModel"
      :width-animation="widthAnimation"
      :height-animation="heigthAnimation"
    >
      <div class="organization-options-all">
        <div class="organization-options-item" title="创建组织">
          <f-svg-icon :icon="FIconPlus" :size="34" color="#2d5af1" />
        </div>
        <div class="organization-options-item">
          <f-svg-icon :icon="FIconPencil" :size="34" color="#2d5af1" />
        </div>
        <div class="organization-options-item">
          <f-svg-icon :icon="FIconRotateAntiClockwise" :size="34" color="#2d5af1" />
        </div>
      </div>
    </f-collapse-animation>
  </div>
</template>

<style lang="scss" scoped>
  // 操作选项
  .organization-options {
    // width: 80px;
    background: #fff;
    border-radius: 40px;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    // flex-direction: column;
    overflow: hidden;

    // 水平的
    &__horizontal {
      height: 80px;

      .organization-options-all {
        display: flex;
        column-gap: 20px;
      }
    }

    // 垂直的
    &__vertical {
      width: 80px;
      flex-direction: column;

      .organization-options-all {
        flex-direction: column;
        row-gap: 20px;
      }
    }

    // 打开关闭按钮
    .organization-options-btn {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      transition: 0.25s;
      z-index: 10;

      &:hover {
        background-color: #e9eefd;
      }
    }

    // 全部选项
    .organization-options-all {
      display: flex;
      // flex-direction: column;
      // row-gap: 20px;

      // 每一项
      .organization-options-item {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        background-color: #fff;
        transition: 0.25s;

        &:hover {
          background-color: #eee;
        }
      }
    }
  }
</style>
