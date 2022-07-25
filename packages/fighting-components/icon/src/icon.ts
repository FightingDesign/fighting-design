export const Props = {
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
