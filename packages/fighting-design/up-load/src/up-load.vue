<script lang="ts" setup name="FUpLoad">
  import { Props, Emits } from './props'
  import { FButton } from '../../button'
  import { ref } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
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

  // 当文本框发生改变时
  const handleChange = (evt: Event): void => {
    const files: FileList | null = (evt.target as HTMLInputElement).files
    const { maxSize, maxLength } = prop

    if (files) {
      let list: File[] = [...files]

      // 拦截过大的文件
      if (maxSize) {
        list = list.filter((file: File) => file.size < maxSize)
      }

      // 截取最大上传的数量
      if (maxLength) {
        list = list.splice(0, maxLength)
      }

      fileList.value = list
      emit('update:files', fileList.value)
      prop.load && prop.load()
    }
  }

  // 删除文件
  const removeFile = (index: number): void => {
    (fileList.value as File[]).splice(index, 1)
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

  <!-- 文件列表 -->
  <ul
    v-if="showList && fileList && fileList.length"
    class="f-up-load__file-list"
  >
    <li
      v-for="(file, index) in fileList"
      :key="index"
      class="f-up-load__file-list-item"
    >
      <span class="f-up-load__file-name">
        <f-svg-icon :icon="FIconNotesVue" />
        {{ file.name }}
      </span>

      <f-close-btn v-if="isRemove" :size="14" @click="removeFile(index)" />
    </li>
  </ul>
</template>
