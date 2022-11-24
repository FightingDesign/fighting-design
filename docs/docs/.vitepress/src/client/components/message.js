import { createApp, h } from 'vue'
import Message from './Message.vue'

// newInstance
Message.newInstance = (props = {}) => {
  const container = document.createElement('div')

  const app = createApp({
    render() {
      return h(Message, {
        ...props,
        ref: 'messageRef'
      })
    }
  })

  const instance = app.mount(container)
  const messageRef = instance.$refs.messageRef
  document.body.appendChild(container.firstElementChild)

  return {
    add(messageProps) {
      messageRef.add(messageProps)
    },
    remove(name) {
      messageRef.remove(name)
    }
  }
}

// message
let messageInstance

function getMessageInstance() {
  messageInstance = messageInstance || Message.newInstance()
  return messageInstance
}

function message(content, { duration = 3, type = '' }) {
  const instance = getMessageInstance()

  instance.add({ content, duration, type })
}

export default {
  info(content, options) {
    return message(content, { ...options })
  },
  error(content, options) {
    return message(content, { ...options, type: 'error' })
  }
}
