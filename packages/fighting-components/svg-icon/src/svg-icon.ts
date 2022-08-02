export const Props = {
  name: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    default: 'icon'
  },
  color: {
    type: String,
    default: '#333'
  }
} as const
