import type { textAliagn, direction } from "@fighting-design/fighting-type";
import type { PropType } from "vue";

export const Props = {
    textAlign: {
        type: String as PropType<textAliagn>,
        default: (): textAliagn => 'center',
        validator: (value: textAliagn): boolean => ['left', 'center', 'right'].includes(value)
    },
    direction: {
        type: String as PropType<direction>,
        default: (): direction => 'horizontal',
        validator: (value: direction): boolean => ['horizontal', 'vertical'].includes(value)
    }
} as const;
