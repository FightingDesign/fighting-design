<script lang="ts" setup name="FUpLoad">
  import { Props, Emits } from './props'
  import { FButton } from '../../button'
  import { ref } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconNotesVue } from '../../_svg'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const fileList: Ref<File[] | null> = ref<File[]>(null as unknown as File[])
  const FUpLoadInput: Ref<HTMLInputElement> = ref(
    null as unknown as HTMLInputElement
  )

  const handleClick = (): void => {
    FUpLoadInput.value.click()
  }

  const handleChange = (evt: Event): void => {
    const files: FileList | null = (evt.target as HTMLInputElement).files

    // 拦截过大的文件
    if (prop.maxSize && files) {
      fileList.value = [...files].filter(
        (file: File) => file.size < prop.maxSize
      )
    }

    fileList.value && emit('update:files', fileList.value)
    prop.load && prop.load()
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
      :disabled="disabled"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>

  <ul v-if="fileList && fileList.length" class="f-up-load__file-list">
    <li
      v-for="(file, index) in fileList"
      :key="index"
      class="f-up-load__file-list-item"
    >
      <f-svg-icon :icon="FIconNotesVue" />
      <span class="f-up-load__file-name">{{ file.name }}</span>
    </li>
  </ul>
</template>
