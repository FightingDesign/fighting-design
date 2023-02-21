<script lang="ts" setup name="FTimePicker">
  import { Props } from './props'
  import { reactive, computed, ref, nextTick, watch } from 'vue'
  import { FInput } from '../../input'
  import { FTrigger } from '../../trigger'
  import { addZero, isString, isBoolean } from '../../_utils'
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
    minute: addZero(nowDate.getMinutes()),
    second: addZero(nowDate.getSeconds())
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

  /** trigger 组件实例 */
  const triggerInstance = ref<TriggerInstance>()

  /**
   * 点击确定或者取消按钮
   *
   * @param { boolean | 'now' } [target = true] 点击的是否为确定
   */
  const onConfirm = (target: boolean | 'now' = true): void => {
    /**
     * 如果为真说明点击的是确定按钮
     *
     * 则重新设置时间触发更新
     *
     * 这里要判断是否为真，并且不是字符串擦书
     */
    if (target && !isString(target)) {
      pickerTime.value = `${timeList.hour}:${timeList.minute}:${timeList.second}`
    }

    if (target === 'now') {
      /** 获取当前时间 */
      const now: Date = new Date()
      timeList.hour = addZero(now.getHours())
      timeList.minute = addZero(now.getMinutes())
      timeList.second = addZero(now.getSeconds())
    }

    /**
     * 不管确定还是取消，都需要关闭触发器
     *
     * 传递的是布尔值代表点击的是关闭或者取消，就需要关闭
     *
     * 如果非布尔值类型，咋代表点击的是当前时间，则不需要关闭
     */
    if (isBoolean(target)) {
      ;(triggerInstance.value as TriggerInstance).handelClose()
    }
  }

  /** 小时滚动容器 */
  const hoverEl = ref<HTMLDivElement>()
  /** 分钟滚动容器 */
  const minuteEl = ref<HTMLDivElement>()
  /** 秒钟滚动容器 */
  const secondEl = ref<HTMLDivElement>()

  /**
   * 获取每一项的高度
   *
   * @see HTMLElement.offsetHeight https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight
   */
  const itemHeight = computed((): number => {
    return ((secondEl.value as HTMLDivElement).querySelector('.f-time-picker__second-item') as HTMLDivElement)
      .offsetHeight
  })

  /**
   * 滚动到指定的时间位置
   *
   * @see Element.scrollTo() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo
   */
  const scrollNow = async (): Promise<void> => {
    await nextTick()
    ;(hoverEl.value as HTMLDivElement).scrollTo({
      top: (Number(timeList.hour) === 0 ? 24 : Number(timeList.hour) - 2) * itemHeight.value,
      behavior: 'smooth'
    })
    ;(minuteEl.value as HTMLDivElement).scrollTo({
      top: (Number(timeList.minute) - 2) * itemHeight.value,
      behavior: 'smooth'
    })
    ;(secondEl.value as HTMLDivElement).scrollTo({
      top: (Number(timeList.second) - 2) * itemHeight.value,
      behavior: 'smooth'
    })
  }

  /**
   * 点击对应的时间进行选取
   *
   * @param { number } date 当前的时间数字
   * @param { 'hour' | 'minute' | 'second' } params 小时还是分钟
   */
  const handleClick = (date: number, params: 'hour' | 'minute' | 'second'): void => {
    timeList[params] = addZero(date)
  }

  /** 当时间对象一旦发生变化，就触发滚动 */
  watch(
    (): TimePickerTimeList => timeList,
    (): void => {
      scrollNow()
    },
    /** 需要深度监视对象 */
    { deep: true }
  )
</script>

<template>
  <div class="f-time-picker">
    <f-trigger ref="triggerInstance" trigger="click" :disabled="disabled" :on-open="scrollNow">
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
          <div ref="hoverEl" class="f-time-picker__hour">
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

          <!-- 分钟容器 -->
          <div ref="minuteEl" class="f-time-picker__minute">
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

          <!-- 秒钟容器 -->
          <div ref="secondEl" class="f-time-picker__second">
            <div
              v-for="second in 59"
              :key="second"
              :class="[
                'f-time-picker__second-item',
                { 'f-time-picker__second-active': addZero(second).toString() === timeList.second }
              ]"
              @click.stop="handleClick(second, 'second')"
            >
              {{ addZero(second) }}
            </div>
          </div>
        </div>

        <!-- 操作栏 -->
        <div class="f-time-picker__option">
          <f-button size="mini" :on-click="() => onConfirm('now')">当前</f-button>
          <f-button size="mini" :on-click="() => onConfirm(false)">取消</f-button>
          <f-button type="primary" size="mini" :on-click="() => onConfirm(true)">确定</f-button>
        </div>
      </template>
    </f-trigger>
  </div>
</template>
