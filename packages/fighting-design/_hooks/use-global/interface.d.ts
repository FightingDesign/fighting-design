import type { FightingType, FightingSize } from '../../_interface'
import type { ComputedRef } from 'vue'

export interface UseGlobalProp {
  type?: FightingType
  size?: FightingSize
}

export interface UseGlobalReturn {
  getType(def: FightingType): ComputedRef<FightingType>
}
