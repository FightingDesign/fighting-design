<script lang="ts" setup name="FFightingGlobal">
  import { Props, FIGHTING_GLOBAL_PROPS_KEY } from './props'
  import { provide, reactive, computed } from 'vue'
  import { useProps } from '../../_hooks'
  import type { FightingGlobalProps } from './interface'

  const prop = defineProps(Props)

  const { interceptors } = useProps(prop)

  /**
   * prop 拦截器拦截 type 属性
   */
  const interceptorsType = computed(() => {
    return interceptors(
      'type',
      (): boolean => {
        return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(prop.type)
      },
      'default'
    )
  })

  /**
   * prop 拦截器拦截 size 属性
   */
  const interceptorsSize = computed(() => {
    return interceptors(
      'size',
      (): boolean => {
        return (['large', 'middle', 'small', 'mini'] as const).includes(prop.size)
      },
      'middle'
    )
  })

  /**
   * prop 拦截器拦截 lang 属性
   */
  const interceptorsLang = computed(() => {
    return interceptors(
      'lang',
      (): boolean => {
        return (['en-US', 'zh-CN'] as const).includes(prop.lang)
      },
      'zh-CN'
    )
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
