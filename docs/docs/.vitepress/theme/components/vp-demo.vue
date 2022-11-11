<script lang="ts" setup name="FStickyCard">
  import { ref, computed, unref } from 'vue'

  const prop = defineProps({
    open: {
      type: Boolean,
      default: (): boolean => false
    }
  })

  const isOpen = ref<boolean>(prop.open)

  const handleClick = (): void => {
    isOpen.value = !unref(isOpen)
  }

  const optionText = computed((): string =>
    unref(isOpen) ? '展开代码' : '折叠代码'
  )

  // 类名列表
  const classList = computed(() => {
    return [
      'f-sticky-card__box',
      {
        'f-sticky-card__box-open': unref(isOpen)
      }
    ] as const
  })
</script>

<template>
  <div class="f-sticky-card">
    <div v-if="$slots.source" class="f-sticky-card__source">
      <slot name="source" />
    </div>

    <div :class="classList">
      <div class="f-sticky-card__content">
        <slot />
      </div>
    </div>
    <div
      :class="[
        'f-sticky-card__option',
        { 'f-sticky-card__option-open': isOpen }
      ]"
      @click.self="handleClick"
    >
      <!-- 左侧插槽 -->
      <span class="f-sticky-card__option-left">
        <slot name="optionLeft" />
      </span>

      <span class="f-sticky-card__option-text" @click.self="handleClick">
        {{ optionText }}
      </span>

      <!-- 右侧插槽 -->
      <span class="f-sticky-card__option-right">
        <slot name="optionRight" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .f-sticky-card {
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
      background: var(--sticky-card-content-background, #fff);

      &.f-sticky-card__box-open {
        border-top: 1px solid #e5e5e5;
        overflow-y: auto;
        max-height: var(--sticky-card-max-height, 800px);
      }

      // 主要内容
      .f-sticky-card__content {
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

      &.f-sticky-card__option-open {
        position: sticky;
        bottom: 0px;
      }

      &__option-text {
        color: #333;
        transition: 0.4s;
      }

      &:hover {
        .f-sticky-card__option-text {
          color: #2d5af1;
        }
      }
    }
  }
</style>
