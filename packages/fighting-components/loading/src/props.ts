export const Props = {
  show: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: '加载中'
  },
  loadingIcon: {
    type: String,
    default: 'icon'
  },
  loadingTextColor: {
    type: String,
    default: '#FFFFFF'
  },
  loadingBgColor: {
    type: String,
    default: '#000000'
  },
  loadingBgOpacity: {
    type: [String, Number],
    default: '0.3'
  },
  loadingTextSize: {
    type: [String, Number],
    default: '16'
  },
  duration: {
    type: [String, Number],
    default: '0.3'
  }
}
