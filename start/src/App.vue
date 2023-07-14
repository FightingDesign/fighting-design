<script lang="ts" setup></script>

<template>
  <f-avatar-group :size="60">
    <f-avatar round src="http://localhost:8888/src/assets/images/app/setting.png" />
    <f-avatar round src="http://localhost:8888/src/assets/images/app/organization.png" />
    <f-avatar v-for="i in 10" round src="http://localhost:8888/src/assets/images/app/find.png" />
  </f-avatar-group>
</template>
