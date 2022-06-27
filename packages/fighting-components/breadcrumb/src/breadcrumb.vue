<template>
  <div class="f-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts" setup name="FBreadcrumb">
  import { onMounted, provide } from 'vue'
  import { breadcrumbKey, Props } from './breadcrumb'

  const prop = defineProps(Props)

  provide(breadcrumbKey, prop)

  // console.log(prop.separatorIcon)

  onMounted((): void => {
    // const breadcrumb = document.querySelector('.f-breadcrumb')
    // const items = breadcrumb!.querySelectorAll('.f-breadcrumb-item')
    // if (items.length) {
    //   items[items.length - 1].setAttribute('aria-current', 'page')
    // }
  })
</script>
