<template>
  <f-space spacing="large">
    <div class="image-block">
      <code>fill</code>
      <f-image
        width="110px"
        height="110px"
        fit="fill"
        src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
      />
    </div>
    <div class="image-block">
      <code>contain</code>
      <f-image
        width="110px"
        height="110px"
        fit="contain"
        src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
      />
    </div>
    <div class="image-block">
      <code>cover</code>
      <f-image
        width="110px"
        height="110px"
        fit="cover"
        src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
      />
    </div>
    <div class="image-block">
      <code>none</code>
      <f-image
        width="110px"
        height="110px"
        fit="none"
        src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
      />
    </div>
    <div class="image-block">
      <code>scale-down</code>
      <f-image
        width="110px"
        height="110px"
        fit="scale-down"
        src="https://raw.githubusercontent.com/Tyh2001/images/master/auto/4.jpg"
      />
    </div>
  </f-space>
</template>

<style scoped>
  .image-block {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  code {
    margin-bottom: 6px;
  }
</style>
