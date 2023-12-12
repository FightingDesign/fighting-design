import { computed, inject, reactive, toRefs } from 'vue'
import { FIGHTING_GLOBAL_PROPS_KEY } from '../../fighting-global/src/props'
import { LANG } from '../../_lang'
import { isArray } from '../../_utils'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { ComputedRef } from 'vue'
import type { LangContentKey, LangKey } from '../../_lang'
import type { FightingType, FightingSize, FightingLang } from '../../_interface'
import type { FightingGlobalProps } from '../../fighting-global'

/**
 * useGlobal 所需要的 prop 参数类型接口
 *
 * @param { string } [type] 组件的类型
 * @param { string } [size] 组件的尺寸
 */
export interface UseGlobalProp {
  type: FightingType | null
  size: FightingSize | string | number
}

/**
 * useGlobal 返回值类型接口
 *
 * @param { Function } getType 获取组件的类型
 * @param { Function } getSize 获取组件的尺寸
 * @param { Function } getLang 获取组件的语言
 * @param { Function } getProp 获取组件修改指定参数后的 props
 */
export interface UseGlobalReturn {
  getType: (def?: FightingType) => ComputedRef<FightingType>
  getSize: (
    def?: FightingSize,
    parentSize?: FightingSize | null
  ) => ComputedRef<FightingSize>
  getLang: <T extends LangContentKey>(componentName: T) => ComputedRef<LangKey[T]>
  getProp: (target: ('type' | 'size')[], def?: string[]) => object
}

/**
 * 获取组件所需要的配置项，有组件内部的 prop、全局配置和默认值三个参数
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop 组件的 prop
 * @returns { Object } 根据优先级返回需要的参数
 */
export const useGlobal = (prop?: Partial<UseGlobalProp>): UseGlobalReturn => {
  /** 获取全局配置组件注入的依赖项 */
  const global: FightingGlobalProps | null = inject(FIGHTING_GLOBAL_PROPS_KEY, null)

  /**
   * 获取组件的类型
   *
   * @param { string } def 默认参数
   * @returns { Object } 类型
   */
  const getType = (def: string | FightingType = 'default'): ComputedRef<FightingType> => {
    return computed((): FightingType => {
      if (!prop) {
        return def as FightingType
      }

      // 如果校验不通过则返回默认值
      if (prop.type && !FIGHTING_TYPE.includes(prop.type)) {
        return def as FightingType
      }

      return (prop.type || (global && global.type) || def) as FightingType
    })
  }

  /**
   * 获取组件的尺寸
   *
   * @param { string } def 默认参数
   * @param { string } [parentSize] 父组件可能需要注入的依赖项
   * @returns { Object } 尺寸
   */
  const getSize = (
    def: string | FightingSize = 'middle',
    parentSize?: FightingSize | null
  ): ComputedRef<FightingSize> => {
    return computed((): FightingSize => {
      if (!prop) {
        return def as FightingSize
      }

      /**
       * 校验格式
       *
       * 如果 size 存在，但是不符合 size 指定字符串则返回默认值 middle
       */
      if (prop.size && !FIGHTING_SIZE.includes(prop.size as FightingSize)) {
        return def as FightingSize
      }

      /**
       * 返回优先级：自己的 size > 父级 size > 全局 size > 默认值
       */
      return (prop.size || parentSize || (global && global.size) || def) as FightingSize
    })
  }

  /**
   * 获取组件的文案
   *
   * @param { string } componentName 组件名
   * @returns { Object } 当前组件下的文案
   */
  const getLang = <T extends LangContentKey>(
    componentName: T
  ): ComputedRef<LangKey[T]> => {
    return computed((): LangKey[T] => {
      /** 获取当前的语言 */
      const lang: FightingLang = (global && global.lang) || 'zh-CN'
      /** 获取当前的语音对象 */
      const langList = LANG[lang]
      // 返回指定组件的语言内容
      return langList[componentName]
    })
  }

  /** 设置 type 和 size 的默认映射调用对象 */
  const getPropMap = {
    type: getType,
    size: getSize
  } as const

  /**
   * 有些组件的 props 需要获取全局配置的属性
   *
   * 使用此方法，第一个参数传递需要获取全局配置的 key 数组
   *
   * 第二个可选参数用于定义默认值，target 参数的第一个 key 默认值对应 def 数组的第一个元素
   *
   * @param { string[] } target 需要获取全局配置的参数数组
   * @param { string[] } [def] 默认值数组
   * @returns { Object } props 参数列表
   */
  const getProp = (target: ('type' | 'size')[], def?: string[]): object => {
    /** 结果 props 对象 */
    const prams: {
      type?: ComputedRef<FightingSize | FightingType>
      size?: ComputedRef<FightingSize | FightingType>
    } = {}

    /** 必须是数组才遍历，提前拦截错误 */
    if (isArray(target)) {
      target.forEach((item: 'type' | 'size', index: number): void => {
        /** 检测映射对象中是否存在该属性 */
        if (getPropMap[item]) {
          /** 获取默认值 */
          const defaultValue: string | undefined = def && def[index]

          /** 将需要更改的树形改为指定参数 */
          prams[item] = getPropMap[item](defaultValue)
        }
      })
    }

    if (prop) {
      return reactive({
        ...toRefs(prop),
        ...prams
      })
    }

    return reactive({
      ...prams
    })
  }

  return {
    getType,
    getSize,
    getLang,
    getProp
  }
}
