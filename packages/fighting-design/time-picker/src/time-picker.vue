<script lang="ts" setup>
  import { Props } from './props'
  import { reactive, ref, nextTick, watch } from 'vue'
  import { FInput } from '../../input'
  import { FTrigger } from '../../trigger'
  import { addZero, isString, isBoolean } from '../../_utils'
  import { FIconClockTime } from '../../_svg'
  import type { TriggerInstance } from '../../trigger'
  import type { TimePickerTimeList } from './interface'

  defineOptions({ name: 'FTimePicker' })

  defineProps(Props)
  const dateModelValue = defineModel<string>('time', { default: '', type: String })

  /** 获取当前的时间 */
  const nowDate: Date = new Date()

  /** 当前日期对象 */
  const timeList: TimePickerTimeList = reactive({
    hour: addZero(nowDate.getHours()),
    minute: addZero(nowDate.getMinutes()),
    second: addZero(nowDate.getSeconds())
  })

  /** trigger 组件实例 */
  const triggerInstance = ref<TriggerInstance>()

  /**
   * 点击确定或者取消按钮
   *
   * @param { boolean | 'now' } [target = true] 点击的是否为确定
   */
  const onConfirm = (evt: MouseEvent, target: boolean | 'now' = true): void => {
    /**
     * 如果为真说明点击的是确定按钮
     *
     * 则重新设置时间触发更新
     *
     * 这里要判断是否为真，并且不是字符串参数
     */
    if (target && !isString(target)) {
      dateModelValue.value = `${timeList.hour}:${timeList.minute}:${timeList.second}`
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
      const instance = triggerInstance.value as TriggerInstance
      instance.close(evt)
    }
  }

  /** 小时滚动容器 */
  const hoverRef = ref<HTMLDivElement | undefined>()
  /** 分钟滚动容器 */
  const minuteRef = ref<HTMLDivElement | undefined>()
  /** 秒钟滚动容器 */
  const secondRef = ref<HTMLDivElement | undefined>()

  /**
   * 滚动方法
   *
   * @param { Object } el 需要滚动的节点元素
   * @param { number } top 滚动距离
   */
  const scroll = (el: HTMLDivElement, top: number): void => {
    /**
     * 滚动元素
     *
     * @see Element.scrollTo() https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo
     */
    el.scrollTo({ top, behavior: 'smooth' })
  }

  /**
   * 滚动到指定的时间位置
   */
  const scrollNow = async (): Promise<void> => {
    await nextTick()

    if (hoverRef.value && minuteRef.value && secondRef.value) {
      /**
       * 获取每一项的高度
       *
       * @see HTMLElement.offsetHeight https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight
       */
      const itemHeight: number = (
        secondRef.value.querySelector('.f-time-picker__second-item') as HTMLDivElement
      ).offsetHeight

      scroll(
        hoverRef.value,
        (Number(timeList.hour) === 0 ? 24 : Number(timeList.hour) - 2) * itemHeight
      )
      scroll(minuteRef.value, (Number(timeList.minute) - 2) * itemHeight)
      scroll(secondRef.value, (Number(timeList.second) - 2) * itemHeight)
    }
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

  // 当时间对象一旦发生变化，就触发滚动
  watch(
    (): TimePickerTimeList => timeList,
    scrollNow,
    /** 需要深度监视对象 */
    { deep: true }
  )
</script>

<template>
  <div class="f-time-picker">
    <f-trigger ref="triggerInstance" trigger="click" :disabled :on-open="scrollNow">
      <f-input
        v-model="dateModelValue"
        autocomplete="off"
        type="text"
        :placeholder="placeholder || '请选择时间'"
        :disabled
        :size
        :clear
        :after-icon="FIconClockTime"
      />

      <template #content>
        <!-- 时间选择列表 -->
        <div class="f-time-picker__content">
          <!-- 小时容器 -->
          <div ref="hoverRef" class="f-time-picker__hour">
            <div
              v-for="hour in 24"
              :key="hour"
              :class="[
                'f-time-picker__hour-item',
                {
                  'f-time-picker__hour-active':
                    addZero(hour === 24 ? 0 : hour).toString() === timeList.hour
                }
              ]"
              @click.stop="handleClick(hour === 24 ? 0 : hour, 'hour')"
            >
              {{ addZero(hour === 24 ? 0 : hour) }}
            </div>
          </div>

          <!-- 分钟容器 -->
          <div ref="minuteRef" class="f-time-picker__minute">
            <div
              v-for="minute in 59"
              :key="minute"
              :class="[
                'f-time-picker__minute-item',
                {
                  'f-time-picker__minute-active':
                    addZero(minute).toString() === timeList.minute
                }
              ]"
              @click.stop="handleClick(minute, 'minute')"
            >
              {{ addZero(minute) }}
            </div>
          </div>

          <!-- 秒钟容器 -->
          <div ref="secondRef" class="f-time-picker__second">
            <div
              v-for="second in 59"
              :key="second"
              :class="[
                'f-time-picker__second-item',
                {
                  'f-time-picker__second-active':
                    addZero(second).toString() === timeList.second
                }
              ]"
              @click.stop="handleClick(second, 'second')"
            >
              {{ addZero(second) }}
            </div>
          </div>
        </div>

        <!-- 操作栏 -->
        <div class="f-time-picker__option">
          <f-button size="mini" @click="onConfirm($event, 'now')">当前</f-button>
          <f-button size="mini" @click="onConfirm($event, false)">取消</f-button>
          <f-button type="primary" size="mini" @click="onConfirm($event, true)">
            确定
          </f-button>
        </div>
      </template>
    </f-trigger>
  </div>
</template>
