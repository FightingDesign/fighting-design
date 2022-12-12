import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { FightingType } from '../../_interface'
import type { UseGlobalProp, UseGlobalReturn } from './interface'
import type { FightingGlobalProps } from '../../fighting-global'

export * from './interface.d'

export const useGlobal = (prop: UseGlobalProp, global: FightingGlobalProps): UseGlobalReturn => {

  const getType = (def: FightingType): ComputedRef<FightingType> => {
    return computed((): FightingType => {
      return prop.type || (global && global.type) || def
    })
  }

  return {
    getType
  }

}
