<template>
  <view class="pi-scroll-container">
    <pi-navbar title="loading" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-loading show />
        <pi-loading show size="50" />
        <pi-loading show>加载中</pi-loading>
        <pi-loading show size="50" color="#ff508a" />
        <pi-loading show color="#ff508a" type="circular" />
        <pi-loading show color="#ff508a" type="circular">加载中</pi-loading>
        <pi-loading show size="38rpx" type="circular" vertical>加载中</pi-loading>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>
