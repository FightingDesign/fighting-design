<script lang="ts" setup>
import '@docsearch/css'
import { useData } from 'vitepress'
import { ref, defineAsyncComponent, onMounted, onUnmounted } from 'vue'

const { theme } = useData()
const VPAlgoliaSearchBox = defineAsyncComponent(
  () => import('./VPAlgoliaSearchBox.vue')
)

// to avoid loading the docsearch js upfront (which is more than 1/3 of the
// payload), we delay initializing it until the user has actually clicked or
// hit the hotkey to invoke it
const loaded = ref(false)
const metaKey = ref()

onMounted(() => {
  if (!theme.value.algolia) return

  // meta key detect (same logic as in @docsearch/js)
  metaKey.value.textContent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    ? '⌘'
    : 'Ctrl'
  const handleSearchHotKey = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      load()
      remove()
    }
  }
  const remove = () => {
    window.removeEventListener('keydown', handleSearchHotKey)
  }
  window.addEventListener('keydown', handleSearchHotKey)
  onUnmounted(remove)
})

function load() {
  if (!loaded.value) {
    loaded.value = true
  }
}
</script>

<template>
  <div v-if="theme.algolia" class="VPNavBarSearch">
    <VPAlgoliaSearchBox v-if="loaded" />
    <div v-else id="docsearch" @click="load">
      <button
        type="button"
        class="DocSearch DocSearch-Button"
        aria-label="Search"
      >
        <span class="DocSearch-Button-Container">
          <svg
            width="20"
            height="20"
            class="DocSearch-Search-Icon"
            viewBox="0 0 20 20"
          >
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="DocSearch-Button-Placeholder">Search</span>
        </span>
        <span class="DocSearch-Button-Keys">
          <span class="DocSearch-Button-Key" ref="metaKey">Meta</span>
          <span class="DocSearch-Button-Key">K</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style>
.VPNavBarSearch {
  display: flex;
  align-items: center;
  padding-left: 16px;
}

@media (min-width: 768px) {
  .VPNavBarSearch {
    flex-grow: 1;
  }
}

.DocSearch {
  --docsearch-primary-color: var(--vt-c-brand);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-text-color: var(--vt-c-text-1);
  --docsearch-muted-color: var(--vt-c-text-2);
  --docsearch-searchbox-shadow: none;
  --docsearch-searchbox-focus-background: transparent;
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
  --docsearch-modal-background: var(--vt-c-bg-soft);
  --docsearch-footer-background: var(--vt-c-bg);
}

.dark .DocSearch {
  --docsearch-modal-shadow: none;
  --docsearch-footer-shadow: none;
  --docsearch-logo-color: var(--vt-c-text-2);
  --docsearch-hit-background: var(--vt-c-bg-mute);
  --docsearch-hit-color: var(--vt-c-text-2);
  --docsearch-hit-shadow: none;
}

.dark .DocSearch-Footer {
  border-top: 1px solid var(--vt-c-divider);
}

.dark .DocSearch-Form {
  background-color: var(--vt-c-bg-mute);
}

.DocSearch-Form {
  background-color: white;
  border: 1px solid var(--vt-c-brand);
}

.DocSearch-Button-Container {
  align-items: center;
  display: flex;
}

.DocSearch-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 48px;
  height: 55px;
  background: transparent;
}

.DocSearch-Button:hover {
  background: transparent;
}
.DocSearch-Button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
.DocSearch-Button:focus:not(:focus-visible) {
  outline: none !important;
}

@media (min-width: 768px) {
  .DocSearch-Button {
    justify-content: flex-start;
    width: 100%;
  }
}

.DocSearch-Button .DocSearch-Search-Icon {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  fill: currentColor;
  width: 18px;
  height: 18px;
  position: relative;
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Search-Icon {
    top: 1px;
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
}

.DocSearch-Button:hover .DocSearch-Search-Icon {
  color: var(--vt-c-text-1);
}

.DocSearch-Button-Placeholder {
  transition: color 0.5s;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  display: none;
  padding: 0 10px 0 0;
}

@media (min-width: 960px) {
  .DocSearch-Button-Placeholder {
    display: inline-block;
  }
}

.DocSearch-Button:hover .DocSearch-Button-Placeholder {
  color: var(--vt-c-text-1);
}

.DocSearch-Button .DocSearch-Button-Key {
  margin-top: 2px;
  border: 1px solid var(--vt-c-divider);
  border-right: none;
  border-radius: 4px 0 0 4px;
  display: none;
  padding-left: 6px;
  height: 22px;
  line-height: 22px;
  transition: color 0.5s, border-color 0.5s;
  min-width: 0;
}

.DocSearch-Button .DocSearch-Button-Key + .DocSearch-Button-Key {
  border-right: 1px solid var(--vt-c-divider);
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding-left: 2px;
  padding-right: 6px;
}

.DocSearch-Button:hover .DocSearch-Button-Key {
  border-color: var(--vt-c-brand-light);
  color: var(--vt-c-brand-light);
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Button-Key {
    display: inline-block;
  }
}

.DocSearch-Button-Key {
  font-size: 12px;
  font-weight: 500;
  height: 20px;
  margin: 0;
  width: auto;
  color: var(--vt-c-text-3);
  transition: color 0.5s;
  display: inline-block;
  padding: 0 1px;
}
</style>
