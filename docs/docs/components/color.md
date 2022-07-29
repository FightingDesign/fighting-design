# Color 色彩

## 内部颜色

<div id="f-color-box">
  <div class="f-color-primary">
    <div v-for="i in 6" :class="`primary-${i + 1}`" />
  </div>
  <div class="f-color-success">
    <div v-for="i in 6" :class="`success-${i + 1}`" />
  </div>
  <div class="f-color-danger">
    <div v-for="i in 6" :class="`danger-${i + 1}`" />
  </div>
  <div class="f-color-warning">
    <div v-for="i in 6" :class="`warning-${i + 1}`" />
  </div>
</div>

## 其它推荐

<style lang="scss" scoped>
  $default: #f0f0f0;
  $primary: #2d5af1;
  $success: #52b35e;
  $danger: #ff0200;
  $warning: #fcc202;

  $ColorList: (
    (
      name: 'primary',
      color-1: $primary,
      color-2: lighten($primary, 1%),
      color-3: lighten($primary, 10%),
      color-4: lighten($primary, 20%),
      color-5: lighten($primary, 30%),
      color-6: lighten($primary, 40%)
    ),
    (
      name: 'success',
      color-1: $success,
      color-2: lighten($success, 1%),
      color-3: lighten($success, 10%),
      color-4: lighten($success, 20%),
      color-5: lighten($success, 30%),
      color-6: lighten($success, 40%)
    ),
    (
      name: 'danger',
      color-1: $danger,
      color-2: lighten($danger, 1%),
      color-3: lighten($danger, 10%),
      color-4: lighten($danger, 20%),
      color-5: lighten($danger, 30%),
      color-6: lighten($danger, 40%)
    ),
    (
      name: 'warning',
      color-1: $warning,
      color-2: lighten($warning, 1%),
      color-3: lighten($warning, 10%),
      color-4: lighten($warning, 20%),
      color-5: lighten($warning, 30%),
      color-6: lighten($warning, 40%)
    )
  );

  #f-color-box {
    display: flex;
    justify-content: space-between;

    @for $list from 1 to (length($ColorList) + 1) {
      $item: nth($ColorList, $list);

      .f-color-#{map-get($item, name)} {
        .#{map-get($item, name)}-1 {
          width: 23%;
          height: 50px;
          background: map-get($item, color-1);
        }

        .#{map-get($item, name)}-2 {
          width: 150px;
          height: 50px;
          background: map-get($item, color-2);
        }

        .#{map-get($item, name)}-3 {
          width: 150px;
          height: 50px;
          background: map-get($item, color-3);
        }

        .#{map-get($item, name)}-4 {
          width: 150px;
          height: 50px;
          background: map-get($item, color-4);
        }

        .#{map-get($item, name)}-5 {
          width: 150px;
          height: 50px;
          background: map-get($item, color-5);
        }

        .#{map-get($item, name)}-6 {
          width: 150px;
          height: 50px;
          background: map-get($item, color-6);
        }
      }
    }
  }
</style>
