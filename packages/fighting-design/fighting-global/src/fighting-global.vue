<script lang="ts" setup>
  import { Props, FIGHTING_GLOBAL_PROPS_KEY } from './props'
  import { provide, reactive, computed } from 'vue'
  import { useProps } from '../../_hooks'
  import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
  import type { FightingType, FightingLang, FightingSize } from '../../_interface'
  import type { FightingGlobalProps } from './interface'

  defineOptions({ name: 'FFightingGlobal' })

  const prop = defineProps(Props)

  const { interceptors } = useProps(prop)

  /** prop 拦截器拦截 type 属性 */
  const interceptorsType = computed((): FightingType => {
    return interceptors(
      'type',
      (): boolean => {
        return FIGHTING_TYPE.includes(prop.type as FightingType)
      },
      'default'
    ) as FightingType
  })

  /** prop 拦截器拦截 size 属性 */
  const interceptorsSize = computed((): FightingSize => {
    return interceptors(
      'size',
      (): boolean => {
        return FIGHTING_SIZE.includes(prop.size as FightingSize)
      },
      'middle'
    ) as FightingSize
  })

  /** prop 拦截器拦截 lang 属性 */
  const interceptorsLang = computed((): FightingLang => {
    return interceptors(
      'lang',
      (): boolean => {
        return (['en-US', 'zh-CN'] as const).includes(prop.lang as FightingLang)
      },
      'zh-CN'
    ) as FightingLang
  })

  // 注入依赖项
  provide<FightingGlobalProps>(
    FIGHTING_GLOBAL_PROPS_KEY,
    reactive({
      type: interceptorsType.value,
      size: interceptorsSize.value,
      lang: interceptorsLang.value
    })
  )
</script>

<template>
  <slot />
</template>
