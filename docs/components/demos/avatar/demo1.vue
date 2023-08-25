<template>
  <f-space spacing="mini">
    <div class="avatar-block">
      <code>fill</code>
      <f-avatar fit="fill" src="https://avatars.githubusercontent.com/u/73180970?v=4" />
    </div>
    <div class="avatar-block">
      <code>contain</code>
      <f-avatar
        fit="contain"
        src="https://avatars.githubusercontent.com/u/73180970?v=4"
      />
    </div>
    <div class="avatar-block">
      <code>cover</code>
      <f-avatar fit="cover" src="https://avatars.githubusercontent.com/u/73180970?v=4" />
    </div>
    <div class="avatar-block">
      <code>none</code>
      <f-avatar fit="none" src="https://avatars.githubusercontent.com/u/73180970?v=4" />
    </div>
    <div class="avatar-block">
      <code>scale-down</code>
      <f-avatar
        fit="scale-down"
        src="https://avatars.githubusercontent.com/u/73180970?v=4"
      />
    </div>
  </f-space>
</template>

<style scoped>
  .f-avatar {
    margin: 5px;
  }
  .avatar-block {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
