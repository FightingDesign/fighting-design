<script lang="ts" setup>
  import { Props } from './props'
  import { FButton } from '../../button'
  import { useRun } from '../../_hooks'
  import { ref, watch, toRefs } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FCloseBtn } from '../../close-btn'
  import { FIconNotes, FIconPlus } from '../../_svg'

  defineOptions({ name: 'FUpLoad' })

  const prop = defineProps(Props)
  const modelValue = defineModel<File[]>('files', { default: [], type: Array })

  const { run } = useRun()

  /** 是否正在拖动中 */
  const dragIng = ref(false)
  /** 文件上传输入框 */
  const inputRef = ref<HTMLInputElement | undefined>()

  /** 点击上传 */
  const handleClick = (): void => {
    inputRef.value && inputRef.value.click()
  }

  /**
   * 更新最新的文件列表
   *
   * @param { Array } files 文件列表
   */
  const updateFiles = (files: File[]): void => {
    modelValue.value = [...modelValue.value, ...files]
    run(prop.onLoad, files)
  }

  /**
   * 过滤文件
   *
   * @param { Array } files 文件列表
   * @return { Array } 过滤后的文件列表
   */
  const filterFiles = (files: File[]): File[] => {
    const { maxSize, maxLength } = toRefs(prop)

    /** 文件列表 */
    let list: File[] = [...files]

    // 拦截过大的文件
    if (maxSize.value) {
      list = list.filter((file: File): boolean => file.size < maxSize.value)
    }

    // 截取最大上传的数量
    if (maxLength.value) {
      list = list.splice(0, maxLength.value)
    }

    return list
  }

  /**
   * 当文本框发生改变时
   *
   * @param { Object } evt 事件对象
   */
  const handleChange = (evt: Event): void => {
    /** 获取文件列表 */
    const files = (evt.target as HTMLInputElement).files

    if (files) {
      updateFiles(filterFiles(files as unknown as File[]))
    }
  }

  /**
   * 删除文件
   *
   * @see Array.prototype.splice() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   * @param { number } index 需要删除的文件索引
   */
  const removeFile = (index: number): void => {
    modelValue.value.splice(index, 1)
  }

  /**
   * 将文件拖拽进来时触发
   *
   * @param { Object } evt 事件对象
   * @see DragEvent https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent
   */
  const onDragover = (evt: DragEvent): void => {
    evt.preventDefault()
    dragIng.value = true
  }

  /**
   * 放置时触发
   *
   * @param { Object } evt 事件对象
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

  /**
   * 如果文件发生改变时触发
   */
  const loadChange = (): void => {
    watch(
      () => prop.files,
      () => {
        run(prop.onChange, modelValue.value)
      },
      { deep: true }
    )
  }

  !!prop.onChange && loadChange()
</script>

<template>
  <div class="f-up-load">
    <!-- 拖动显示的 -->
    <div
      v-if="drag"
      class="f-up-load__drag"
      @click="handleClick"
      @drop.prevent="onDrop"
      @dragover.prevent="onDragover"
    >
      <slot>
        <f-svg-icon :icon="FIconPlus" />
      </slot>
    </div>

    <div v-else class="f-up-load__content" @click="handleClick">
      <slot>
        <f-button>选择文件</f-button>
      </slot>
    </div>

    <!-- 文件上传输入框 -->
    <input
      ref="inputRef"
      type="file"
      hidden
      :name
      :disabled
      :accept
      :multiple
      @change="handleChange"
    />
  </div>

  <!-- 文件列表 -->
  <template v-if="showList">
    <div v-if="modelValue && modelValue.length" class="f-up-load__file-list">
      <div
        v-for="(file, index) in modelValue"
        :key="index"
        class="f-up-load__file-list-item"
      >
        <div class="f-up-load__file-name">
          <f-svg-icon :icon="FIconNotes" />
          {{ file.name }}
        </div>

        <f-close-btn v-if="isRemove" :size="14" @click="removeFile(index)" />
      </div>
    </div>
  </template>
</template>
