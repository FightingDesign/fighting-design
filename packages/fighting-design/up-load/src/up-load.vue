<script lang="ts" setup name="FUpLoad">
  import { Props } from './props'
  import { FButton } from '../../button'
  import { useRun } from '../../_hooks'
  import { ref, watch } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { FIconNotesVue, FIconPlusVue } from '../../_svg'
  import { EMIT_FILES } from '../../_tokens'
  import type { Ref } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_FILES]: (files: File[]): File[] => files
  })

  const dragIng = ref(false)

  /** 文件列表 */
  const fileList = ref<File[]>(null as unknown as File[])

  /** 文件上传输入框 */
  const inputEl: Ref<HTMLInputElement | null> = ref(null)

  /** 点击上传 */
  const handleClick = (): void => {
    ;(inputEl.value as HTMLInputElement).click()
  }

  /**
   * 更新最新的文件列表
   *
   * @param files 文件列表
   */
  const updateFiles = (files: File[]): void => {
    fileList.value = files
    emit(EMIT_FILES, files)
    useRun(prop.onLoad, files)
  }

  /**
   * 过滤文件
   *
   * @param files 文件列表
   * @return 过滤后的文件列表
   */
  const filterFiles = (files: File[]): File[] => {
    const { maxSize, maxLength } = prop

    /** 文件列表 */
    let list: File[] = [...files]

    /** 拦截过大的文件 */
    if (maxSize) {
      list = list.filter((file: File): boolean => file.size < maxSize)
    }

    /** 截取最大上传的数量 */
    if (maxLength) {
      list = list.splice(0, maxLength)
    }

    return list
  }

  /**
   * 当文本框发生改变时
   *
   * @param evt 事件对象
   */
  const handleChange = (evt: Event): void => {
    /** 获取文件列表 */
    const files: FileList | null = (evt.target as HTMLInputElement).files

    if (files) {
      updateFiles(filterFiles(files as unknown as File[]))
    }
  }

  /**
   * 删除文件
   *
   * @param index 需要删除的文件索引
   */
  const removeFile = (index: number): void => {
    ;(fileList.value as File[]).splice(index, 1)
  }

  /**
   * 将文件拖拽进来时触发
   *
   * @param evt 事件对象
   * @see DragEvent https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent
   */
  const onDragover = (evt: DragEvent): void => {
    evt.preventDefault()
    dragIng.value = true
  }

  /**
   * 放置时触发
   *
   * @param evt 事件对象
   * @see DragEvent https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent
   */
  const onDrop = (evt: DragEvent): void => {
    dragIng.value = false

    /** 获取文件列表 */
    const files: FileList = (evt.dataTransfer as DataTransfer).files
    if (files) {
      updateFiles(filterFiles(files as unknown as File[]))
    }
  }

  /** 如果文件发生改变时触发 */
  const loadChange = (): void => {
    if (!prop.onChange) return
    watch(
      (): File[] => prop.files,
      (): void => {
        useRun(prop.onChange, fileList.value)
      },
      { deep: true }
    )
  }
  loadChange()
</script>

<template>
  <div class="f-up-load">
    <div v-if="drag" class="f-up-load__drag" @click="handleClick" @drop.prevent="onDrop" @dragover.prevent="onDragover">
      <slot>
        <f-svg-icon :icon="FIconPlusVue" />
      </slot>
    </div>

    <div v-else class="f-up-load__content" @click="handleClick">
      <slot>
        <f-button>选择文件</f-button>
      </slot>
    </div>

    <!-- 文件上传输入框 -->
    <input
      ref="inputEl"
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
  <ul v-if="showList && fileList && fileList.length" class="f-up-load__file-list">
    <li v-for="(file, index) in fileList" :key="index" class="f-up-load__file-list-item">
      <span class="f-up-load__file-name">
        <f-svg-icon :icon="FIconNotesVue" />
        {{ file.name }}
      </span>

      <f-close-btn v-if="isRemove" :size="14" @click="removeFile(index)" />
    </li>
  </ul>
</template>
