import {
  LUNAR_INFO,
  SOLAR_CALENDAR_FESTIVE,
  LUNAR_FESTIVE,
  SOLAR_TERM,
  CONVERT_DIGIT_CHINES,
  DATE_CHANG_LUNAR_CALENDAR,
  SOLAR_TERM_LIST
} from './src/date'

/**
 * Lunar 类返回值类型接口
 *
 * @param { string } festival 阳历节日
 * @param { string } lunarFestival 农历节日
 * @param { string } lunar 农历日期
 * @param { string } term 节气
 * @param { string } constellation 星座
 */
export interface GetLunarDetailReturn {
  festival: string
  lunarFestival: string
  lunar: string
  term: string
  constellation: string
}

/**
 * 传入阳历年月日获得详细的信息
 *
 * @param { number } yPara 阳历年份
 * @param { number } mPara 阳历月份
 * @param { number } dPara 阳历日期
 */
export type UseLunarReturn = (
  yPara: number,
  mPara: number,
  dPara: number
) => -1 | GetLunarDetailReturn

/**
 * 农历方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 */
export const useLunar = (): UseLunarReturn => {
  /**
   * 返回农历 year 年一整年的总天数
   *
   * @param { number } year 年份
   * @returns { number } 总天数
   */
  const getLunarYearDays = (year: number): number => {
    let i: number
    let sum = 348
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += LUNAR_INFO[year - 1900] & i ? 1 : 0
    }
    return sum + leapDays(year)
  }

  /**
   * 返回农历 year 年闰月是哪个月；若 year 年没有闰月 则返回 0
   *
   * @param { number } year 年份
   * @returns { number }
   */
  const leapMonth = (year: number): number => {
    return LUNAR_INFO[year - 1900] & 0xf
  }

  /**
   * 返回农历 year 年闰月的天数 若该年没有闰月则返回 0
   *
   * @param { number } year 年份
   * @returns { number }
   */
  const leapDays = (year: number): number => {
    if (leapMonth(year)) {
      return LUNAR_INFO[year - 1900] & 0x10000 ? 30 : 29
    }
    return 0
  }

  /**
   * 返回农历 year 年 month 月（非闰月）的总天数，计算 month 为闰月时的天数请使用 leapDays 方法
   *
   * @param { number } year 农历年份
   * @param { number } month 农历月份
   * @returns { number }
   */
  const monthDays = (year: number, month: number): number => {
    if (month > 12 || month < 1) {
      /** 月份参数从 1 至 12，参数错误返回 -1 */
      return -1
    }
    return LUNAR_INFO[year - 1900] & (0x10000 >> month) ? 30 : 29
  }

  /**
   * 公历月、日判断所属星座
   *
   * @param { number } cMonth 公历月
   * @param { number } cDay 公历日
   * @returns { string }
   */
  const toConstellation = (cMonth: number, cDay: number): string => {
    const s =
      '\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf' as const
    const arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22] as const
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '\u5ea7'
  }

  /**
   * 获取节气信息
   *
   * @param { number } year 公历年 (1900-2100)
   * @param { number } n  n二十四节气中的第几个节气 (1~24)；从 n=1 (小寒) 算起
   * @returns { number }
   */
  const getTerm = (year: number, n: number): number => {
    if (year < 1900 || year > 2100 || n < 1 || n > 24) {
      return -1
    }
    const _table: string = SOLAR_TERM_LIST[year - 1900]
    const _calcDay: string[] = []

    for (let index = 0; index < _table.length; index += 5) {
      const chunk: string = parseInt('0x' + _table.substr(index, 5)).toString()
      _calcDay.push(chunk[0], chunk.substr(1, 2), chunk[3], chunk.substr(4, 2))
    }
    return parseInt(_calcDay[n - 1])
  }

  /**
   * 传入农历日期数字返回汉字表示法
   *
   * @param { number } day 农历日期
   * @returns { string }
   */
  const toChinaDay = (day: number): string => {
    let s: string
    switch (day) {
      case 10:
        s = '\u521d\u5341'
        break
      case 20:
        s = '\u4e8c\u5341'
        break
      case 30:
        s = '\u4e09\u5341'
        break
      default:
        s = DATE_CHANG_LUNAR_CALENDAR[Math.floor(day / 10)]
        s += CONVERT_DIGIT_CHINES[day % 10]
    }
    return s
  }

  /**
   * 传入阳历年月日获得详细的信息
   *
   * @param { number } yPara 阳历年份
   * @param { number } mPara 阳历月份
   * @param { number } dPara 阳历日期
   */
  const getLunarDetail = (
    yPara: number,
    mPara: number,
    dPara: number
  ): -1 | GetLunarDetailReturn => {
    /**
     * @see parseInt https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
     */
    let y: number = parseInt(yPara.toString())
    let m: number = parseInt(mPara.toString())
    let d: number = parseInt(dPara.toString())

    /** 年份限定、上限 */
    if (y < 1900 || y > 2100) {
      return -1
    }

    /** 公历传参最下限 */
    if (y === 1900 && m === 1 && d < 31) {
      return -1
    }

    /** 未传参 获得当天 */
    let objDate: Date

    if (!y) {
      objDate = new Date()
    } else {
      objDate = new Date(y, parseInt(m.toString()) - 1, d)
    }

    let i,
      leap = 0,
      temp = 0

    /** 修正 ymd 参数 */
    y = objDate.getFullYear()
    m = objDate.getMonth() + 1
    d = objDate.getDate()

    let offset: number =
      (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) -
        Date.UTC(1900, 0, 31)) /
      86400000

    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = getLunarYearDays(i)
      offset -= temp
    }
    if (offset < 0) {
      offset += temp
      i--
    }

    /** 星期几 */
    let week: number = objDate.getDay()

    /** 数字表示周几顺应天朝周一开始的惯例 */
    if (week === 0) {
      week = 7
    }
    /** 农历年 */
    const year: number = i
    leap = leapMonth(i) /** 闰哪个月 */
    let isLeap = false

    /** 效验闰月 */
    for (i = 1; i < 13 && offset > 0; i++) {
      /** 闰月 */
      if (leap > 0 && i === leap + 1 && isLeap === false) {
        --i
        isLeap = true
        temp = leapDays(year) /** 计算农历闰月天数 */
      } else {
        temp = monthDays(year, i) /** 计算农历普通月天数 */
      }
      /** 解除闰月 */
      if (isLeap === true && i === leap + 1) {
        isLeap = false
      }
      offset -= temp
    }
    /** 闰月导致数组下标重叠取反 */
    if (offset === 0 && leap > 0 && i === leap + 1) {
      if (isLeap) {
        isLeap = false
      } else {
        isLeap = true
        --i
      }
    }
    if (offset < 0) {
      offset += temp
      --i
    }

    /** 农历月 */
    const month: number = i
    /** 农历日 */
    const day: number = offset + 1

    const secondNode: number = getTerm(y, m * 2) /** 返回当月「节」为几日开始 */

    /** 传入的日期的节气与否 */
    let term = ''

    if (secondNode === d) {
      term = SOLAR_TERM[m * 2 - 1]
    }

    /** 该日期所属的星座 */
    const constellation: string = toConstellation(m, d)

    const festivalDate: string = m + '-' + d
    let lunarFestivalDate: string = month + '-' + day

    /**
     * @see github https://github.com/jjonline/calendar.js/issues/29
     *
     * 农历节日修正：农历 12 月小月则 29 号除夕，大月则 30 号除夕
     *
     * 此处取巧修正：当前为农历 12 月 29 号时增加一次判断并且把 lunarFestivalDate 设置为 12-30 以正确取得除夕
     *
     * 天朝农历节日遇闰月过前不过后的原则，此处取农历 12 月天数不考虑闰月
     *
     * 农历润 12 月在本工具支持的 200 年区间内仅 1574 年出现
     */
    if (month === 12 && day === 29 && monthDays(year, month) === 29) {
      lunarFestivalDate = '12-30'
    }

    return {
      /** 阳历节日 */
      festival: SOLAR_CALENDAR_FESTIVE[festivalDate]
        ? SOLAR_CALENDAR_FESTIVE[festivalDate].title
        : '',
      /** 农历节日 */
      lunarFestival: LUNAR_FESTIVE[lunarFestivalDate]
        ? LUNAR_FESTIVE[lunarFestivalDate].title
        : '',
      /** 农历日期 */
      lunar: toChinaDay(day),
      /** 节气 */
      term,
      /** 星座 */
      constellation
    } as const
  }

  return getLunarDetail
}
