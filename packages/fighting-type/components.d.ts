import {
  FDivider,
  FButton,
  FCard,
  FIcon,
  FImage,
  FButtonGroup,
  FLink
} from '@fighting-design/fighting-components'

declare module 'vue' {
  export interface GlobalComponents {
    FDivider: typeof FDivider
    FButton: typeof FButton
    FCard: typeof FCard
    FIcon: typeof FIcon
    FImage: typeof FImage
    FButtonGroup: typeof FButtonGroup
    FLink: typeof FLink
  }
}
export {}
