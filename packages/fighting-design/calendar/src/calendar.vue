<script lang="ts" setup>
  import { Props } from './props'
  import { computed, watch, reactive, onUnmounted } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronLeft, FIconChevronRight } from '../../_svg'
  import { isDate } from '../../_utils'
  import { useCalendar, useRun, useGlobal, useList } from '../../_hooks'
  import type { GenerateCalendarItem } from '../../_hooks'

  defineOptions({ name: 'FCalendar' })

  const prop = defineProps(Props)

  const { getLang } = useGlobal()
  const { run } = useRun()
  const { styles, classes } = useList(prop, 'calendar')
  const { generateCalendar } = useCalendar(prop)

  /**
   * 获取日期参数
   *
   * 如果传入的不是一个 Date 对象，则实例化一个当前日期对象
   */
  const currentDate = computed((): Date => (isDate(prop.date) ? prop.date : new Date()))

  /** 日期集合 */
  const dates = reactive({
    year: currentDate.value.getFullYear(),
    month: currentDate.value.getMonth() + 1,
    date: currentDate.value.getDate()
  })

  /** 日期集合 */
  const allMonthDays = computed((): GenerateCalendarItem[] => {
    return generateCalendar(dates.year, dates.month)
  })

  /** 星期列表 */
  const weekList = computed((): string[] => getLang('calendar').value.weekList)

  /** 切换上个月 */
  const changeLastMonth = (): void => {
    if (dates.month === 1) {
      dates.year -= 1
      dates.month = 12
    } else {
      dates.month -= 1
    }
  }

  /** 切换下个月 */
  const changeNextMonth = (): void => {
    if (dates.month === 12) {
      dates.year += 1
      dates.month = 1
    } else {
      dates.month += 1
    }
  }

  /**
   * 操作栏可选项对象映射
   *
   * @param { Function } last 点击上个月执行的方法
   * @param { Function } next 点击下个月执行的方法
   * @param { Function } now 点击今天执行的方法
   */
  const option = {
    prev: (): void => changeLastMonth(),
    next: (): void => changeNextMonth(),
    current: (): void => {
      dates.year = prop.date.getFullYear()
      dates.month = prop.date.getMonth() + 1
      dates.date = prop.date.getDate()
    }
  } as const

  /**
   * 点击操作栏
   *
   * @param { 'last' | 'current' | 'next' } target 不同类型用于切换当前时间、下个月、上个月
   */
  const optionClick = (target: 'prev' | 'current' | 'next'): void => {
    /** 如果存在则执行指定方法 */
    option[target] && option[target]()
  }

  /**
   * 点击对每一天
   *
   * @param { number } days 日期对象
   */
  const handleClick = (days: GenerateCalendarItem): void => {
    const { target, day } = days

    // 切换上个月
    if (target === 'prev') {
      option[target]()
    }

    // 切换下个月
    if (target === 'next') {
      option[target]()
    }

    // 点击当前月份的日期，高亮显示
    if (target === 'current') {
      dates.date = day
      run(prop.onChangeDate, dates.year, dates.month, dates.date)
    }
  }

  /** 当月份发生改变时候触发的回调 */
  const watchMonth = watch(
    (): number => dates.month,
    /**
     * @param { number } month 最新的月份
     */
    (month: number): void => {
      run(prop.onChangeMonth, dates.year, month, dates.date)
    }
  )

  /** 改变日期的监听器 */
  const watchChange = watch(
    () => dates,
    (): void => {
      run(prop.onChange, dates.year, dates.month, dates.date)
    },
    { deep: true }
  )

  /**
   * 当前日期高亮显示
   *
   * @param { number } month 月份
   * @param { number } date 日期
   */
  const currentDataClass = (month: number, date: number): string => {
    /** 如果当前的月份和日期和绑定的日期相同，则高亮显示 */
    if (date === dates.date && month === dates.month) {
      return 'f-calendar__day-today'
    }

    return ''
  }

  // 停止监听器
  onUnmounted(() => {
    watchChange()
    watchMonth()
  })

  /** 样式列表 */
  const style = styles(['borderColor', 'dayCellHeight', 'weekCellHeight'])

  /** 类名列表 */
  const classList = classes(['border'], 'f-calendar')
</script>

<template>
  <div :class="classList" :style>
    <!-- 头部操作栏 -->
    <header v-if="showHeader" class="f-calendar__header">
      <!-- 上个月切换按钮 -->
      <f-svg-icon :icon="FIconChevronLeft" @click="optionClick('prev')" />

      <!-- 操作栏 -->
      <div class="f-calendar__option">
        <!-- 年份选择器 -->
        <f-select v-model="dates.year" :width="116">
          <f-option v-for="i in 200" :key="i" :value="1900 + i">{{ 1900 + i }}</f-option>
        </f-select>

        <!-- 月份选择器 -->
        <f-select v-model="dates.month" :width="116">
          <f-option v-for="i in 12" :key="i" :value="i">{{ i }}</f-option>
        </f-select>

        <f-button type="default" @click="optionClick('current')">今天</f-button>
      </div>

      <!-- 下个月切换按钮 -->
      <f-svg-icon :icon="FIconChevronRight" @click="optionClick('next')" />
    </header>

    <!-- 周几 -->
    <div class="f-calendar__week">
      <div v-for="(week, index) in weekList" :key="index" class="f-calendar__week-item">
        {{ week }}
      </div>
    </div>

    <!-- 每一天 -->
    <div class="f-calendar__day">
      <div
        v-for="(days, index) in allMonthDays"
        :key="index"
        :class="[
          'f-calendar__day-item',
          {
            'f-calendar__day-current': days.target === 'current',
            [currentDataClass(days.month, days.day)]: days.target === 'current'
          }
        ]"
        @click="handleClick(days)"
      >
        <span class="f-calendar__solar">{{ days.day }}</span>
        <span v-if="lunar" class="f-calendar__lunar">
          <!-- 农历节日 -> 阳历节日 -> 节气 -> 农历日期 -->
          {{ days.lunarFestival || days.festival || days.term || days.lunar }}
        </span>
      </div>
    </div>
  </div>
</template>
