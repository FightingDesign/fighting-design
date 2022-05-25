<template>
  <a class="VPNavBarTitle" href="/">
    <img
      class="logo"
      src="https://tianyuhao.cn/fighting/imgs/FightingDesign.svg"
    />
    <span class="text">Fighting Design</span>
  </a>
</template>

<style scoped>
  .VPNavBarTitle {
    display: flex;
    align-items: center;
    padding-top: 1px;
    height: var(--vt-nav-height);
    transition: opacity 0.25s;
  }

  .VPNavBarTitle:hover {
    opacity: 0.7;
  }

  .logo {
    width: 30px;
  }

  .logo + .text {
    padding-left: 8px;
  }

  .text {
    font-size: 16px;
    font-weight: 500;
  }
</style>
