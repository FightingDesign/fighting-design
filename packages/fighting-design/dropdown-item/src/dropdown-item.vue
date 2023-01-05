<script lang="ts" setup name="FDropdownItem">
  import { Props } from './props'
  import { useRun } from '../../_hooks'
  import { inject } from 'vue'
  import { TRIGGER_CLOSE_KEY } from '../../trigger/src/props'
  import type { TriggerProvide } from '../../trigger'

  const prop = defineProps(Props)

  /** 获取到 trigger 注入的依赖项 */
  const parentInject = inject<TriggerProvide | null>(TRIGGER_CLOSE_KEY, null) as TriggerProvide

  /**
   * 点击时触发
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled) return
    useRun(parentInject.handelClose)
    useRun(prop.onClick, evt)
  }
</script>

<template>
  <div
    :class="[
      'f-dropdown-item',
      {
        'f-dropdown-item__disabled': disabled
      }
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>
