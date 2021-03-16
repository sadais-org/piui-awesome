<template>
  <view class="pi-scroll-container">
    <pi-navbar title="间隔槽" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-section title="高度" padding="24rpx 32rpx" />
      <pi-gap height="20" margin-bottom="10" />
      <pi-gap height="5% " />
      <pi-section title="背景颜色" padding="24rpx 32rpx" />
      <pi-gap background="#f50" margin-bottom="10" />
      <pi-gap background="#ff508a" margin-bottom="10" />
      <pi-gap background="#5a7dff" />
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Gap'
}
</script>
