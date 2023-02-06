<script lang="ts" setup name="FCalendar">
  import { Props } from './props'
  import { computed, watch, reactive } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconChevronLeftVue, FIconChevronRightVue } from '../../_svg'
  import { addZero, isDate } from '../../_utils'
  import { useCalendar, useRun, useGlobal, useList } from '../../_hooks'

  const prop = defineProps(Props)

  /**
   * 获取日期参数
   *
   * 如果传入的不是一个 Date 对象，则实例化一个当前日期对象
   */
  const nowDate = computed((): Date => (isDate(prop.date) ? prop.date : new Date()))

  /** 日期集合 */
  const dateParams = reactive({
    year: nowDate.value.getFullYear(),
    month: nowDate.value.getMonth() + 1,
    date: nowDate.value.getDate()
  })

  const { AllMonthDays, changeLastMonth, changeNextMonth } = useCalendar(dateParams)

  const { getLang } = useGlobal()

  const { styles } = useList(prop, 'calendar')

  /** 星期列表 */
  const weekList = computed(() => getLang('calendar').value.weekList)

  /**
   * 当前日期高亮显示
   *
   * @param { number } month 月份
   * @param { number } date 日期
   */
  const mowDataClassList = (month: number, date: number): string => {
    if (date === dateParams.date && month === dateParams.month) {
      return 'f-calendar__day-today'
    }
    if (month !== dateParams.month) {
      return 'f-calendar__not-month'
    }
    return ''
  }

  console.log(AllMonthDays.value)

  /**
   * 点击操作栏
   *
   * @param { 'last' | 'now' | 'next' } target 不同类型用于切换当前时间、下个月、上个月
   */
  const optionClick = (target: 'last' | 'now' | 'next'): void => {
    const option = {
      last: (): void => changeLastMonth(),
      next: (): void => changeNextMonth(),
      now: (): void => {
        dateParams.month = prop.date.getMonth()
        dateParams.year = prop.date.getFullYear()
        dateParams.date = prop.date.getDate()
      }
    } as const

    option[target] && option[target]()
  }

  /** 当前时间 */
  const nowTime = computed((): string => {
    return `${dateParams.year} / ${addZero(dateParams.month)} / ${addZero(dateParams.date)}`
  })

  /**
   * 点击对每一天
   *
   * @param { number } month 当前月份
   * @param { number } date 当前日期
   */
  const handleClick = (month: number, date: number): void => {
    dateParams.date = date

    /** 如果点击上个月的选项，则调整上个月 */
    if (month < dateParams.month) {
      changeLastMonth()
    } else if (month > dateParams.month) {
      changeNextMonth()
    }

    useRun(prop.onChangeDate, {
      year: dateParams.year,
      month: month || dateParams.month,
      date
    })
  }

  /** 类名列表 */
  const classList = styles(['borderColor', 'dayCellHeight', 'weekCellHeight'])

  /** 当月份发生改变时候触发的回调 */
  watch(
    (): number => dateParams.month,
    (newValue: number): void => {
      useRun(prop.onChangeMonth, {
        year: dateParams.year,
        month: newValue + 1,
        date: dateParams.date
      })
    }
  )
</script>

<template>
  <div :class="['f-calendar', { 'f-calendar__border': border }]" :style="classList">
    <!-- 头部操作栏 -->
    <header v-if="showHeader" class="f-calendar__header">
      <f-svg-icon :icon="FIconChevronLeftVue" @click.stop="optionClick('last')" />
      <div class="f-calendar__option">
        <span class="f-calendar__now-time">{{ nowTime }}</span>
        <span class="f-calendar__now-date" @click.stop="optionClick('now')"> 今天 </span>
      </div>
      <f-svg-icon :icon="FIconChevronRightVue" @click.stop="optionClick('next')" />
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
        v-for="(days, index) in AllMonthDays"
        :key="index"
        :class="['f-calendar__day-item', mowDataClassList(days.cMonth, days.cDay)]"
        @click.stop="handleClick(days.cMonth, days.cDay)"
      >
        <span class="f-calendar__solar">{{ days.cDay }}</span>
        <span v-if="lunar" class="f-calendar__lunar">
          <!-- 农历节日 -> 阳历节日 -> 节气 -> 农历日期 -->
          {{ days.lunarFestival || days.festival || days.term || days.IDayCn }}
        </span>
      </div>
    </div>
  </div>
</template>
