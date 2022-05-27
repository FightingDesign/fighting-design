import { ref } from 'vue'
import type { Ref } from 'vue'
import type { optionInterface } from '@fighting-design/fighting-type'

export const scale: Ref<number> = ref<number>(1)
export const rotate: Ref<number> = ref<number>(0)

export const small: optionInterface = (): void => {
  scale.value -= 0.2
}

export const big: optionInterface = (): void => {
  scale.value += 0.2
}

export const turnLeft: optionInterface = (): void => {
  rotate.value += 90
}

export const turnRight: optionInterface = (): void => {
  rotate.value -= 90
}

export const recovery: optionInterface = (): void => {
  scale.value = 1
  rotate.value = 0
}
