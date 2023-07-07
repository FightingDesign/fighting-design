<script lang="ts" setup>
  import { Props, AVATAR_GROUP_PROPS_KEY } from './props'
  import { provide, onMounted, ref } from 'vue'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FAvatarGroup' })

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'avatar-group')

  provide(AVATAR_GROUP_PROPS_KEY, prop)

  /** 样式列表 */
  const styleList = styles(['positionSize'])

  const avatarGroupRef = ref<HTMLDivElement | undefined>()

  onMounted(() => {
    if (avatarGroupRef.value) {
      const avatars = avatarGroupRef.value.querySelectorAll(
        '.f-avatar'
      ) as unknown as HTMLDivElement[]
      avatars.forEach((item: HTMLDivElement, i: number): void => {
        item.style.zIndex = (avatars.length - i).toString()
      })
    }
  })
</script>

<template>
  <div ref="avatarGroupRef" role="group" class="f-avatar-group" :style="styleList">
    <slot />
  </div>
</template>
