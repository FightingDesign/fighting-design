import {
  LUNAR_INFO,
  DAY_GAN,
  DAY_ZHI,
  ANIMALS,
  SOLAR_CALENDAR_FESTIVE,
  LUNAR_FESTIVE,
  SOLAR_TERM,
  CONVERT_DIGIT_CHINES,
  DATE_CHANG_LUNAR_CALENDAR,
  CHANG_MONTH_LUNAR_CALENDAR,
  SOLAR_TERM_LIST
} from '../calendar-data'
import type { GetLunarDetailReturn, LunarInterface } from './interface'

export * from './interface.d'

/**
 * 计算当前日期相关
 *
 * 主要用作 calendar 组件
 *
 * 仅支持 1900-2100
 */
export class Lunar implements LunarInterface {
  /**
   * 返回农历 year 年一整年的总天数
   *
   * @param year 年份
   * @returns { Number } 总天数
   */
  getLunarYearDays = (year: number): number => {
    let i: number
    let sum = 348
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += LUNAR_INFO[year - 1900] & i ? 1 : 0
    }
    return sum + this.leapDays(year)
  }

  /**
   * 返回农历 year 年闰月是哪个月；若 year 年没有闰月 则返回 0
   *
   * @param year 年份
   * @returns { Number }
   */
  leapMonth = (year: number): number => {
    return LUNAR_INFO[year - 1900] & 0xf
  }

  /**
   * 返回农历 year 年闰月的天数 若该年没有闰月则返回 0
   *
   * @param year 年份
   * @returns { Number }
   */
  leapDays = (year: number): number => {
    if (this.leapMonth(year)) {
      return LUNAR_INFO[year - 1900] & 0x10000 ? 30 : 29
    }
    return 0
  }

  /**
   * 返回农历 year 年 month 月（非闰月）的总天数，计算 month 为闰月时的天数请使用 leapDays 方法
   *
   * @param year 农历年份
   * @param month 农历月份
   * @returns { Number }
   */
  monthDays = (year: number, month: number): number => {
    if (month > 12 || month < 1) {
      // 月份参数从 1 至 12，参数错误返回 -1
      return -1
    }
    return LUNAR_INFO[year - 1900] & (0x10000 >> month) ? 30 : 29
  }

  /**
   * 农历年份转换为干支纪年
   *
   * @param lYear 农历年份
   * @return { String }
   */
  toGanZhiYear = (lYear: number): string => {
    let ganKey: number = (lYear - 3) % 10
    let zhiKey: number = (lYear - 3) % 12
    if (ganKey === 0) ganKey = 10 // 如果余数为 0 则为最后一个天干
    if (zhiKey === 0) zhiKey = 12 // 如果余数为 0 则为最后一个地支
    return DAY_GAN[ganKey - 1] + DAY_ZHI[zhiKey - 1]
  }

  /**
   * 公历月、日判断所属星座
   *
   * @param cMonth 公历月
   * @param cDay 公历日
   * @return { String }
   */
  toConstellation = (cMonth: number, cDay: number): string => {
    const s =
      '\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf' as const
    const arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22] as const
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '\u5ea7'
  }

  /**
   * 传入 offset 偏移量返回干支
   *
   * @param offset 相对甲子的偏移量
   * @return { String }
   */
  toGanZhi = (offset: number): string => {
    return DAY_GAN[offset % 10] + DAY_ZHI[offset % 12]
  }

  /**
   * 传入公历(!) year 年获得该年第 n 个节气的公历日期
   *
   * @param year 公历年 (1900-2100)
   * @param n  n二十四节气中的第几个节气 (1~24)；从 n=1 (小寒) 算起
   * @return { Number }
   */
  getTerm = (year: number, n: number): number => {
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
   * 传入农历数字月份返回汉语通俗表示法
   *
   * @param month 农历月份
   * @return { String | Number }
   */
  toChinaMonth = (month: number): string | -1 => {
    // 若参数错误 返回-1
    if (month > 12 || month < 1) {
      return -1
    }
    let s: string = CHANG_MONTH_LUNAR_CALENDAR[month - 1]
    s += '\u6708' // 加上月字
    return s
  }

  /**
   * 传入农历日期数字返回汉字表示法
   *
   * @param day 农历日期
   * @return { String }
   */
  toChinaDay = (day: number): string => {
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
   * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是 “立春”
   *
   * @param year 年份
   * @return { String }
   */
  getAnimal = (year: number): string => {
    return ANIMALS[(year - 4) % 12]
  }

  /**
   * 传入阳历年月日获得详细的信息
   *
   * @param yPara 阳历年份
   * @param mPara 阳历月份
   * @param dPara 阳历日期
   */
  getLunarDetail = (yPara: number, mPara: number, dPara: number): -1 | GetLunarDetailReturn => {
    let y: number = parseInt(yPara.toString())
    let m: number = parseInt(mPara.toString())
    let d: number = parseInt(dPara.toString())

    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1
    }

    // 公历传参最下限
    if (y === 1900 && m === 1 && d < 31) {
      return -1
    }

    // 未传参  获得当天
    let objDate: Date

    if (!y) {
      objDate = new Date()
    } else {
      objDate = new Date(y, parseInt(m.toString()) - 1, d)
    }

    let i,
      leap = 0,
      temp = 0

    // 修正ymd参数
    y = objDate.getFullYear()
    m = objDate.getMonth() + 1
    d = objDate.getDate()

    let offset: number =
      (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000

    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.getLunarYearDays(i)
      offset -= temp
    }
    if (offset < 0) {
      offset += temp
      i--
    }

    // 星期几
    let nWeek: number = objDate.getDay()

    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek === 0) {
      nWeek = 7
    }
    // 农历年
    const year: number = i
    leap = this.leapMonth(i) // 闰哪个月
    let isLeap = false

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i === leap + 1 && isLeap === false) {
        --i
        isLeap = true
        temp = this.leapDays(year) // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i) // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap === true && i === leap + 1) {
        isLeap = false
      }
      offset -= temp
    }
    // 闰月导致数组下标重叠取反
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

    const month: number = i // 农历月
    const day: number = offset + 1 // 农历日
    const sm: number = m - 1 // 天干地支处理
    const gzY: string = this.toGanZhiYear(year)

    // 当月的两个节气
    const firstNode: number = this.getTerm(y, m * 2 - 1) // 返回当月「节」为几日开始
    const secondNode: number = this.getTerm(y, m * 2) // 返回当月「节」为几日开始

    // 依据 12 节气修正干支月
    let gzM: string = this.toGanZhi((y - 1900) * 12 + m + 11)
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12)
    }

    // 传入的日期的节气与否
    let Term = null

    if (firstNode === d) {
      Term = SOLAR_TERM[m * 2 - 2]
    }
    if (secondNode === d) {
      Term = SOLAR_TERM[m * 2 - 1]
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    const dayCyclical: number = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10
    const gzD: string = this.toGanZhi(dayCyclical + d - 1)
    // 该日期所属的星座
    const constellation: string = this.toConstellation(m, d)

    const solarDate = y + '-' + m + '-' + d
    const lunarDate = year + '-' + month + '-' + day

    const festivalDate: string = m + '-' + d
    let lunarFestivalDate: string = month + '-' + day

    /**
     * @see github https://github.com/jjonline/calendar.js/issues/29
     *
     * 农历节日修正：农历 12 月小月则 29 号除夕，大月则 30 号除夕
     * 此处取巧修正：当前为农历 12 月 29 号时增加一次判断并且把 lunarFestivalDate 设置为 12-30 以正确取得除夕
     * 天朝农历节日遇闰月过前不过后的原则，此处取农历 12 月天数不考虑闰月
     * 农历润 12 月在本工具支持的 200 年区间内仅 1574 年出现
     */
    if (month === 12 && day === 29 && this.monthDays(year, month) === 29) {
      lunarFestivalDate = '12-30'
    }

    return {
      date: solarDate,
      lunarDate,
      festival: SOLAR_CALENDAR_FESTIVE[festivalDate] ? SOLAR_CALENDAR_FESTIVE[festivalDate].title : '',
      lunarFestival: LUNAR_FESTIVE[lunarFestivalDate] ? LUNAR_FESTIVE[lunarFestivalDate].title : '',
      lYear: year,
      lMonth: month,
      lDay: day,
      animal: this.getAnimal(year),
      IMonthCn: (isLeap ? '\u95f0' : '') + this.toChinaMonth(month),
      IDayCn: this.toChinaDay(day),
      cYear: y,
      cMonth: m,
      cDay: d,
      gzYear: gzY,
      gzMonth: gzM,
      gzDay: gzD,
      isLeap,
      nWeek,
      Term,
      constellation
    } as GetLunarDetailReturn
  }
}
