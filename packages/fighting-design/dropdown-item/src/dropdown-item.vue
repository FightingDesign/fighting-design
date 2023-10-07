<script lang="ts" setup>
  import { Props } from './props'
  import { useRun } from '../../_hooks'
  import { inject } from 'vue'
  import { TRIGGER_CLOSE_KEY } from '../../trigger/src/props'
  import type { TriggerProvide } from '../../trigger'

  defineOptions({ name: 'FDropdownItem' })

  const prop = defineProps(Props)

  const { run } = useRun()

  /** 获取到 trigger 注入的依赖项 */
  const parentInject: TriggerProvide | null = inject(TRIGGER_CLOSE_KEY, null)

  /**
   * 点击时触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled) return
    run(parentInject && parentInject.close)
    run(prop.onClick, evt)
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
