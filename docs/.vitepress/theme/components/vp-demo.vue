<template>
  <div class="vp-demo">
    <!-- 展示的内容 -->
    <div class="vp-demo__source">
      <slot />
    </div>

    <!-- 折叠的内容 -->
    <div ref="content" class="vp-demo__box">
      <slot name="highlight" />
    </div>

    <!-- 点击展开 / 折叠的区域 -->
    <div :class="['vp-demo__option', { 'vp-demo__option-open': isOpen }]" @click="handleClick">
      <span class="vp-demo__option-text">
        {{ isOpen ? '折叠代码' : '展开代码' }}
      </span>

      <span :class="['vp-demo__option-copy', { 'vp-demo-option-copy-show': isOpen }]" @click.stop="handleCopy">
        复制代码
      </span>
    </div>
  </div>
</template>

<script setup lang="ts" name="VpDemo">
  import { ref } from 'vue'
  import { FMessage } from '../../../../packages/fighting-design/message'
  import { onCopy } from '../../../components/_demos/_utils/copy'

  const prop = defineProps({
    /**
     * 文本内容
     */
    sourceCode: {
      type: String,
      default: null
    }
  })

  /**
   * 是否展示内容
   */
  const isOpen = ref(false)
  /**
   * 折叠的 dom 节点
   */
  const content = ref(null as unknown as HTMLElement)

  /**
   * 点击操作栏执行
   */
  const handleClick = () => {
    if (!isOpen.value) {
      content.value.style.height = 'auto'
      const height = content.value.offsetHeight
      content.value.style.height = '0'
      content.value.offsetHeight
      content.value.style.transition = '0.33s'
      content.value.style.height = height + 'px'
      isOpen.value = true
    } else {
      content.value.style.height = '0'
      isOpen.value = false
    }
  }

  /**
   * 点击复制代码段
   */
  const handleCopy = async (): Promise<void> => {
    try {
      onCopy(prop.sourceCode)
    } catch (err) {
      FMessage.danger(err)
    }
  }
</script>

<style lang="scss" scoped>
  .vp-demo {
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;

    // 展示的内容
    &__source {
      padding: 20px;
      box-sizing: border-box;
    }

    // 折叠的内容
    &__box {
      height: 0;
      overflow: hidden;
      padding: 0 20px;
      box-sizing: border-box;

      .language-vue {
        border-radius: 0;
        margin: 0;
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

    // 点击的操作栏
    &__option {
      position: relative;
      border-top: 1px solid #e5e5e5;
      height: 45px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      font-size: 15px;
      background: #fff;
      padding: 10px;
      box-sizing: border-box;
      z-index: 300;
      color: #333;

      // 展开使用粘性定位
      &.vp-demo__option-open {
        position: sticky;
        bottom: 0px;
      }

      // 描述文字
      &__option-text {
        transition: 0.4s;
        text-align: center;
        display: block;
      }

      // 复制文字
      .vp-demo__option-copy {
        color: #2d5af1;
        user-select: none;
        position: absolute;
        right: 40px;
        opacity: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 90px;

        &.vp-demo-option-copy-show {
          transition: 0.3s;
          opacity: 1;
        }
      }

      &:hover {
        .vp-demo__option-text {
          color: #2d5af1;
        }
      }
    }

    // 鼠标移入
    &:hover {
      box-shadow: 0 0 8px 0 #e8edfa99, 0 2px 4px 0 #e8edfa80;
    }
  }
</style>
