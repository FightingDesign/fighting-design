<script lang="ts" setup name="FTimePicker">
  import { Props } from './props'
  import { reactive, computed, ref } from 'vue'
  import { FInput } from '../../input'
  import { FTrigger } from '../../trigger'
  import { addZero, isString } from '../../_utils'
  import { FIconClockTime } from '../../_svg'
  import { EMIT_TIME } from '../../_tokens'
  import type { TriggerInstance } from '../../trigger'
  import type { TimePickerTimeList } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_TIME]: (val: string): boolean => isString(val)
  })

  /** 获取当前的时间 */
  const nowDate: Date = new Date()

  /** 当前日期对象 */
  const timeList: TimePickerTimeList = reactive({
    hour: addZero(nowDate.getHours()),
    minute: addZero(nowDate.getMinutes())
  })

  /** 获取选择的时间 & 设置时间 */
  const pickerTime = computed({
    /** 获取值返回 time */
    get: (): string => prop.time,
    /**
     * 设置值
     *
     * @param { string } val 最新的值
     */
    set: (val: string): void => {
      emit(EMIT_TIME, val)
    }
  })

  /**
   * 点击对应的时间进行选取
   *
   * @param { number } date 当前的时间数字
   * @param { 'hour' | 'minute' } params 小时还是分钟
   */
  const handleClick = (date: number, params: 'hour' | 'minute'): void => {
    timeList[params] = addZero(date)
  }

  /** trigger 组件实例 */
  const triggerInstance = ref<TriggerInstance>()

  /**
   * 点击确定或者取消按钮
   *
   * @param { boolean } [target = true] 点击的是否为确定
   */
  const onConfirm = (target = true): void => {
    /**
     * 如果为真说明点击的是确定按钮
     *
     * 则重新设置时间触发更新
     */
    if (target) {
      pickerTime.value = `${timeList.hour}:${timeList.minute}`
    }

    /** 不管确定还是取消，都需要关闭触发器 */
    (triggerInstance.value as TriggerInstance).handelClose()
  }
</script>

<template>
  <div class="f-time-picker">
    <f-trigger ref="triggerInstance" trigger="click" :disabled="disabled">
      <f-input
        v-model="pickerTime"
        autocomplete="off"
        type="text"
        :placeholder="placeholder || '请选择时间'"
        :disabled="disabled"
        :size="size"
        :clear="clear"
        :after-icon="FIconClockTime"
      />

      <template #content>
        <!-- 时间选择列表 -->
        <div class="f-time-picker__content">
          <!-- 小时容器 -->
          <div class="f-time-picker__hour">
            <div
              v-for="hour in 24"
              :key="hour"
              :class="[
                'f-time-picker__hour-item',
                { 'f-time-picker__hour-active': addZero(hour === 24 ? 0 : hour).toString() === timeList.hour }
              ]"
              @click.stop="handleClick(hour === 24 ? 0 : hour, 'hour')"
            >
              {{ addZero(hour === 24 ? 0 : hour) }}
            </div>
          </div>

          <!-- 时间容器 -->
          <div class="f-time-picker__minute">
            <div
              v-for="minute in 59"
              :key="minute"
              :class="[
                'f-time-picker__minute-item',
                { 'f-time-picker__minute-active': addZero(minute).toString() === timeList.minute }
              ]"
              @click.stop="handleClick(minute, 'minute')"
            >
              {{ addZero(minute) }}
            </div>
          </div>
        </div>

        <!-- 操作栏 -->
        <div class="f-time-picker__option">
          <f-button size="mini" :on-click="() => onConfirm(false)">取消</f-button>
          <f-button type="primary" size="mini" :on-click="onConfirm">确定</f-button>
        </div>
      </template>
    </f-trigger>
  </div>
</template>
