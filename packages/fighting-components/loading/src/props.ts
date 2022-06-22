export const Props = {
  show: {
    type: Boolean,
    default: false
  },
  // 是否可以关闭加载中
  isClose: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: '加载中'
  },
  loadingIcon: {
    type: String,
    default: 'f-icon-loading'
  },
  iconStyle: {
    type: Object,
    default: () => ({ fontSize: '20px' })
  },
  loadingTextColor: {
    type: String,
    default: 'rgb(25, 137, 250)'
  },
  loadingBgColor: {
    type: String,
    default: '#000'
  },
  loadingBgOpacity: {
    type: [String, Number],
    default: '0.7'
  },
  loadingTextSize: {
    type: [String, Number],
    default: '16'
  }
}
