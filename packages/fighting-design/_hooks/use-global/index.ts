import { computed, inject } from 'vue'
import { FIGHTING_GLOBAL_PROPS_KEY } from '../../fighting-global/src/props'
import { LANG } from '../../_lang'
import { FIGHTING_SIZE, FIGHTING_TYPE } from '../../_tokens'
import type { ComputedRef } from 'vue'
import type { LangContentKey, LangKey } from '../../_lang'
import type { FightingType, FightingSize, FightingLang } from '../../_interface'
import type { UseGlobalProp, UseGlobalReturn } from './interface'
import type { FightingGlobalProps } from '../../fighting-global'

export * from './interface.d'

/**
 * 获取组件所需要的配置项，有组件内部的 prop、全局配置和默认值三个参数
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } [prop] 组件的 prop
 * @returns { Object } 根据优先级返回需要的参数
 */
export const useGlobal = <T extends UseGlobalProp>(prop?: T): UseGlobalReturn => {
  /** 获取全局配置组件注入的依赖项 */
  const global: FightingGlobalProps | null = inject(FIGHTING_GLOBAL_PROPS_KEY, null)

  /**
   * 获取组件的类型
   *
   * @param { string } def 默认参数
   * @returns { Object } 类型
   */
  const getType = (def: FightingType = 'default'): ComputedRef<FightingType> => {
    return computed((): FightingType => {
      /** 如果校验不通过则返回默认值 */
      if (prop && prop.type && !FIGHTING_TYPE.includes(prop.type)) {
        return def
      }

      return (prop && prop.type) || (global && global.type) || def
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
    def: FightingSize = 'middle',
    parentSize?: FightingSize | null
  ): ComputedRef<FightingSize> => {
    return computed((): FightingSize => {
      /** 如果校验不通过则返回默认值 */
      if (prop && prop.size && !FIGHTING_SIZE.includes(prop.size as FightingSize)) {
        return def
      }

      return (
        (prop && (prop.size as FightingSize)) ||
        parentSize ||
        (global && global.size) ||
        def
      )
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
      const lang: FightingLang = (global && global.lang) || 'zh-CN'
      const langList = LANG[lang]

      return langList[componentName]
    })
  }

  return {
    getType,
    getSize,
    getLang
  }
}
