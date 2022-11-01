<script lang="ts" setup name="FUpLoad">
  import { Props } from './props'
  import { FButton } from '../../button'
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  defineProps(Props)

  const FUpLoadInput: Ref<HTMLInputElement> = ref(
    null as unknown as HTMLInputElement
  )

  const handleClick = (e: Event): void => {
    console.log(e)
  }
</script>

<template>
  <div class="f-up-load">
    <div class="f-up-load__content" @click="handleClick">
      <slot>
        <f-button>选择文件</f-button>
      </slot>
    </div>

    <input
      ref="FUpLoadInput"
      type="file"
      hidden
      :name="name"
      :accept="accept"
      :multiple="multiple"
    />
  </div>
</template>
