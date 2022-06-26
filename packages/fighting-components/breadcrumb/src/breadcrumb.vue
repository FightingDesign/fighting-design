<template>
    <div class="f-breadcrumb">
        <slot/>
    </div>
</template>

<script lang="ts" setup name="FBreadcrumb">
import {  onMounted, provide, ref} from "vue"
import { breadcrumbKey, breadcrumbProps } from './breadcrumb';

const props = defineProps(breadcrumbProps)


provide(breadcrumbKey, props)

onMounted(() => {
  const breadcrumb = document.querySelector(".f-breadcrumb")
  const items = breadcrumb!.querySelectorAll(".f-breadcrumb-item")
  if (items.length) {
    items[items.length - 1].setAttribute('aria-current', 'page')
  }
})

</script>
