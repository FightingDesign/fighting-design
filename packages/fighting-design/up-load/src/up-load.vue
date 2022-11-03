<script lang="ts" setup name="FUpLoad">
  import { Props } from './props'
  import { FButton } from '../../button'
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  defineProps(Props)

  const fileList: Ref<FileList | null> = ref<FileList>(
    null as unknown as FileList
  )
  const FUpLoadInput: Ref<HTMLInputElement> = ref(
    null as unknown as HTMLInputElement
  )

  const handleClick = (): void => {
    FUpLoadInput.value.click()
  }

  const handleChange = (evt: Event): void => {
    console.dir((evt.target as HTMLInputElement).files)
    fileList.value = (evt.target as HTMLInputElement).files
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
      @change="handleChange"
    />

    <ul v-if="fileList && fileList.length" class="f-up-load__file-list">
      <li v-for="(file, index) in fileList" :key="index">
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>
