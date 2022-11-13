<script lang="ts" setup name="VpDemo">
  import { ref, computed, unref } from 'vue'

  const prop = defineProps({
    open: {
      type: Boolean,
      default: (): boolean => false
    }
  })

  // 是否展示内容
  const isOpen = ref<boolean>(prop.open)

  /**
   * 点击
   */
  const handleClick = (): void => {
    isOpen.value = !unref(isOpen)
  }

  /**
   * 类名列表
   */
  const classList = computed(() => {
    return [
      'vp-demo__box',
      {
        'vp-demo__box-open': unref(isOpen)
      }
    ] as const
  })
</script>

<template>
  <div class="vp-demo">
    <div v-if="$slots.source" class="vp-demo__source">
      <slot name="source" />
    </div>

    <div :class="classList">
      <div class="vp-demo__content">
        <slot />
      </div>
    </div>
    <div
      :class="['vp-demo__option', { 'vp-demo__option-open': isOpen }]"
      @click.self="handleClick"
    >
      <!-- 左侧插槽 -->
      <span class="vp-demo__option-left">
        <slot name="optionLeft" />
      </span>

      <span class="vp-demo__option-text" @click.self="handleClick">
        {{ isOpen ? '折叠代码' : '展开代码' }}
      </span>

      <!-- 右侧插槽 -->
      <span class="vp-demo__option-right">
        <slot name="optionRight" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .vp-demo {
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 8px 0 #e8edfa99, 0 2px 4px 0 #e8edfa80;
    }

    &__source {
      padding: 20px;
      box-sizing: border-box;
    }

    // 内容盒子
    &__box {
      box-sizing: border-box;
      height: fit-content;
      transition: max-height 0.4s;
      max-height: 0;
      overflow: hidden;
      background: #fff;

      &.vp-demo__box-open {
        border-top: 1px solid #e5e5e5;
        overflow-y: auto;
        max-height: 800px;
      }

      // 主要内容
      .vp-demo__content {
        padding: 20px;
        box-sizing: border-box;
      }

      // 滚动条
      &::-webkit-scrollbar {
        width: 7px;
      }

      // 滚动滑块
      &::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 6px;
      }
    }

    // 操作栏
    &__option {
      border-top: 1px solid #e5e5e5;
      height: 45px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      font-size: 15px;
      background: #fff;
      padding: 10px;
      box-sizing: border-box;
      z-index: 9999;

      &.vp-demo__option-open {
        position: sticky;
        bottom: 0px;
      }

      &__option-text {
        color: #333;
        transition: 0.4s;
      }

      &:hover {
        .vp-demo__option-text {
          color: #2d5af1;
        }
      }
    }
  }
</style>
