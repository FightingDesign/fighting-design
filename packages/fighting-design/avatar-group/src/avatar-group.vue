<script lang="ts" setup>
  import { Props, AVATAR_GROUP_PROPS_KEY } from './props'
  import { provide, onMounted, ref } from 'vue'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FAvatarGroup' })

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'avatar-group')

  provide(AVATAR_GROUP_PROPS_KEY, prop)

  /** 头像组元素节点 */
  const avatarGroupRef = ref<HTMLDivElement | undefined>()

  /** 设置元素的层级样式 */
  const setZIndexStyle = (): void => {
    if (avatarGroupRef.value) {
      /** 获取到所有的子元素 */
      const avatars = avatarGroupRef.value.querySelectorAll(
        '.f-avatar'
      ) as unknown as HTMLDivElement[]

      // 必须在子元素存在的时候，设置 zIndex 层级样式
      if (avatars && avatars.length) {
        avatars.forEach((item: HTMLDivElement, i: number): void => {
          item.style.zIndex = (avatars.length - i).toString()
        })
      }
    }
  }

  // dom 挂载之后设置样式
  onMounted(setZIndexStyle)

  /** 样式列表 */
  const style = styles(['positionSize'])
</script>

<template>
  <div ref="avatarGroupRef" role="group" class="f-avatar-group" :style>
    <slot />
  </div>
</template>
