<script lang="ts" setup>
  import { Repl } from '@vue/repl'
  import { ReplStore as MyReplStore } from './store'
  import { watchEffect } from 'vue'
  import '@vue/repl/style.css'
  import HeaderVue from './components/Header.vue'
  import CodeMirror from '@vue/repl/codemirror-editor'
  import type { ReplStore } from '@vue/repl'

  const store = new MyReplStore({
    serializedState: location.hash.slice(1),
    defaultVueRuntimeURL:
      'https://unpkg.com/@vue/runtime-dom@3.2.29/dist/runtime-dom.esm-browser.js'
  }) as unknown as ReplStore

  // 将状态持久化到 URL 哈希
  watchEffect(() => history.replaceState({}, '', store.serialize()))
</script>

<template>
  <header-vue />
  <repl :store="store" show-compile-output :editor="CodeMirror" />
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  .vue-repl {
    position: fixed;
    top: 55px;
    right: 0;
    bottom: 0;
    left: 0;

    .file.active {
      color: #2d5af1;
      border-bottom: 3px solid #2d5af1;

      .label {
        color: #2d5af1;
      }
    }

    .active {
      border-bottom: 3px solid #2d5af1 !important;

      span {
        color: #2d5af1;
      }
    }
  }
</style>
