<script>
  import { getCurrentInstance, computed, ref } from 'vue'
  export default {
    props: {
      message: {
        type: [String, Object]
      },
      type: {
        type: String,
        defalut: 'info',
        validator (val) {
          return ['success', 'warning', 'info', 'error'].includes(val)
        }
      },
      iconClass: String,
      showClose: Boolean,
      duration: Number,
      center: Boolean,
      dangerouslyUseHTMLString: Boolean,
      offset: Number
    },
    emits: ['close'],
    setup (props, { emit }) {
      const instance = getCurrentInstance()

      const isShow = ref(true)
      // @public
      const offsetVal = ref(props.offset)

      const isShowType = computed(() => props.type && !props.iconClass)
      const positionStyle = computed(() => ({
        top: `${offsetVal.value}px`
      }))

      let timer
      function delayClose () {
        if (props.duration > 0) {
          timer = setTimeout(() => {
            _close()
          }, props.duration)
        }
      }

      function _close () {
        clearTimeout(timer)
        emit('close', instance)
        isShow.value = false
      }

      delayClose()

      return {
        isShow,
        isShowType,
        positionStyle,
        offsetVal
      }
    }
  }
</script>

<template>
  <div v-show="isShow" :style="positionStyle">
    {{ message }}
  </div>
</template>
