import type { textAliagn, direction } from "@fighting-design/fighting-type";
import type { PropType } from "vue";

export const Props = {
    textAlign: {
        type: String as PropType<textAliagn>,
        default: (): string => 'center',
        validator: (value: string): boolean => ['left', 'center', 'right'].includes(value)
    },
    direction: {
        type: String as PropType<direction>,
        default: (): string => 'horizontal',
        validator: (value: string): boolean => ['horizontal', 'vertical'].includes(value)
    }
} as const;