<template>
  <div class="switch-large">
    <span></span>
  </div>
  <div class="switch-middle">
    <span></span>
  </div>
  <div class="switch-small">
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
  $primary: #2d5af1;

  $SwitchSize: (
    'large': 24px,
    'middle': 20px,
    'small': 16px
  );

  @each $key, $value in $SwitchSize {
    .switch-#{$key} {
      height: $value;
      width: $value * 2;
      display: inline-flex;
      background: $primary;
      border-radius: 20px;
      cursor: pointer;
      span {
        width: $value - 2;
        height: $value - 2;
        display: inline-block;
        border-radius: 50%;
        background: #fff;
        border: 1px solid $primary;
      }
    }
  }
</style>
