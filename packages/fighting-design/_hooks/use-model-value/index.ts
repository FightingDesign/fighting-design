import { computed } from 'vue'
import type { ComputedGetter, WritableComputedRef } from 'vue'

export const useModelValue = (
  get: ComputedGetter<unknown>,
  set: ComputedGetter<unknown>
): { modelValue: WritableComputedRef<unknown> } => {

  const modelValue = computed({ get, set })

  return { modelValue }
}
