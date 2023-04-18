import { computed } from 'vue'
import type { WritableComputedRef } from 'vue'

export interface UseModelReturn {
  keyword: WritableComputedRef<string | number>
}

export const useModel = (prop, propName, emit, emitName): UseModelReturn => {

  const keyword = computed({
    get: (): string | number => {
      return prop[propName]
    },
    set: (val: string | number): void => {
      emit(emitName, val)
    }
  })

  return { keyword }
}
